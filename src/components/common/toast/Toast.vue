<template>
  <div class="toast" v-show='show'>
    <div class="message">{{message}}</div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default() {
        return true
      }
    },
    message: {
      type: String,
      default() {
        return '加入购物车'
      }
    }
  },
  data() {
    return {
    }
  }
}
</script>
<style scoped>
.toast {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0, 0, 0, .75);
  padding: 5px 8px;
  color: #fff;
  border-radius: 5px;
}
</style>