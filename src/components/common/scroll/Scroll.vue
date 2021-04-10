<template>
  <!-- 用ref的方式获取 -->
  <div class="wrapper" ref='wrapper'>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import scroll from 'better-scroll'
import Pullup from '@better-scroll/pull-up'
scroll.use(Pullup)
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new scroll(this.$refs.wrapper,{
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    })
    this.scroll.on('scroll',(position) => {
      this.$emit('scroll',position)
      
    })
    if(this.pullUpLoad) {
        this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    //从一个y轴高度回到顶部  默认花费300毫秒
    scrollTo(x,y,time=300) {
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    //监听图片重新刷新页面高度的获取
    refresh() {
      this.scroll.refresh()
    },
    finishPullUp() {
      //上拉记载方法
      this.scroll && this.scroll.finishPullUp()
    }
  }
}
</script>
<style scoped>
</style>