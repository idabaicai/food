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
import request from '../../utils/request'
export default {
  name: 'HotList',
  components: {
    GoodCard
  },
  data () {
    return {
      // 默认图片
      image_path: require('../../assets/good/item1.jpg'),
      // 热门推荐
      hotList: [
        // { id: 10, name: '麻婆豆腐（天府五街店）', star: 4.5, price: 26.5, img_path: require('../../assets/good/item1.jpg') },
      ]
    }
  },
  methods: {
    getDetail (id) {
      console.log(id)
    },
    getRecommend () {
      request.get('/goods/findGoodsByItemId?itemId=1')
        .then(res => {
          console.log(res.data)
          this.hotList = []
          res.data.data.data.forEach((item, index) => {
            if (index < 4) {
              this.hotList.push({
                id: item.id,
                name: item.name,
                star: item.star || 4.5,
                img_path: item.image || this.image_path
              })
            }
          })
        })
    }
  },
  created () {
    this.getRecommend()
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
