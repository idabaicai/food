<template>
  <div>
      <Header />
      <div class="login-wrap">
        <header class="header regular-text">
          <img src="../../assets/logo.png" alt="">
          <h2>欢迎登录{{ site.name }}</h2>
        </header>
        <main class="main">
          <div class="left">
            <img src="../../assets/login/side.jpg" alt="">
          </div>
          <div class="right">
            <div class="login" v-if="isLogin">
              <el-input
                prefix-icon="el-icon-user"
                v-model="user.name"
                placeholder="请输入用户名"
              ></el-input>
              <el-input
                prefix-icon="el-icon-unlock"
                v-model="user.password"
                show-password
                type="password"
                placeholder="密码"
              ></el-input>
              <el-button
                type="primary"
                @click="handleLogin"
              >登录</el-button>
              <div class="sub-info">
                <a class="info-text" href="#" @click="register">注册</a>
              </div>
            </div>
            <div class="login" v-else>
                <el-input
                  prefix-icon="el-icon-user"
                  v-model="user.name"
                  placeholder="请输入用户名"
                ></el-input>
                <el-input
                  prefix-icon="el-icon-unlock"
                  v-model="user.password"
                  show-password
                  type="password"
                  placeholder="密码"
                ></el-input>
                <el-input
                  prefix-icon="el-icon-unlock"
                  v-model="user.repeatPassword"
                  show-password
                  type="password"
                  placeholder="确认密码"
                ></el-input>
                <el-button
                  type="primary"
                  @click="handleRegister"
                >注册</el-button>
                <div class="sub-info">
                <a class="info-text" href="#" @click="isLogin = true">去登陆</a>
              </div>
              </div>
          </div>
      </main>
    </div>
    <Footer />
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
      user: {
        name: '123456', // 用户名
        password: '', // 密码
        repeatPassword: '' // 重复密码
      },
      site,
      isLogin: true // 登录还是注册
    }
  },
  methods: {
    handleLogin () {
      localStorage.setItem('isLogin', true)
      this.$message.success('登录成功')
      this.$router.push({ name: 'Home' })
    },
    register () {
      this.isLogin = false
    },
    handleRegister () {
      console.log('register')
    }
  },
  created () {
  }
}
</script>
<style lang="less" scoped>
@import url('../../style/variables.less');
  .login-wrap {
    width: 100%;
    padding: 0 180px;
    background-color: #fff;
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
      .right {
        display: flex;
        flex-direction: column;
        width: 316px;
        .el-input {
          margin-bottom: 10px;
        }
        .el-button {
          width: 100%;
          margin-top: 10px;
        }
        .sub-info {
          margin-top: 6px;
        }
      }
    }
  }
</style>
