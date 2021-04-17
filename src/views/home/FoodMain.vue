<template>
  <div class="main w">
    <el-row :gutter="24">
      <el-col :span="5" class="wrap left">
        <ul>
          <li><a href="">2</a></li>
          <li><a href="">2</a></li>
        </ul>
      </el-col>
      <el-col :span="14" class="wrap center">
        <div class="center-top">swiper</div>
        <div class="center-bottom">
          <el-row :gutter="24">
            <el-col :span="8" class="item">item1</el-col>
            <el-col :span="8" class="item">item2</el-col>
            <el-col :span="8" class="item">item3</el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="5" class="wrap right">
        <div class="right-top">
          个人中心
        </div>
        <div class="right-bottom"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'FoodMain'

}
</script>
<style lang="less" scoped>
  .main {
    height: 427px;
    margin-bottom: 100px;
    .wrap {
      height: 427px;
    }
    .left {
      background-color: pink;
    }
    .center {
      background-color: purple;
      .center-top {
        width: 100%;
        height: 290px;
        margin-bottom: 10px;
        background-color: #0d0;
      }
      .center-bottom {
        width: 100%;
        height: 127px;
        background-color: pink;
      }
    }
    .right {
      background-color: hotpink;
      .right-top {
        width: 100%;
        height: 290px;
        margin-bottom: 10px;
        background-color: pink;
      }
      .right-bottom {
        height: 127px;
        background-color: pink;
      }
    }
  }
</style>
