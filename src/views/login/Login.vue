<template>
  <div>
      <Header />
      <div class="login">
      <header class="header regular-text">
        <img src="../../assets/logo.png" alt="">
        <h2>欢迎登录{{ site.name }}</h2>
      </header>
      <main class="main">
        <div class="left">
          <img src="../../assets/login/side.jpg" alt="">
        </div>
        <div class="right">
          <el-input
            prefix-icon="el-icon-user"
            v-model="name"
            placeholder="请输入用户名"
          ></el-input>
          <el-input
            prefix-icon="el-icon-unlock"
            v-model="password"
            show-password
            type="password"
            placeholder="密码"
          ></el-input>
          <el-button
            type="primary"
            @click="handleLogin"
          >登录</el-button>
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>
<script>
import site from '../../config/site'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      name: '123456', // 用户名
      password: '12345678', // 密码
      site
    }
  },
  methods: {
    handleLogin () {
    }
  },
  created () {
    console.log('createds')
  }
}
</script>
<style lang="less" scoped>
@import url('../../style/variables.less');
  .login {
    width: 900px;
    height: 100vh;
    margin: 0 auto;
    .header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 120px;
      padding: 30px 0;
      img {
        width: 100px;
        height: 100px;
      }
    }
    .main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 380px;
      margin-bottom: 50px;
      .right {
        display: flex;
        flex-direction: column;
        width: 316px;
        .el-input {
          margin-bottom: 10px;
        }
        .el-button {
          margin-top: 10px;
        }
      }
    }
  }
</style>
