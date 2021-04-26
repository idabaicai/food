<template>
  <div class="wrap">
    <div class="item">
      <el-row v-for="(item, index) in itemList" :key="item.id" type="flex" align="middle">
        <el-col :span="3">
          <img :src="item.foodImage || image_path" :alt="item.name">
        </el-col>
        <!-- <el-col :span="5">
          <div class="title"> {{ item.name }} </div>
          <el-rate v-model="item.star" disabled show-score text-color="#f90"></el-rate>
        </el-col> -->
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
    <div class="deal">
      <div class="total">
      <span class="info-text">总金额：</span> <span class="total">￥{{ totalPrice }}</span>
      </div>
      <div class="submit">
        <el-button @click="handleSubmit" type="primary">提交订单</el-button>
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
        // { id: 2, name: '美滋客汉堡', star: 4.8, img_path: require('../../../assets/list/item2.jpg'), price: 39, number: 3 }
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
      console.log('submit')
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
        console.log(res.data.data)
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
  }
</style>
