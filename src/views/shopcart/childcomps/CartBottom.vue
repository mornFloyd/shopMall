<template>
  <div class="cart-bottom">
    <div class="check-box" @click="allClick">
      <cart-check-button class="check-button" :class="{checked:selectAll}"/>
      <span>全选</span>
    </div>
    <div class="price">
      <span>合计:{{totlePrice}}</span>
    </div>
    <div class="cacl">
      <span>去结算({{sum}})</span>
    </div>
  </div>
</template>
<script>
import CartCheckButton from './CartCheckButton'
export default {
  data() {
    return {
    }
  },
  components: {
    CartCheckButton
  },
  computed: {
    totlePrice() {
      return this.$store.state.cartList.filter((item) => {
        return item.isCheck
      }).reduce((previous,item) => {
        return previous += item.price * item.count
      },0).toFixed(2)
    },
    sum() {
      return this.$store.state.cartList.filter((item) => {
        return item.isCheck
      }).reduce((previous,item) => {
        return previous += item.count
      },0)
    },
    selectAll() {
      if(!this.$store.state.cartList.length) return false
      return !this.$store.state.cartList.find(item => !item.isCheck)
    }
  },
  methods: {
    allClick() {
      if(this.selectAll) {
        this.$store.state.cartList.forEach(item => item.isCheck = false);
      }else {
        this.$store.state.cartList.forEach(item => item.isCheck = true);
      }
    }
  }
}
</script>
<style scoped>
.cart-bottom {
  position: absolute;
  height: 40px;
  background-color: #aaa;
  bottom: 49px;
  left: 0;
  right: 0;
  display: flex;
  text-align: center;
  line-height: 40px;
}
.check-box {
  width: 70px;
  line-height: 40px;
  display: flex;
  align-items: center;
}
.check-button {
  width: 20px;
  height: 20px;
  margin-left: 5px;
  margin-right: 6px;
}

.price {
  flex: 1;
}
.cacl {
  width: 90px;
  background-color: orange;
}
</style>