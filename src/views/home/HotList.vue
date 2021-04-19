<template>
  <div class="container w">
    <div class="header">
      <h3>推荐美食</h3>
    </div>
    <div class="content">
      <div class="item">
        <good-card></good-card>
      </div>
      <div class="item">
        <good-card></good-card>
      </div>
      <div class="item">
        <good-card></good-card>
      </div>
      <div class="item">
        <good-card></good-card>
      </div>
    </div>
  </div>
</template>
<script>
import GoodCard from '../../components/card/GoodCard'
export default {
  name: 'HotList',
  components: {
    GoodCard
  }
}
</script>
<style lang="less" scoped>
  .container {
    height: 360px;
    .header {
      display: flex;
      align-items: center;
      height: 40px;
      padding: 0 20px;
      border-radius: 8px 8px 0 0;
      background-color: #409EFF;
      color: #fff;
    }
    .content {
      display: flex;
    }
  }
</style>
