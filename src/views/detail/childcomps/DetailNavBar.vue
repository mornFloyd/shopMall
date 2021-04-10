<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>
      <!-- 导航条的中部位置 -->
      <template v-slot:center>
        <div class="nav-title">
            <div v-for="(item,index) in title" :key="index" 
                  class="title-item" 
                  :class="{active:currentIndex === index}"
                  @click='itemClick(index)'>
              {{item}}
            </div>
        </div>
      </template>
    </nav-bar>
    
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  data() {
    return {
      title: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    //点击高亮
    itemClick(index) {
      this.currentIndex = index
      this.$emit('itemClick',index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>
<style scoped>
.nav-title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.back img {
  width: 20px;
  height: 20px;
  margin-top: 12px;
  margin-left: 8px;
}
.active {
  color: var(--color-high-text);
  background-color: #fff;
}
</style>