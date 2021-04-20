<template>
  <div class="container">
    <el-tabs v-model="active" @tab-click="handleChange">
      <el-tab-pane
        v-for="item in tabList"
        :key="item.id"
        :label="item.label"
        :name="item.name">
        <component :is="item.name"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import allOrder from './components/AllOrder' // 全部订单
import waitPay from './components/WaitPay' // 待付款
import waitComment from './components/WaitComment' // 带评论
export default {
  name: 'Order',
  components: {
    allOrder,
    waitPay,
    waitComment
  },
  data () {
    return {
      active: 'allOrder',
      tabList: [
        { id: 1, name: 'allOrder', label: '全部订单' },
        { id: 2, name: 'waitPay', label: '待付款' },
        { id: 3, name: 'waitComment', label: '待评价' }
      ]
    }
  },
  methods: {
    handleChange (tab, event) {
      this.active = tab.name
    }
  }
}
</script>
<style lang="less" scoped>
  .container {
    padding: 0 20px;
    .el-tabs {
      width: 100%;
    }
  }
</style>
