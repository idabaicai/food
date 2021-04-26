<template>
  <div class="container">
   <div class="item" v-for="item in orderList" :key="item.id">
     <el-row>
       <el-col :span="3">
         <img :src="item.img_path" :alt="item.name">
       </el-col>
       <el-col :span="13">
         <div class="info">
           <div class="name"> {{ item.name }} </div>
           <div class="number info-text"> 数量: {{ item.number }} </div>
           <div class="date info-text"> 下单时间: {{ item.orderDate }} </div>
         </div>
       </el-col>
       <el-col :span="4">
         <span class="total-price">总价： {{ item.totalPrice }} </span>
       </el-col>
       <el-col :span="4">
         {{ item.desc }}
       </el-col>
     </el-row>
   </div>
  </div>
</template>
<script>
import request from '../../../../../utils/request'
export default {
  name: 'AllOrder',
  data () {
    return {
      orderList: [
        {
          id: 1,
          name: '巴蜀大将火锅现炸酥肉1份',
          img_path: require('../../../../../assets/order/item1.jpg'),
          orderDate: '2021-04-19 10:39',
          number: 10,
          totalPrice: 376,
          desc: '已关闭'
        },
        {
          id: 2,
          name: '三姐弟石锅饭单人餐',
          img_path: require('../../../../../assets/order/item2.jpg'),
          orderDate: '2021-04-19 10:39',
          number: 18,
          totalPrice: 379,
          desc: '已消费'
        }
      ]
    }
  },
  methods: {},
  created () {
    request.get(`/order/findOrderPageByUserId?userId=${localStorage.getItem('uid')}`)
      .then(res => {
        console.log(res)
      })
  }
}
</script>
<style lang="less" scoped>
  .container {
    .el-row {
      display: flex;
      align-items: center;
      height: 120px;
      border-bottom: 1px solid #ddd;
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 3px;
    }
    .info {
      .name {
        color: #303133;
        margin-bottom: 5px;
      }
      .date, .number {
        font-size: 13px;
      }
    }
  }
</style>
