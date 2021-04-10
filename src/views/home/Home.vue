<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <template v-slot:center>
        购物街
      </template>
    </nav-bar>
    
    <tab-control 
        :tabTitle='["流行","新款","精选"]' 
        @controlClick='controlClick' 
        ref="tabControlCopy" 
        v-show="isFixed"/>
    <scroll class="content" 
            ref='scroll' 
            :probe-type='3' 
            @scroll="contentScroll"
            :pull-up-load='true'
            @pulling-up='loadMore'>
      <!-- 轮播图 -->
      <home-swiper :banner='banner' @tabControlImgLoad='tabControlImgLoad'/>
      <!-- 精选推荐 -->
      <home-recommend :recommend= 'recommend' />
      <!-- 本周流行 -->
      <feature-view />
      <!-- 导航控制器 -->
      <tab-control 
        :tabTitle='["流行","新款","精选"]' 
        @controlClick='controlClick' 
        ref="tabControl" />
      <!-- 商品数据列表 -->
      <goods-list :goods='currentList' />
    </scroll>
    <back-top @click.enter='backClick' v-show="isShow"/>
  </div> 
</template>
<script>

import HomeSwiper from './childcomps/HomeSwiper'
import HomeRecommend from './childcomps/HomeRecommend'
import FeatureView from './childcomps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol//TabControl'
import GoodsList from 'components/common/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop.vue'

import {getHomeMultidata} from 'network/home'
import {getHomeData} from 'network/home'




export default {
  name: 'Home',
  data() {
    return {
      banner: null,
      recommend: null,
      goods: {
        pop: {page: 0,list: []},
        new: {page: 0,list: []},
        sell: {page: 0,list: []},
        currentType: 'pop'
      },
      isShow: false,
      offsetTop: 0,
      isFixed: false,
      leavePosition: 0,
      imgLoadFunc: null
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    //获取轮播图数据
    this.getHomeMultidata(),
    //获取首页下拉页数据
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
   
  },
  mounted() {
    //事件总线监听每次图片加载完成
    this.imgLoadFunc = () => {
      this.$refs.scroll && this.$refs.scroll.refresh()
    }
    //this.$bus.on('imgLoad',this.imgLoadFunc)
  },
  computed: {
    currentList() {
      /**
       * 这是展示首页是那个列表的数据
       * 获取到的this.goods.currentType是字符串不能直接点访问属性
       */
      return this.goods[this.goods.currentType].list
    }
    
  },
  activated() {
     this.$refs.scroll.scrollTo(0,this.leavePosition)
     this.$bus.on('imgLoad',this.imgLoadFunc)
  },
  deactivated() {
     this.leavePosition = this.$refs.scroll.scroll.y
     this.$bus.off('imgLoad',this.imgLoadFunc)
  },
  methods: {
    controlClick(index) {
      switch (index) {
        case 0:
          this.goods.currentType = 'pop'
          break;
        case 1:
          this.goods.currentType = 'new'
          break;
        case 2:
          this.goods.currentType = 'sell'
          break
      }
      this.$refs.tabControlCopy.currentTitle = index
      this.$refs.tabControl.currentTitle = index
    },
    //监听按钮的点击
    backClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
    //监听页面滚动长度
    contentScroll(position) {
      //console.log(position);
      this.isShow = (-position.y) > 1500
      this.isFixed = (-position.y) > this.offsetTop
    },
    //监听轮播图是否加载完成  加载完成后执行此函数
    tabControlImgLoad() {
      this.offsetTop = this.$refs.tabControl.$el.offsetTop
    },
    //上拉加载更多
    loadMore() {
      this.getHomeData(this.goods.currentType)
    },
    /**
     * 这是请求数据相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banner = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
      })
    },
    getHomeData(type) {
      const page = this.goods[type].page + 1 
      getHomeData(type,page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page = page
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>
<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-navbar {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.content {
  /* height: 300px; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.fixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
}
</style>