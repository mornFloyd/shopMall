<template>
  <div id="shop-item">
        <div class="item-selector">
            <cart-check-button :isCheck='cartInfo.isCheck' @click.enter='checkClick'/>
        </div>
    <div class="item-img">
        <img :src="cartInfo.image" alt="商品图片">
    </div>
    <div class="item-info">
        <div class="item-title">{{cartInfo.title}}</div>
        <div class="item-desc">{{cartInfo.desc}}</div>
        <div class="item-bottom">
            <div class="item-price left">￥{{cartInfo.price}}</div>
            <div class="item-count right">x {{cartInfo.count}}</div>
        </div>
    </div>
        
  </div>
</template>
<script>
import CartCheckButton from './CartCheckButton.vue'
export default {
  props: {
    cartInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {

    }
  },
  methods: {
    checkClick() {
      this.cartInfo.isCheck = !this.cartInfo.isCheck
    }
  },
  // mounted() {
  //   console.log(this.cartInfo);
  // },
  components: {
    CartCheckButton
  }
}
</script>
<style scoped>
  #shop-item{
      width:100%;
      display: flex;
      font-size: 0;
      padding: 5px;
      border-bottom: 1px solid #ccc;
  }
  .item-selector{
      width: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .item-title, .item-desc{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
  }
  .item-img{
      padding: 5px;
  }
  .item-img img{
      width: 80px;
      height: 100px;
      display: block;
      border-radius: 5px;
  }
  .item-info{
      font-size: 17px;
      color: #333;
      padding: 5px 10px;
      position: relative;
      overflow: hidden;
  }
  .item-info .item-desc{
      font-size: 14px;
      color: #666;
      margin-top: 15px;
  }
  .item-bottom{
      margin-top: 10px;
      position: absolute;
      bottom: 10px;
      left: 10px;
      right: 10px;
  }
  .item-bottom .item-price{
      color: orangered;
  }
</style>