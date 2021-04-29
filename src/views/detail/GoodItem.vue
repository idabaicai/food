<template>
  <div class="item-container w">
    <div class="left">
      <img :src="item.image || img_path" :alt="item.name">
    </div>
    <div class="right">
      <div class="header">
        <h2>{{ item.name }}</h2>
        <div class="info">
          {{ item.desc }}
        </div>
      </div>
      <el-divider></el-divider>
      <div class="deal">
        <div class="item">
          <div class="title">价格</div>
          <div class="deal-item">
            <price :price="item.price" :showStart="false"></price>
          </div>
        </div>
        <div class="item">
          <div class="title">数量</div>
          <div class="deal-item">
            <el-input
              v-model="number">
              <el-button slot="prepend" icon="el-icon-minus" @click="handleMinus"></el-button>
              <el-button slot="append" icon="el-icon-plus" @click="handlePlus"></el-button>
            </el-input>
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <!-- 付款 -->
      <div class="pay">
        <div class="total">
          <span>应付金额：</span>
          <price :show-start="false" :price="total"></price>
        </div>
        <div class="btn">
          <el-button type="success" @click="handleCart">加入购物车</el-button>
          <el-button type="primary" @click="handleSubmit">提交订单</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Price from '../../components/common/Price'
import request from '../../utils/request'
export default {
  name: 'GoodItem',
  props: {
    id: {
      type: String,
      default () {
        return '1001'
      }
    }
  },
  components: {
    Price
  },
  data () {
    return {
      img_path: require('../../assets/detail/item1.jpg'),
      item: {
      },
      number: 1, // 数量,
      uid: ''
    }
  },
  methods: {
    handleMinus () {
      if (this.number > 1) {
        this.number--
      }
    },
    handlePlus () {
      this.number++
    },
    // 提交订单
    handleSubmit () {
      if (this.number > 0) {
        const params = {
          order: {
            payment: this.number * this.item.price, // 总价
            userId: this.uid,
            userName: localStorage.getItem('uname')
          },
          orderFood: [ // 订单
            {
              fid: this.item.id,
              num: this.number,
              name: this.item.name,
              price: this.item.price,
              image: this.item.iamge
            }
          ],
          orderShipping: { // 收获地址
            receiverName: localStorage.getItem('uname'),
            receiverMobile: localStorage.getItem('phone'),
            receiverAddress: localStorage.getItem('address')
          }
        }
        request.post('/order/saveOrder', params)
          .then(res => {
            console.log(res)
            if (res.data.state === 1) {
              this.$message.success('提交成功！')
            } else {
              this.$message.error(res.data.message || '提交失败')
            }
          })
      } else {
        this.$message.error('数量不能小于1哦')
      }
    },
    // 加入购物车
    handleCart () {
      const params = {
        userId: this.uid,
        foodId: this.item.id,
        num: this.number
      }
      console.log(params)
      request.post('/Cart/addCart', params)
        .then(res => {
          if (res.data.state === 1) {
            this.$message.success('添加成功!')
          } else {
            this.$message.error(res.data.data.message)
          }
        })
    }
  },
  created () {
    this.uid = localStorage.getItem('uid')
    // 获取详情
    request.get(`/goods/findGoodsDetail?id=${this.id}`)
      .then(res => {
        console.log(res, 'ress')
        this.item = res.data.data.goods
      })
  },
  computed: {
    total () {
      const result = this.number * this.item.price
      return result > 0 ? result : 0
    }
  }
}
</script>
<style lang="less" scoped>
  .item-container {
    height: 460px;
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 15px;
    border-radius: 10px;
    box-shadow: 0 1px 18px 2px rgba(0, 0, 0, .35);
    background-color: #fff;
    .left {
      float: left;
      width: 430px;
    }
    .right {
      float: left;
      width: 620px;
      height: 300px;
      margin-left: 30px;
      .header {
        h2 {
          margin-bottom: 8px;
        }
      }
      .deal {
        .item {
          display: flex;
          align-items: center;
          .title {
            height: 40px;
            width: 120px;
          }
          .el-input {
            width: 150px;
            .el-button {
              width: 50px;
            }
          }
        }
      }
      .pay {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .total {
          display: flex;
        }
      }
    }
  }
</style>
