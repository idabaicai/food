<template>
  <div class="container w">
    <el-container>
      <el-aside>Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'BaseLayout'
}
</script>
<style lang="less" scoped>
  .container {
    height: 800px;
    margin-top: 20px;
    background-color: pink;
    .el-aside {
      widows: 240px;
      height: 800px;
      background-color: purple;
    }
  }
</style>
