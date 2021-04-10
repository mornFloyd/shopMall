<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="goodsInfo">
    <div class="start">{{commentInfo.key}}</div>
    <div v-for='(item,index) in commentInfo.list' :key="index" class="comment-box">
      <img :src="item" alt="" @load="commentImgLoad">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter : 0,
      commentInfoLength : 0
    }
  },
  methods: {
    commentImgLoad() {
      if(++this.counter === this.commentInfo.list.length) {
        this.$emit('commentImgLoad')
      }
    }
  }
}
</script>
<style scoped>
.start {
  padding: 10px 5px;
  font-size: 14px;
}
.comment-box{
  margin-bottom: 5px;
}
.comment-box img{
  vertical-align: middle;
  width: 100%;
}
</style>