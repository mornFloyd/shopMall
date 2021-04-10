<template>
  <div class="tab-bar-item" @click='itemClick'>
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="colorStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //isActive: false
    }
  },
  props: {
    path: String,
    textStyle: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    colorStyle() {
      return this.isActive? {color: this.textStyle} : {}
    }
  }
}
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
}
.tab-bar-item>>>img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
}
</style>