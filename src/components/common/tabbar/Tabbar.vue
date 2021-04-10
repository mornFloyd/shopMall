<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>
<style scoped>
.tabbar {
  display: flex;
  text-align: center;
  height: 49px;
  background-color: #f6f6f6;
  box-shadow: 0px -1px 2px rgba(100, 100, 100, .1);

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

</style>