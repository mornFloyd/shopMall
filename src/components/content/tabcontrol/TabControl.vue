<template>
  <div class="tab-control">
    <div  v-for="(item,index) in tabTitle" 
          :key='index'
          class="tab-control-item"
          :class="{tabactive:currentTitle === index}"
          @click="tabClick(index)">
      <span :class="{currentline:currentTitle === index}">{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabTitle: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentTitle: 0
    }
  },
  methods: {
    tabClick(index) {
      this.currentTitle = index
      this.$emit('controlClick',index)
    }
  }
}
</script>
<style scoped>
.tab-control {
  display: flex;
  position: sticky;
  top: 44px;
  background-color: var(--color-background);
  z-index: 9;
}
.tab-control-item {
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.tab-control-item span {
  padding: 5px;
}
.currentline {
  border-bottom: 2px solid var(--color-high-text);
}
.tabactive {
  color: var(--color-high-text);
}
</style>