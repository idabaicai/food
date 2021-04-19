<template>
  <div class="container">
    <i class="iconfont icon-dollar"></i>
    <span>{{ price }}</span>
    <span class="info" v-if="showStart">起</span>
  </div>
</template>
<script>
export default {
  name: 'Price', // 价格
  props: {
    price: { // 价格
      type: Number,
      default () {
        return 10
      }
    },
    showStart: { // 是否显示起字
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="less" scoped>
  .container {
    height: 40px;
    line-height: 18px;
    font-size: 26px;
    color: #FF6600;
    .iconfont {
      font-size: 24px;
    }
    .info {
      font-size: 16px;
      margin-left: 5px;
    }
  }
</style>
