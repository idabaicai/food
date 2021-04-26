<template>
  <div class="item-container w">
    <div class="left">
      <img src="../../assets/detail/item1.jpg" alt="">
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
      item: {
        id: '1001',
        name: '不吃火锅，就吃烤匠！',
        desc: '仅售89元！价值100元的代金券，除酒水饮料外全场通用，可叠加使用，可免费使用包间，提供免费WiFi',
        price: 199,
        number: 1
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
        this.$message.success('提交成功！')
      } else {
        this.$message.error('数量不能小于1哦')
      }
    },
    // 加入购物车
    handleCart () {
      request.post('/Cart/addCart')
    }
  },
  created () {
    this.uid = localStorage.getItem('uid')
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
