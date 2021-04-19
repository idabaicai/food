<template>
  <div class="footer">
    <el-divider></el-divider>
    <el-row :gutter="8" class="info">
      <el-col :span="6">关于{{ site.name }}</el-col>
      <el-col :span="6">加入我们</el-col>
      <el-col :span="6">商家入驻</el-col>
      <el-col :span="6">帮助中心</el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row type="flex" justify="center">
      <span class="info-text"><i class="iconfont icon-copyright info-text"></i> 2021 {{ site.name }}hwl.com 川ICP证10001号 川公网安备X1024412572248552号</span>
  </el-row>
  </div>
</template>
<script>
import site from '../../config/site'
export default {
  data () {
    return {
      site
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../style/variables.less');
.footer {
  width: 100%;
  height: 260px;
  background-color: #fff;
  padding: 50px 180px 10px 180px;
  .info .el-col{
      font-size: 12px;
      color: @info-text-color;
    }
}
</style>
