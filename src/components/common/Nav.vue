<template>
  <div class="nav">
    <div class="card">
      <div class="w">
        <div class="logo" @click="handleIndex">
            <img :src="logo_img" alt="">
        </div>
        <el-input
          placeholder="想吃啥子"
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
import request from '../../utils/request';
export default {
  name: 'Nav', // 顶部导航
  data () {
    return {
      logo_img: require('../../assets/logo.png'),
      site,
      query: ''
    }
  },
  methods: {
    handleSearch () {
      const url = `http://114.55.140.167:8091/goods/findGoodsByName?name=${this.query}`
      request.get(url)
        .then(res => {
          console.log(res)
          this.$router.push({path: `/detail/${res.data.data.data[0].id}`})
        })
    },
    handleIndex () { // 去首页
      if (this.$route.name !== 'Home') {
        this.$router.push({ path: '/' })
      }
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
        cursor: pointer;
        padding: 10px;
        img {
          width: 90px;
          height: 90px;
          border-radius: 45px;
        }
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
