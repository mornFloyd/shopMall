import {request} from 'network/request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class detailObj {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.desc = itemInfo.desc
    this.realPrice = itemInfo.lowNowPrice
    //活动价图标
    this.discountDesc = itemInfo.discountDesc
    //销量一类
    this.columns = columns
    //销量一栏最后一个
    this.services = services
  }
}
export class detailShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.sell = shopInfo.cSells
    this.fans = shopInfo.cFans
    this.score = shopInfo.score
    //宝贝
    this.goods = shopInfo.cGoods
  }
}
export class detailParams {
  constructor(info,rule) {
    this.set = info.set
    this.table = rule.tables
  }
}
