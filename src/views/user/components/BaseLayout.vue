<template>
  <div class="container w">
    <div class="aside">
      <ul>
        <li v-for="item in menuList" :key="item.id">
          <a href="#" @click.prevent="handleChange(item.component)">{{ item.name }}</a>
          <i class="el-icon-arrow-right"></i>
        </li>
      </ul>
    </div>
    <div class="main">
      <component :is="activeComponent" />
    </div>
  </div>
</template>
<script>
import Order from './order/Order'
import Collect from './Collect'
import Info from './Info'
import OrderDetail from './order/components/OrderDetail'
export default {
  name: 'BaseLayout',
  props: {
    component: { // 当前组件，可以时父组件传递下来的
      type: String
    }
  },
  components: {
    Order,
    Collect,
    Info,
    OrderDetail
  },
  data () {
    return {
      menuList: [
        { id: 1, name: '我的订单', path: 'order', component: 'Order' },
        { id: 2, name: '购物车', path: 'collect', component: 'Collect' },
        { id: 5, name: '个人信息', path: 'order', component: 'Info' }
      ],
      activeComponent: Order // 当前组件
    }
  },
  methods: {
    handleChange (component) {
      this.activeComponent = component
    }
  },
  created () {
    this.activeComponent = this.component
  }
}
</script>
<style lang="less" scoped>
  .container {
    display: flex;
    margin-top: 20px;
    margin-bottom: 30px;
    padding-bottom: 30px;
    height: 600px;
    .aside {
      width: 220px;
      padding: 28px 20px;
      margin-right: 12px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      li {
        height: 36px;
        display: flex;
        justify-content: space-between;
      }
      a, i{
        color: #C0C4CC;
        font-size: 16px;
      }
    }
    .main {
      background-color: #fff;
      flex: 1;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }
</style>
