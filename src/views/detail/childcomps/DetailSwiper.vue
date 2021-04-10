<template>
  <swiper class="detail-swiper">
      <swiper-item v-for="(item,index) in siwperData" :key='index'>
        <img :src="item" alt="" @load="imgLoad">
      </swiper-item>
  </swiper>
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
export default {
  props: {
    siwperData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      flag: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad() {
      if(!this.flag) {
        this.$emit('imgLoad')
        this.flag = true
      }
    }
  }
}
</script>
<style scoped>
.detail-swiper {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.detail-swiper img {
  width: 100%;
}
</style>