<template>
  <div class="container">
    <div class="item">
      <el-row v-for="item in itemList" :key="item.id">
        <el-col :span="3">
          <img :src="item.img_path" :alt="item.name">
        </el-col>
        <el-col :span="5">
          <div class="title"> {{ item.name }} </div>
          <el-rate v-model="item.star" disabled show-score text-color="#f90"></el-rate>
        </el-col>
        <el-col :span="4" :offset="2">
          ￥{{ item.price }}
        </el-col>
        <el-col :span="6">
          <calculator :num="item.number" @numChange="handleNumChange"></calculator>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Calculator from '../../../components/calculator/Calculator'
export default {
  name: 'Collect',
  components: {
    Calculator
  },
  data () {
    return {
      itemList: [
        { id: 1, name: '孜然鸡柳+百事可乐', star: 4.7, img_path: require('../../../assets/list/item1.jpg'), price: 29.9, number: 1 },
        { id: 2, name: '美滋客汉堡', star: 4.8, img_path: require('../../../assets/list/item2.jpg'), price: 39.9, number: 3 }
      ]
    }
  },
  methods: {
    handleNumChange (num) {
      console.log(num)
    }
  }
}
</script>
<style lang="less" scoped>
  .container {
    padding: 15px;
    .item {
      width: 100%;
      .el-row {
        padding: 20px 0 !important;
        border-bottom: 1px solid #ddd;
        margin-bottom: 10px;
      }
      img {
        width: 80px;
        height: 80px;
        border-radius: 4px;
      }
      .title {
        color: #303133;
      }
    }
  }
</style>
