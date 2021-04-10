<template>
  <div class="cartList">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartListArr" :key="index" :cartInfo='item'/>
    </scroll>
  </div>
</template>
<script>
import Scroll from 'components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem'

export default {
  components: { 
    Scroll,
    CartListItem 
  },
  data() {
    return {
      cartListArr: []
    }
  },
  mounted() {
    //获取vuex中需要展示的数据对象
    this.cartListArr = this.$store.state.cartList
  },
  activated() {
    //当重新回到购物车页面时候需要重新刷新获取购物车内容高度
    this.$refs.scroll.refresh()
  }
  
}
</script>
<style scoped>
.cartList {
  height: 100vh;
  overflow: hidden;
}
.content {
  height: calc(100% - 49px - 44px - 40px);
}
</style>