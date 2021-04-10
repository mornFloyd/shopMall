<template>
  <div v-if='Object.keys(detailParamsInfo).length !== 0 ' class="param-info">
    <table class="size">
      <tr v-for="(item,index) in detailParamsInfo.table[0]" :key="index">
        <td v-for="(ytem,count) in item" :key="count">{{ytem}}</td>
      </tr>
    </table>
    <table>
      <tr v-for="(item,index) in detailParamsInfo.set" :key="index">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    detailParamsInfo: {
      type: Object,
      default() {
        return {}
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
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.param-info table {
  width: 100%;
  border-collapse: collapse;
}
.param-info table tr {
  height: 42px;
}
.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, .1);
}
</style>