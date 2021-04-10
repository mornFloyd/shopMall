<template>
  <div class="goods-list-item">
    <img :src="goodsImg" alt="" @load="imgLoad" @click="itemClick">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="goods-price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      iid: null
    }
  },
  methods: {
    imgLoad() {
      this.$bus.emit('imgLoad')
    },
    itemClick() {
      this.iid = this.goodsItem.iid
      this.$router.push('/detail/'+this.iid)
    }
  },
  computed: {
    goodsImg() {
      return this.goodsItem.image ||  this.goodsItem.show.img 
    }
  }
}
</script>
<style scoped>
.goods-list-item {
  width: 48%;
  margin-bottom: 8px;
}
.goods-list-item img{
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  text-align: center;
  position: relative;
  margin-top: 5px;
}
.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-info .goods-price{
  color: var(--color-high-text);
  margin-right: 25px;
}
.goods-info .collect{
  position: relative;
}
.goods-info .collect::before {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  left: -15px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>