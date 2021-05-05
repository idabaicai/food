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
      title="订单详情"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose">
      <div class="wrap" v-if="drawer">
        <h4>订单详情</h4>
        <ul>
          <li>
            <div class="title">订单号: </div>
            <div class="detail"> {{ orderDetail.order.id || '' }} </div>
          </li>
          <li>
            <div class="title">总金额: </div>
            <div class="detail"> {{ orderDetail.order.payment || '' }}元</div>
          </li>
          <li>
            <div class="title">付款时间: </div>
            <div class="detail"> {{ orderDetail.order.paymentTime || '' }} </div>
          </li>
        </ul>
        <h4>商品信息</h4>
        <ul>
          <li>
            <div class="title">商品名称: </div>
            <div class="detail"> {{ orderDetail.orderFood[0].name || '' }} </div>
          </li>
          <li>
            <div class="title">商品数量: </div>
            <div class="detail"> {{ orderDetail.orderFood[0].num || '' }}</div>
          </li>
          <li>
            <div class="title">商品金额: </div>
            <div class="detail"> {{ orderDetail.orderFood[0].price || '' }} </div>
          </li>
        </ul>
        <el-divider></el-divider>
        <h4>收获人信息</h4>
        <ul>
          <li>
            <div class="title">姓名: </div>
            <div class="detail"> {{ orderDetail.order.userName || '' }} </div>
          </li>
          <li>
            <div class="title">收获地址: </div>
            <div class="detail"> {{ orderDetail.orderShipping.receiverAddress || '' }}</div>
          </li>
          <li>
            <div class="title">联系方式: </div>
            <div class="detail"> {{ orderDetail.orderShipping.receiverMobile || '' }} </div>
          </li>
          <li>
            <div class="title">付款时间: </div>
            <div class="detail"> {{ orderDetail.order.paymentTime || '' }} </div>
          </li>
        </ul>
        <el-divider></el-divider>
      </div>
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
      direction: 'rtl',
      orderDetail: { // 订单详情
        order: {},
        orderFood: [], // 商品信息
        orderShipping: {}
      }
    }
  },
  methods: {
    /**
     * 查看订单详情
     */
    handleDetail (id) {
      request.get(`/order/findOrderDetail?orderId=${id}`)
        .then(res => {
          this.drawer = true
          this.orderDetail = res.data.data
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
    .wrap {
      padding: 0 20px;
      li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .title {
          width: 80px;
        }
      }
    }
  }
</style>
