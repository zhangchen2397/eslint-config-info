let temp = {};

export default {
  get: function(key) {
    if (!key || typeof key !== 'string') {
      console.log('key must be a string, please check!');
      return null;
    }

    let rst = null;
    if (temp[key]) {
      rst = temp[key];
    }

    return rst;
  },

  set: function(key, val) {
    if (!key || typeof key !== 'string') {
      console.log('key must be a string, please check!');
      return false;
    }

    temp[key] = val;
  },

  remove: function(key) {
    if (!key || typeof key !== 'string') {
      console.log('key must be a string, please check!');
      return false;
    }

    if (temp[key]) temp[key] = null;
  }
};
 