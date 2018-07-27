import React, { Component } from 'react'
import PropTypes from 'prop-types'

import getRcType from '../index'
import Mod3Title from '../mod3Title'
import './index.scss'

export default class ListMod extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  getList() {
    let rst = []
    const { remoteData } = this.props;

    if (!remoteData || !remoteData.list || !remoteData.list.length) return rst

    remoteData.list.forEach((item, index) => {
      let Rc = getRcType(item.type)
      if (Rc) {
        const itemKey = item.id ? `rcitem_${item.id}` : `rcitem_${index}`

        rst.push(
          <Rc
            key={itemKey}
            isShowTag={false}
            jumpUrlCb={() => {this.props.jumpUrlCb(this.props)}}
            {...item}
          />
        )
      }
    })

    return rst
  }

  getViewMore() {
    let rst = null

    const { remoteData, isShowEnterMore } = this.props;
    
    if (isShowEnterMore && remoteData.id) {
      rst = (
        <p className ="view-more">
          <a 
            href={`${remoteData.listUrl}&addressbar=hide`}
            onClick={() => {this.props.jumpUrlCb(this.props)}}
          >查看更多</a>
        </p>
      )
    }

    return rst
  }

  render () {
    const { remoteData } = this.props;

    if (!remoteData || !remoteData.list || !remoteData.list.length) return null

    return (
      <div className="nb-mod3">
        <Mod3Title title={remoteData.title} />
        {this.getList()}
        {this.getViewMore()}
      </div>
    )
  }
}

ListMod.defaultProps = {
  isShowEnterMore: false,
  remoteData: null,
  jumpUrlCb: () => {},
};

ListMod.propTypes = {
  isShowEnterMore: PropTypes.bool,
  remoteData: PropTypes.object,
  jumpUrlCb: PropTypes.func,
}
