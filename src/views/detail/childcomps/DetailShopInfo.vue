<template>
  <div class="shop-info">
    <div class="shop">
      <span class="logo">
        <img :src="shopInfo.logo" alt="">
      </span>
      <span class="shop-title">{{shopInfo.name}}</span>
    </div>
    <div class="info-middle">
      <div class="info-sells">
          <div class="sells">
            {{shopInfo.sell >= 10000?(shopInfo.sell/10000).toFixed(1)+'万':shopInfo.sell }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
      <div class="info-goods">
        <div class="goods">
          {{shopInfo.goods}}
        </div>
        <div class="goods-text">全部宝贝</div>
      </div>
      <div class="info-score">
        <table>
          <tr v-for="(item,index) in shopInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td :class="{better: item.isBetter}" class="color-default">{{item.score}}</td>
            <td :class="{'better-height': item.isBetter}" class="bgc-default">{{item.isBetter?'高':'低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="info-bottom">
        进店逛逛
    </div>
    
  </div>
</template>
<script>
export default {
  props: {
    shopInfo: {
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
  mounted() {
    //console.log(this.shopInfo);
  }
}
</script>
<style scoped>
.shop {
  margin: 20px 0px 10px 8px;
  position: relative;
}
.logo img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #f2f5f8;
}
.shop-title {
  position: absolute;
  top: 50%;
  transform:translateY(-50%);
  margin-left: 5px;
}
.info-middle {
  font-size: 12px;
  margin-left: 20px;
  margin-top: 35px;
  display: flex;
  position: relative;
  text-align: center;
  color: #666;
}
.sells,.goods {
  font-size: 17px;
  margin-bottom: 8px;
}
.info-goods {
  margin-left: 30px;
}
.info-score {
  position: absolute;
  right: 10px;
  top:-3px;
}
.color-default {
  color: green;
}
.better {
  color: red;
}
.bgc-default {
  background-color: green;
  color: #fff;
}
.better-height {
  color: #fff;
  background-color: red;
}
.info-bottom {
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
}
</style>