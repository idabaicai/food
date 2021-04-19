<template>
  <div class="good-container">
    <div class="img-wrap">
      <img :src="good.img_path" alt="">
    </div>
    <div class="info">
      <div class="name">{{ good.name }}</div>
        <el-rate
          v-model="good.star"
          disabled
          show-score
          text-color="#ff9900"
        ></el-rate>
        <div class="price">
          <span class="iconfont icon-dollar"></span>
          {{ good.price }} <span class="start">起</span>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    good: {
      type: Object,
      default () {
        return {
          id: 10,
          name: '麻婆豆腐（天府五街店）',
          star: 4.5,
          price: 26.5,
          img_path: require('../../assets/good/item1.jpg')
        }
      }
    }
  },
  name: 'GoodCard'
}
</script>
<style lang="less" scoped>
  .good-container {
    width: 297px;
    height: 260px;
    padding: 10px 12px;
    cursor: pointer;
    background-color: #fff;
    .img-wrap {
      display: flex;
      justify-content: center;
      img {
        border-radius: 8px;
      }
    }
    .info {
      .name {
        margin: 3px 0;
      }
    }
    .price {
      color: #FF6600;
      font-size: 28px;
      font-weight: 600;
      // font-family: 'numbers' !important;
      span {
        font-size: 26px;
      }
      .start {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
</style>
