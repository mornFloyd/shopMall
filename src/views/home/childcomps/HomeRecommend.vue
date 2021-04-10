<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommend" :key='index'>
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommend: {
      type: Array
    }
  },
  data() {
    return {
    }
  }
}
</script>
<style scoped>
.recommend {
  display: flex;
  padding: 10px 0px 15px;
  border-bottom: 10px solid #eee;
  font-size: 12px;
}
.recommend-item {
  flex: 1;
  text-align: center;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>