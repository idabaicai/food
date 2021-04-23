<template>
  <div class="info">
    <el-form ref="form" :model="info" label-width="100px">
      <el-form-item label="昵称">
        <el-input v-model="info.nickName"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="info.phone"></el-input>
      </el-form-item>
      <el-form-item label="生日">
        <!-- <el-input v-model="info.birthday"></el-input> -->
        <el-date-picker v-model="info.birthday" style="width: 100%"></el-date-picker>
      </el-form-item>
      <el-form-item label="性别">
          <el-radio-group v-model="info.gender">
            <el-radio :label="1" >男</el-radio>
            <el-radio :label="0">女</el-radio>
          </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleEdit" type="primary" style="width: 100%">修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Info',
  data () {
    return {
      info: {
        nickName: '龙城飞将',
        phone: 18809196666,
        birthday: '2002-01-12',
        gender: 0
      }
    }
  },
  methods: {
    handleEdit () {
      console.log('submit')
    }
  }
}
</script>
<style lang="less" scoped>
 .info {
   padding: 30px 0;
   width: 50%;
 }
</style>
