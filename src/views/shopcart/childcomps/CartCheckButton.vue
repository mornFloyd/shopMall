<template>
  <div class="check-button" :class="{checked: isCheck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>
<script>
export default {
  props: {
    isCheck: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      
    }
  }
}
</script>
<style scoped>
.check-button {
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #aaa;
}
.checked {
  background-color: red;
}
.check-button img {
  display: block;
}
</style>