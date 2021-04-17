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
        <div class="center-top">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">1</div>
              <div class="swiper-slide">2</div>
              <div class="swiper-slide">3</div>
            </div>
          </div>
        </div>
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
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
export default {
  name: 'FoodMain',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    initSwiper () {
      const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
          delay: 2000
        }
      })
      console.log(swiper)
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
    // 要在next中执行
    this.$nextTick(() => {
      this.initSwiper()
    })
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
  .main {
    height: 427px;
    margin-bottom: 30px;
    .wrap {
      height: 427px;
    }
    .left {
      background-color: pink;
    }
    .center {
      // background-color: purple;
      .center-top {
        width: 100%;
        height: 290px;
        margin-bottom: 10px;
        // background-color: #0d0;
        .swiper-container {
          width: 100%;
          height: 100%;
          background-color: #0d0;
        }
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
