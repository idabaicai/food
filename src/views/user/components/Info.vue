<template>
  <div class="info">
    <el-tabs v-model="activeName" @tab-click="handleTabClick">
      <el-tab-pane label="个人信息" name="first">
          <el-form ref="form" :model="info" label-width="100px">
            <el-form-item label="姓名">
              <el-input v-model="info.name"></el-input>
            </el-form-item>
            <el-form-item label="登录名">
              <el-input v-model="info.loginName"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input v-model="info.phone"></el-input>
            </el-form-item>
            <el-form-item label="地址">
              <el-input v-model="info.address"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                  <el-radio v-model="info.gender" label="男">男</el-radio>
                  <el-radio v-model="info.gender" label="女">女</el-radio>
            </el-form-item>
            <el-form-item>
              <el-button @click="handleEdit" type="primary" style="width: 100%">修改</el-button>
            </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="修改密码" name="second">
        <el-form ref="form" :model="info" label-width="100px">
            <el-form-item label="密码">
              <el-input v-model="info.newPassword" type="password" placeholder="请输入新密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="handleChange" type="primary" style="width: 100%">修改</el-button>
            </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import request from '../../../utils/request'
export default {
  name: 'Info',
  data () {
    return {
      activeName: 'first',
      info: {
        name: '龙城飞将',
        loginName: '',
        phone: 18809196666,
        birthday: '2002-01-12',
        gender: '',
        address: '',
        age: 0,
        newPassword: ''
      },
      uid: 1
    }
  },
  methods: {
    handleEdit () {
      console.log('submit')
      const params = {
        id: this.uid,
        ...this.info
      }
      request.post('/user/updateUserById', params)
        .then(res => {
          console.log(res)
          if (res.data.state === 1) {
            this.$message.success('更新成功')
          } else {
            this.$message.error(res.data.message)
          }
        })
    },
    handleTabClick (tab) {
      console.log(tab.name)
      this.activeName = tab.name
    },
    // 更新密码
    handleChange () {
      request.get(`/user/updatePwd?pwd=${this.info.newPassword}&userId=${this.uid}`)
        .then(res => {
          console.log(res)
          if (res.data.state === 1) {
            this.$message.success('修改成功')
            this.info.newPassword = ''
          } else {
            this.$message.error(res.data.message)
          }
        })
    }
  },
  created () {
    // 获取个人信息
    const uid = localStorage.getItem('uid')
    this.uid = uid
    request.get(`/user/findUserById?id=${uid}`)
      .then(res => {
        this.info = res.data.data
      })
  }
}
</script>
<style lang="less" scoped>
 .info {
   padding: 30px 20px;
   width: 100%;
   .el-form {
     width: 50%;
   }
 }
</style>
