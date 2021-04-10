<template>
<div v-if="Object.keys(detailTop).length !== 0">
    <div class="info">
    <div class="title">
      {{detailTop.title}}
    </div>
    <div class="price">
      <span class="newPrice">{{detailTop.price}}</span>
      <span class="oldPrice">{{detailTop.oldPrice}}</span>
      <span v-if='detailTop.discountDesc' class="discountDesc">{{detailTop.discountDesc}}</span>
    </div>
    <div class="info-other">
      <span>{{detailTop.columns[0]}}</span>
      <span>{{detailTop.columns[1]}}</span>
      <span>{{detailTop.columns[2]}}</span>
    </div>
    <div class="info-bottom">
      <div v-for="(item,index) in detailTop.services" :key="index" class="info-services">
        <img :src="item.icon" alt=""/>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    detailTop: {
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
.title {
  margin: 10px 0;
  font-size: 16px;
  color: var(--color-text);
}
.price {
  position: relative;
  padding-bottom: 25px;
  border-bottom: 1px solid #f2f5f8;
}
.newPrice {
  color: var(--color-high-text);
  font-size: 20px;
}
.oldPrice {
  margin-left: 5px;
  font-size: 13px;
  text-decoration: line-through;
  color: #888;
}
.discountDesc {
  position: absolute;
  top: -8px;
  
  background-color: var(--color-high-text);
  font-size: 14px;
  padding: 5px;
  margin-left: 3px;
  border-radius: 15px;
  color: #f2f5f8;
}
.info-other {
  font-size: 12px;
  display: flex;
  padding: 20px 0px;
  border-bottom: 1px solid #f2f5f8;
}
.info-other span {
  flex: 1;
  margin-left: 5px;
}
.info-bottom {
  display: flex;
  padding: 15px 0;
  font-size: 12px;
  border-bottom: 3px solid #f2f5f8;
}
.info-services {
  flex: 1;
  text-align: center;
}
.info-services img {
  width: 12px;
  height: 12px;
}
</style>