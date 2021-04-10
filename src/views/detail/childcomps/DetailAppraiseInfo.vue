<template>
  <div v-if='Object.keys(appraise).length !== 0' class="appraise">
    <div class="appraise-top clear-fix">
      <div class="top-text left">用户评价</div>
      <div class="right">
        <span>更多</span>
        <i class="text-right">></i>
      </div>
    </div>
    <!-- 用户 -->
    <div class="user">
      <img :src="appraise.user.avatar" alt="" class="avatar">
      <span>{{appraise.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{appraise.content}}</p>
      <div class="info-style">
        <span class="time">{{getTime}}</span>
        <span>{{appraise.style}}</span>
      </div>
    </div>
    <div class="info-images" v-if='appraise.images' @load="imgLoad">
      <img :src="appraise.images" alt="">
    </div>
  </div>
</template>
<script>
import {getDate} from 'common/util.js'
export default {
  props: {
    appraise: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
    }
  },
  computed: {
    getTime() {
      return getDate(this.appraise.created*1000)
    }
  }
}
</script>
<style scoped>
.appraise {
  padding: 12px 7px;
  font-size: 15px;
}
.appraise-top {
  padding-bottom: 12px;
  border-bottom: 2px solid #f2f5f8;
}
.user {
  padding: 8px 0;
  position: relative;
  font-size: 14px;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #f2f5f8;
  overflow: hidden;
}
.user span {
  margin-left: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.info-detail {
  font-size: 12px;
}
.info-detail .info-style {
  margin-top: 5px;
  padding: 5px 0;
  color: #999;
}
.info-detail .time {
  margin-right: 10px;
}
.info-images {
  width: 65px;
  height: 65px;
  margin-top: 2px;
}
.info-images img{
  width: 100%;
  height: 100%;
}
</style>