<template>
  <div class="container">
   <div class="item" v-for="item in orderList" :key="item.id">
     <el-row>
       <el-col :span="3">
         <img :src="item.foodImage || defaultImagePath" :alt="item.name" @click="handleDetail(item.id)">
       </el-col>
       <el-col :span="13">
         <div class="info">
           <div class="name"><span class="info-text">订单编号 {{ item.id }}</span>  </div>
           <!-- <div class="number info-text"> 数量: {{ item.number }} </div> -->
           <div class="date info-text"> 下单时间: {{ item.paymentTime }} </div>
         </div>
       </el-col>
       <el-col :span="4">
         <span class="total-price">总价： {{ item.payment }} </span>
       </el-col>
       <el-col :span="4">
         {{ item.desc }}
       </el-col>
     </el-row>
   </div>
   <!-- 分页 -->
   <div class="pagination">
        <el-pagination
          layout="prev, pager, next"
          @current-change="handlePageChange"
          :total="50">
        </el-pagination>
   </div>
   <!-- 抽屉 -->
   <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>
<script>
import request from '../../../../../utils/request'
export default {
  name: 'AllOrder',
  data () {
    return {
      orderList: [],
      defaultImagePath: require('../../../../../assets/order/item2.jpg'),
      params: {
        total: 1,
        size: 3, // 分页大小
        page: 0 // 当前页码
      },
      drawer: false, // 抽屉
      direction: 'rtl'
    }
  },
  methods: {
    /**
     * 查看订单详情
     */
    handleDetail (id) {
      this.drawer = true
      request.get(`/order/findOrderDetail?orderId=${id}`)
        .then(res => {
          console.log(res.data.data)
          this.drawer = true
        })
    },
    handlePageChange (current) {
      this.params.page = current
      this.getOrderList()
    },
    /**
     * 获取订单
     */
    getOrderList () {
      request.get(`/order/findOrderPageByUserId?userId=${localStorage.getItem('uid')}&page=${this.params.page}&size=${this.params.size}`)
        .then(res => {
          this.orderList = res.data.data.data
          this.params.total = res.data.data.count
        })
    },
    /**
     * 关闭抽屉
     */
    handleClose (done) {
      done()
    }
  },
  created () {
    this.getOrderList()
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
      cursor: pointer;
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
