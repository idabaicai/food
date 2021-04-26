<template>
  <div class="container w">
    <div class="item" v-for="item in itemList" :key="item.id">
      <el-row>
        <el-col :span="5">
          <img :src="item.image || img_path" :alt="item.name" @click="handleDetail(item.id)">
        </el-col>
        <el-col :span="19">
            <div class="info-container">
              <div class="title">
              <h4>{{ item.name }}</h4>
            </div>
            <div class="rate">
              <el-rate v-model="item.star" disabled></el-rate>
              <span class="info-text"> {{ item.star }} 分 </span>
            </div>
            <div class="address">
              {{ item.address }}
            </div>
            <div class="price">
              <i class="iconfont icon-dollar1"></i> {{ item.price }}
            </div>
          </div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </div>
  </div>
</template>
<script>
import request from '../../../utils/request'
export default {
  name: 'Item',
  props: {
    cateId: {
      type: String,
      default () {
        return 'all'
      }
    }
  },
  data () {
    return {
      img_path: require('../../../assets/list/item1.jpg'),
      itemList: [
      //   {
      //     id: 10,
      //     name: '蜜雪冰城（昌江店）',
      //     img_path: require('../../../assets/list/item1.jpg'),
      //     star: 4.8,
      //     address: '亚细亚商业广场人民北路汽车站对面农工商公司主楼第一层楼梯间左侧第一间',
      //     price: 8
      //   },
      ]
    }
  },
  methods: {
    handleDetail (id) {
      console.log(id)
      this.$router.push({ path: `/detail/${id}` })
    }
  },
  created () {
    request.get(`/goods/findGoodsByItemId?itemId=${this.cateId}`)
      .then(res => {
        console.log(res.data.data.data)
        this.itemList = res.data.data.data
      })
  }
}
</script>
<style lang="less" scoped>
  .container {
    padding: 20px 15px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 20px;
    .item {
      height: 180px;
      margin-bottom: 20px;
      img {
        width: 220px;
        height: 125px;
        border-radius: 4px;
      }
      .info-container {
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      .title {
        margin-bottom: 4px;
      }
      .rate {
        display: flex;
        align-items: center;
      }
      .address {
        font-size: 14px;
        color: #303133;
      }
      .price {
        color: #f60;
      }
    }
  }
</style>
