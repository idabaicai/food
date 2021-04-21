<template>
  <div class="header info-text">
    <div class="wrap w">
      <el-row
        :gutter="24"
        type="flex"
        justify="space-between"
        align="middle"
      >
        <el-col :span="12">
          <i class="el-icon-location"></i>
          <a href="#">四川省成都区高新区</a>
        </el-col>
        <el-col :span="12">
          <div class="right">
            <a href="#" @click.prevent="handleUserCenter">我的</a>
            <a href="#" v-if="isLogin" @click.prevent="logout">注销</a>
            <a href="#" v-else @click.prevent="login">登录</a>
            <a href="#">小程序</a>
            <a href="#">{{site.name}}规则</a>
            <a href="#">订单中心</a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import site from '../../config/site'
export default {
  name: 'Header',
  data () {
    return {
      site,
      isLogin: false
    }
  },
  methods: {
    /**
     * 登录
     */
    login () {
      if (this.$route.name !== 'Login') {
        this.$router.push('/login')
      }
    },
    /**
     * 注销
     */
    logout () {
      localStorage.removeItem('isLogin')
      localStorage.removeItem('uid')
      this.isLogin = false
      // 去首页
      this.$router.push({ path: '/' })
    },
    /**
     * 去个人中心
     */
    handleUserCenter () {
      const id = localStorage.getItem('uid')
      const isLogin = localStorage.getItem('isLogin')
      if (isLogin) {
        this.$router.push({ path: `/user/${id}/Order` })
      } else if (this.$route.name !== 'Login') {
        this.$router.push({ path: '/login' })
      }
    }
  },
  created () {
    this.isLogin = localStorage.getItem('isLogin')
  }
}
</script>
<style lang="less" scoped>
@import url('../../style/variables.less');
  .header {
    width: 100%;
    height: 28px;
    background-color: rgb(240, 240, 240);
    .wrap {
      .el-row {
        height: 28px;
      }
    }
    .right {
      display: flex;
      justify-content: flex-end;
      a {
        margin-left: 18px;
      }
    }
  }
</style>
