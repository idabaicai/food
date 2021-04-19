<template>
  <div class="main w">
    <el-row :gutter="24">
      <el-col :span="5" class="wrap left">
        <div class="title">
          <h4>全部分类</h4>
        </div>
        <ul>
          <li
            v-for="item in cateLists"
            :key="item.id"
          >
            <a href=""> {{ item.name }}</a>
            <i class="el-icon-arrow-right"></i>
          </li>
        </ul>
      </el-col>
      <el-col :span="14" class="wrap center">
        <div class="center-top">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="item in swipeList"
                :key="item.id"
              >
              <img :src="item.img_path" alt="">
              </div>
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
      // 右侧分类数据
      cateLists: [
        { id: 1001, name: '美食' },
        { id: 1002, name: '美食' },
        { id: 1003, name: '美食' },
        { id: 1004, name: '美食' },
        { id: 1005, name: '美食' },
        { id: 1006, name: '美食' },
        { id: 1007, name: '美食' },
        { id: 1008, name: '美食' },
        { id: 1009, name: '美食' },
        { id: 1010, name: '美食' },
        { id: 1011, name: '美食' },
        { id: 1012, name: '美食' },
        { id: 1013, name: '美食' }
      ],
      // 轮播图
      swipeList: [
        { id: 101, img_path: require('../../assets/slides/item1.png') },
        { id: 102, img_path: require('../../assets/slides/item2.jpg') },
        { id: 103, img_path: require('../../assets/slides/item3.jpg') }
      ]
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
@import url('../../style/variables.less');
  .main {
    height: 427px;
    margin-bottom: 30px;
    .wrap {
      height: 427px;
    }
    .left {
      margin-top: -50px;
      height: 477px;
      background-color: #fff;
      border: 1px solid #ddd;
      .title {
        padding: 15px 12px;
        margin-bottom: 12px;
        color: @primary-text-color;
      }
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 32px;
        padding: 0 12px;
        &:hover {
          background-color: rgb(255, 245, 235);
        }
        a, i {
          color: #C0C4CC;
          font-size: 12px;
        }
      }
    }
    .center {
      // background-color: purple;
      width: 690px;
      .center-top {
        width: 100%;
        height: 290px;
        margin-bottom: 10px;
        // background-color: #0d0;
        .swiper-container {
          display: flex;
          width: 100%;
          height: 100%;
          background-color: #0d0;
        }
        .swiper-slide {
          font-size: 5rem;
          text-align: center;
          img {
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
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
        background-color: #fff;
      }
      .right-bottom {
        height: 127px;
        background-color: pink;
      }
    }
  }
</style>
