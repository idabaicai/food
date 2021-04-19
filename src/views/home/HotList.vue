<template>
  <div class="container w">
    <div class="header">
      <h3>推荐美食</h3>
    </div>
    <div class="content">
      <div class="item" v-for="item in hotList" :key="item.id">
        <!-- 商品卡片 -->
        <good-card :good="item"></good-card>
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
  },
  data () {
    return {
      // 热门推荐
      hotList: [
        { id: 10, name: '麻婆豆腐（天府五街店）', star: 4.5, price: 26.5, img_path: require('../../assets/good/item1.jpg') },
        { id: 11, name: '麻婆豆腐（天府五街店）', star: 3.2, price: 26.5, img_path: require('../../assets/good/item1.jpg') },
        { id: 12, name: '麻婆豆腐（天府五街店）', star: 4.6, price: 26.5, img_path: require('../../assets/good/item1.jpg') },
        { id: 13, name: '麻婆豆腐', star: 4.5, price: 26.5, img_path: require('../../assets/good/item1.jpg') }
      ]
    }
  },
  methods: {
    getDetail (id) {
      console.log(id)
    }
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
