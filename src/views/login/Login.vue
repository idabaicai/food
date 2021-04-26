<template>
  <div>
      <Header />
      <div class="login-wrap">
        <header class="header regular-text">
          <img src="../../assets/logo.png" alt="" @click="handleIndex">
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
                  prefix-icon="el-icon-user"
                  v-model="user.loginName"
                  placeholder="请输入登录名"
                ></el-input>
                <el-input
                  prefix-icon="el-icon-user"
                  v-model="user.phone"
                  placeholder="请输入电话号"
                ></el-input>
                <el-input
                  prefix-icon="el-icon-user"
                  v-model="user.age"
                  placeholder="请输入年龄"
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
                <el-input
                  prefix-icon="el-icon-user"
                  v-model="user.address"
                  placeholder="请输入地址"
                ></el-input>
                <el-select v-model="user.gender" style="width: 100%">
                  <el-option label="男" value="男"></el-option>
                  <el-option label="女" value="女"></el-option>
                </el-select>
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
import request from '../../utils/request'

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      user: {
        name: 'root', // 用户名
        loginName: '',
        gender: '',
        age: '',
        address: '',
        phone: '', // 手机号
        password: '123456', // 密码
        repeatPassword: '' // 重复密码
      },
      site,
      isLogin: true // 登录还是注册
    }
  },
  methods: {
    handleLogin () {
      request.get(`/user/login?username=${this.user.name}&password=${this.user.password}`)
        .then(res => {
          console.log(res)
          if (res.data.state === 1) {
            localStorage.setItem('isLogin', true)
            localStorage.setItem('uid', res.data.id)
            this.$message.success('登录成功')
            this.$router.push({ name: 'Home' })
          } else {
            this.$message.error(res.data.message)
          }
        })
    },
    register () {
      this.isLogin = false
    },
    handleRegister () {
      console.log(this.user)
      request.post('/user/register', this.user)
        .then(res => {
          console.log(res)
          if (res.state === 1) {
            this.$message.success(res.data.message)
            this.isLogin = true
            this.user = {
              name: '', // 用户名
              loginName: '',
              gender: '',
              age: '',
              address: '',
              phone: '', // 手机号
              password: '', // 密码
              repeatPassword: '' // 重复密码
            }
          } else {
            // this.$message.error(res.message)
            this.$message.error(res.data.message)
          }
        })
    },
    handleIndex () { // 去首页
      this.$router.push({ path: '/' })
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
        cursor: pointer;
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
