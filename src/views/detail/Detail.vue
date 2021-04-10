<template>
  <div id="detail">
    <detail-nav-bar @itemClick='navClick' ref="navBar"/>
    <scroll class="content" 
            ref="scroll"
            :probe-type='3'
            @scroll="contentScroll">
      <!-- 轮播图部分 -->
      <!-- <div>{{$store.state.cartList}}</div> -->
      <detail-swiper :siwperData='siwperData' @imgLoad='imgLoad'/>
      <!-- 价格 -->
      <detail-base-info :detailTop='detailTop'/>
      <!-- 店铺 -->
      <detail-shop-info :shopInfo='shopInfo'/>
      <!-- 穿着效果 -->
      <detail-comment-info :commentInfo='commentInfo' @commentImgLoad='commentImgLoad'/>
      <detail-params-info ref="params" :detailParamsInfo='detailParamsInfo'/>
      <detail-appraise-info ref="appraise" :appraise='appraise'/>
      <goods-list ref="goods" :goods='Recommend'/>
    </scroll>
    <back-top @click.enter='backClick' v-show="isShow"/>
    <detail-bottom-bar @addToCart='addToCart'/>
    <toast :show='show' :message='message'/>
  </div>
</template>
<script>
import { onMounted, onUpdated, onUnmounted } from 'vue'
import DetailNavBar from './childcomps/DetailNavBar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailBaseInfo from './childcomps/DetailBaseInfo'
import DetailShopInfo from './childcomps/DetailShopInfo'
import DetailCommentInfo from './childcomps/DetailCommentInfo.vue'
import DetailParamsInfo from './childcomps/DetailParamsInfo'
import DetailAppraiseInfo from './childcomps/DetailAppraiseInfo'
import DetailBottomBar from './childcomps/DetailBottomBar'
import BackTop from 'components/content/backtop/BackTop'
import Toast from 'components/common/toast/Toast'

import Scroll from 'components/common/scroll/Scroll'

import GoodsList from 'components/common/goods/GoodsList'

import {getDetail,detailObj,detailShopInfo,detailParams,getRecommend} from 'network/detail.js'

import {mapActions} from 'vuex'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      siwperData: [],
      detailTop: {},
      shopInfo: {},
      commentInfo: {},
      detailParamsInfo: {},
      appraise: {},
      Recommend: {},
      scrollToY: [],
      tabIndex: 0,
      contentIndex: 0,
      isShow: false,
      show: false,
      message: ''
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailCommentInfo,
    DetailParamsInfo,
    DetailAppraiseInfo,
    Scroll,
    GoodsList,
    DetailBottomBar,
    BackTop,
    Toast
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.data.result
      this.siwperData = data.itemInfo.topImages
      //将面向详情页顶部内容开发的数据对象传入
      this.detailTop = new detailObj(data.itemInfo,data.columns,data.shopInfo.services)
      //将面向详情页店铺内容开发的数据对象传入
      this.shopInfo = new detailShopInfo(data.shopInfo)
      //获取中部穿着效果评价的展示
      this.commentInfo = data.detailInfo.detailImage[0]
      //获取尺码信息
      this.detailParamsInfo = new detailParams(data.itemParams.info,data.itemParams.rule)
      if(data.rate.list[0]) {
        this.appraise = data.rate.list[0] 
      }
    })
    //推荐列表
    getRecommend().then(res => {
      this.Recommend = res.data.data.list
    })
  },
  // setup() {
  //   onUnmounted(() => {
  //     console.log('unmounted!')
  //   })
  // },
  methods: {
    ...mapActions(['addShopCart']),
    backClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
    imgLoad() {
      this.$refs.scroll.refresh()
    },
    commentImgLoad() {
      this.$refs.scroll.refresh()
      this.scrollToY.push(0) 
      this.scrollToY.push(this.$refs.params.$el.offsetTop)
      this.scrollToY.push(this.$refs.appraise.$el.offsetTop)
      this.scrollToY.push(this.$refs.goods.$el.offsetTop)
    },
    navClick(index) {
      this.$refs.scroll.scrollTo(0,-this.scrollToY[index])
    },
    contentScroll(position) {
      // for(let i in this.scrollToY) {
      //   i = parseInt(i)
      //   if(-position.y >= this.scrollToY[i] && -position.y < this.scrollToY[i+1]) {
      //     console.log(i);
      //     this.contentIndex = i
      //     console.log(this.contentIndex)
      //   }
      this.isShow = (-position.y) > 1500
      const length = this.scrollToY.length
      for (let i = 0; i < length; i++) {
        if(this.contentIndex !== i&&(i<length && -position.y > this.scrollToY[i] && -position.y < this.scrollToY[i+1]) || 
        (i === length-1 &&-position.y > this.scrollToY[length-1])){
          this.contentIndex = i
          this.$refs.navBar.currentIndex = this.contentIndex
        }
      }
    },
    // 添加购物车的对象
    addToCart() {
      const product = {}
      product.image = this.siwperData[0]
      product.title = this.detailTop.title
      product.desc = this.detailTop.desc
      product.price = this.detailTop.realPrice
      product.iid = this.iid
      //不建议使用mutation  mutation要求功能性单一便于追踪数据改变
      //this.$store.commit('addCart',product)
      // this.$store.dispatch('addShopCart',product).then((res) => {
      //   console.log(res);
      // })
      //使用...mapActions的方法
      this.addShopCart(product).then((res) => {
        console.log(res);
        this.show = true
        this.message = res
        setTimeout(() => {
          this.show = false
          this.message = ''
        },1500)
      })
    }
  }
}
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 58px;
  overflow: hidden;
}
</style>