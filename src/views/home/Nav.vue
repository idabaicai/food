<template>
  <div class="nav">
    <div class="card">
      <div class="w">
        <div class="logo">
          <img :src="logo_img" alt="">
        </div>
        <el-input
          placeholder="请输入商家或地点"
          v-model="query"
        >
          <el-button
            icon="el-icon-search"
            type="primary"
            slot="append"
            @click="handleSearch"
          ></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>
<script>
import site from '../../config/site'
export default {
  name: 'Nav',
  data () {
    return {
      logo_img: require('../../assets/logo.png'),
      site,
      query: ''
    }
  },
  methods: {
    handleSearch () {
      console.log('search')
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../style/variables.less');
  .nav {
    .card {
      position: relative;
      height: 160px;
      background-color: #fff;
      border-radius: 0;
      box-shadow: 0 2px 27px rgba(0, 0, 0, .10);
      .logo {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        h2 {
          vertical-align: middle;
        }
        .el-button {
          border-color: @theme-color;
        }
      }
      img {
        width: 120px;
        height: 120px;
      }
      .el-input {
        position: absolute;
        left: 50%;
        top: 30%;
        transform: translateX(-50%);
        width: 500px;
      }
    }
  }
</style>
