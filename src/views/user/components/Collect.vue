<template>
  <div class="wrap">
    <div class="item">
      <el-row v-for="(item, index) in itemList" :key="item.id" type="flex" align="middle">
        <el-col :span="3">
          <img :src="item.foodImage || image_path" :alt="item.name">
        </el-col>
        <el-col :span="5">
          <div class="title"> {{ item.foodTitle }} </div>
          <!-- <el-rate v-model="item.star" disabled show-score text-color="#f90"></el-rate> -->
        </el-col>
        <el-col :span="4">
          ￥{{ item.foodPrice }}
        </el-col>
        <el-col :span="6">
          <calculator :num="item.num" :idx="index" @numChange="handleNumChange"></calculator>
        </el-col>
        <el-col :span="2">
           ￥{{ item.num * item.foodPrice }}
        </el-col>
        <el-col :span="2" class="delete">
          <i class="el-icon-delete" @click="handleDelete(index)"></i>
        </el-col>
      </el-row>
    </div>
    <div class="deal" v-if="itemList.length > 0">
      <div class="total">
      <span class="info-text">总金额：</span> <span class="total">￥{{ totalPrice }}</span>
      </div>
      <div class="submit">
        <el-button @click="handleSubmit" type="primary">提交订单</el-button>
      </div>
    </div>
    <div v-else>
      <div class="info-text">
        购物车空空如也！！！
      </div>
    </div>
  </div>
</template>
<script>
import Calculator from '../../../components/calculator/Calculator'
import request from '../../../utils/request'
export default {
  name: 'Collect',
  components: {
    Calculator
  },
  data () {
    return {
      image_path: require('../../../assets/list/item2.jpg'),
      itemList: [
        // { id: 1, name: '孜然鸡柳+百事可乐', star: 4.7, img_path: require('../../../assets/list/item1.jpg'), price: 29, number: 1 },
      ],
      uid: null
    }
  },
  methods: {
    // 子组件改变数量
    handleNumChange (num, idx) {
      this.itemList[idx].num = num
    },
    // 提交订单
    handleSubmit () {
      let payment = 0
      const orderFood = this.itemList.map(item => {
        payment += item.num * item.foodPrice
        return {
          fid: item.foodId,
          num: item.num,
          name: item.foodTitle,
          price: item.foodPrice,
          image: item.image || '',
          payment: item.num * item.foodPrice
        }
      })
      const params = {
        order: {
          payment, // 总价
          userId: this.uid,
          userName: localStorage.getItem('uname')
        },
        orderFood, // 订单
        orderShipping: { // 收获地址
          receiverName: JSON.parse(localStorage.getItem('login')).name,
          receiverMobile: JSON.parse(localStorage.getItem('login')).phone,
          receiverAddress: JSON.parse(localStorage.getItem('login')).address
        }
      }
      request.post('/order/saveOrder', params)
        .then(res => {
          if (res.data.state === 1) {
            this.$message.success('提交成功！')
          } else {
            this.$message.error(res.data.message || '提交失败')
          }
        })
    },
    // 删除 item
    handleDelete (idx) {
      this.$confirm('确认删除吗', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 删除购物车
        request.get(`/Cart/reduceCart?userId=${this.uid}&goodsId=${this.itemList[idx].foodId}`)
        this.itemList.splice(idx, 1)
      })
    }
  },
  mounted () {
    request.get(`/Cart/findList?userId=${this.uid}`)
      .then(res => {
        this.itemList = res.data.data
      })
  },
  created () {
    this.uid = localStorage.getItem('uid')
  },
  computed: {
    totalPrice () {
      let total = 0
      this.itemList.forEach(item => {
        total += item.num * item.foodPrice
      })
      return total
    }
  }
}
</script>
<style lang="less" scoped>
  .wrap {
    padding: 15px;
    display: block;
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
      .delete {
        cursor: pointer;
      }
    }
    .deal {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
        .total {
          color: #f60;
          font-size: 24px;
        }
        .submit {
          margin-top: 4px;
        }
      }
    .info-text {
      display: flex;
      justify-content: center;
      margin-top: 80px;
    }
  }
</style>
