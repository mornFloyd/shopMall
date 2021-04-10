<template>
  <swiper>
    <swiper-item v-for="(item,index) in banner" :key="index" >
      <a :href="item.link">
        <img :src="item.image" alt="" style="width: 100%" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import Swiper from 'components/common/swiper/Swiper.vue'
import SwiperItem from 'components/common/swiper/SwiperItem.vue'
export default {
  props: {
    banner: {
      type: Array
    }
  },
  data() {
    return {
      flag : false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
   imgLoad() {
     //节流阀
      if(!this.flag) {
        this.$emit('tabControlImgLoad')
        this.flag = true
      }
    }
  }
}
</script>
<style scoped>
</style>