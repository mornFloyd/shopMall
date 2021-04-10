<template>
  <router-view v-slot='{Component}'>
    <keep-alive include='Home,ShopCart'>
      <component :is='Component'/>
    </keep-alive>
  </router-view>
  <mian-tab-bar></mian-tab-bar>
</template>

<script>

import MianTabBar from 'components/content/MianTabBar'

export default {
  name: 'App',
  components: {
    MianTabBar
  }
}
</script>

<style>
 @import 'assets/css/base.css';
</style>
