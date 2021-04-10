export default {
  addShopCart(context,payload) { 
    return new Promise((reslove,reject) => {
      let oldProduct = null
      for(let item of context.state.cartList) {
        if(item.iid === payload.iid) {
          oldProduct = item
        }
      }
      if(oldProduct) {
        //oldProduct.count++
        context.commit('addCount',oldProduct)
        reslove('商品数量+1')
      }else {
        payload.count = 1
        // state.cartList.push(payload)
        context.commit('addCart',payload)
        reslove('添加入购物车成功')
      }
    })
  }
}