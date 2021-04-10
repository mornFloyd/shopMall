<template>
  <div>
        <tab-bar>
      <tab-bar-item path='/home' textStyle='#d81e06'>
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/index.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/index_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/category' textStyle='#d81e06'>
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/category.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/shopcart' textStyle='#d81e06'>
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/shop.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/shop_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/profile' textStyle='#d81e06'>
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/mine.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/mine_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from 'components/common/tabbar/Tabbar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  data() {
    return {
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>
</style>
