import DataStore from './data';

const defaultCacheConf = {
  cacheKey: '',
  expireTime: 10,
  defaultData: null,
  getDataFun: null,
  funArgs: [],
  useCache: true,
};

/**
 * @describe 将接口调用的数据放入缓存，默认缓存时间有 30s
 * @param 参数配置对象，默认配置 defaultCacheConf
 *  - cacheKey {string} 缓存数据对象 key 值
 *  - expireTime {int} 有效期，时间单位为秒
 *  - defaultData {custom} 返回的默认数据，类型根据返回值自定义
 *  - getDataFun {function} 根据接口获取数据的方法，必须为 Promise, 
 *      返回的数据包含 {code, msg, data}
 *  - funArgs {array} 接口数据方法的参数数组
 *  - useCache {boolean} 是否开启缓存开关，独立方法使用
 * @return {custom} 返回的数据结果
 */
export const getDataByCache = async (config) => {
  const options = { ...defaultCacheConf, ...config };

  const { 
    cacheKey,
    expireTime,
    defaultData,
    getDataFun,
    funArgs,
    useCache,
  } = options;

  const time = +new Date();
  const cacheData = DataStore.get(cacheKey);

  let rst = {
    time,
    data: defaultData,
  };

  try {
    // 如果开启缓存开关，有缓存，且在有效期内
    if (useCache && cacheData && time - cacheData.time < expireTime * 1000) {
      rst = cacheData;
      // console.log('from cache', rst);
    } else {
      await syncSetCache();
      // console.log('from remote', rst);
    }
  } catch (err) {
    rst = getCacheData(err);
  }

  async function syncSetCache() {
    const { code, msg, data } = await getDataFun(...funArgs);
    if (code === 0) {
      rst = {
        time,
        data,
      };

      DataStore.set(cacheKey, rst);
    } else {
      rst = getCacheData(msg);
    }
  }

  // 如果接口异常且有缓存数据，用缓存数据保证有数据可用
  // 这种情况下页面数据不会更新了
  function getCacheData(err) {
    const error = err || '';
    console.log(`getDataByCache error: ${cacheKey}`, error);

    let tempRst = rst;

    if (cacheData && cacheData.data) {
      tempRst = cacheData;
    }

    return tempRst;
  }

  return rst.data;
}