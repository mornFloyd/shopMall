<template>
  <div id="shopCart">
    <nav-bar class="shopCartText">
      <template v-slot:center>
        <div>
          购物车({{$store.state.cartList.length}})
        </div>
      </template>
    </nav-bar>
    <!-- 添加进购物车的列表显示 -->
    <cart-list />
    <!-- 底部支付框 -->
    <cart-bottom />
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './childcomps/CartList.vue'
import CartBottom from './childcomps/CartBottom.vue'

export default {
  name: 'ShopCart',
  data() {
    return {

    }
  },
  components: {
    NavBar,
    CartList,
    CartBottom
  }
 }
</script>
<style scoped>
.shopCartText {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 600;
}
</style>