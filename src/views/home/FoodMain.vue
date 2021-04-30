<template>
  <div class="main w">
    <el-row :gutter="24">
      <el-col :span="5" class="wrap left">
        <div class="title">
          <h4>全部分类</h4>
        </div>
        <ul>
          <li v-for="item in cateLists" :key="item.id">
            <a href="#" @click.prevent="handleCateClick(item.id)">
              {{ item.name }}</a
            >
            <i class="el-icon-arrow-right"></i>
          </li>
        </ul>
      </el-col>
      <!-- 轮播图 start -->
      <el-col :span="14" class="wrap center">
        <div class="center-top">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="item in swipeList"
                :key="item.id"
                @click="toDetail(item.foodId)"
              >
                <img :src="item.img_path" alt="" />
              </div>
            </div>
          </div>
        </div>
        <!-- 二级轮播 -->
        <div class="center-bottom">
          <div>
            <el-col
              :span="8"
              class="item"
              v-for="item in subSwipeList"
              :key="item.id"
            >
              <img :src="item.img_path" alt="" />
            </el-col>
          </div>
        </div>
      </el-col>
      <!-- 轮播图 end -->
      <!-- 个人中心 start -->
      <el-col :span="5" class="wrap right">
        <div class="right-top">
          <div class="avatar">
            <el-avatar
              :size="60"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            ></el-avatar>
          </div>
          <div class="mine-box">
            <el-row>
              <el-col :span="8">
                <div @click="handleMyOrder">
                  <span class="iconfont icon-xinzengtubiao-19"></span>
                  <a class="item info-text" href="#">我的订单</a>
                </div>
              </el-col>
              <div @click="handleCollect">
                <el-col :span="8">
                  <span class="iconfont icon-ShoppingCartArrowDown"></span>
                  <a class="item info-text">购物车</a>
                </el-col>
              </div>
            </el-row>
          </div>
        </div>
        <div class="right-bottom">
          <img src="../../assets/mini-app.png" alt="" />
          <div class="qr-code">
            <span class="info-text">扫一扫, 马上订</span>
          </div>
        </div>
      </el-col>
      <!-- 个人中心 end -->
    </el-row>
  </div>
</template>
<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
import request from '../../utils/request'
export default {
  name: 'FoodMain',
  components: {},
  data () {
    return {
      // 右侧分类数据
      cateLists: [
        // { id: 1001, name: '美食', category: 'fine' },
      ],
      // 轮播图
      swipeList: [
        {
          id: 101,
          img_path: require('../../assets/slides/item1.png'),
          foodId: 1
        },
        {
          id: 102,
          img_path: require('../../assets/slides/item2.jpg'),
          foodId: 2
        },
        {
          id: 103,
          img_path: require('../../assets/slides/item3.jpg'),
          foodId: 3
        }
      ],
      // 二级轮播
      subSwipeList: [
        { id: 10, img_path: require('../../assets/slides/sub-item1.png') },
        { id: 11, img_path: require('../../assets/slides/sub-item2.jpg') },
        { id: 12, img_path: require('../../assets/slides/sub-item3.jpg') }
      ],
      userId: 1
    }
  },
  methods: {
    initSwiper () {
      const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
          delay: 3000
        }
      })
      if (!swiper) {
        console.log('打工人，打工混')
      }
    },
    // 去个人中心
    handleMyOrder () {
      this.$router.push({ path: `user/${this.userId}/Order` })
    },
    // 去商品详情
    toDetail (id) {
      this.$router.push({ path: `/detail/${id}` })
    },
    // 去收藏页面
    handleCollect () {
      this.$router.push({ path: `user/${this.userId}/Collect` })
    },
    // 商品列表
    handleCateClick (cateId) {
      this.$router.push({ path: `list/${cateId}` })
    }
  },
  computed: {},
  watch: {},
  created () {
    // 获取分类数据

    request.post('/item/findItemList').then((res) => {
      this.cateLists = res.data.data
    })
    // 要在next中执行
    this.$nextTick(() => {
      this.initSwiper()
    })
    // 缓存当前用户id
    this.userId = localStorage.getItem('uid')
  },
  mounted () {}
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
      a,
      i {
        color: #c0c4cc;
        font-size: 12px;
      }
    }
  }
  .center {
    // background-color: purple;
    width: 690px;
    margin: 0 5px;
    .center-top {
      width: 100%;
      height: 290px;
      margin-bottom: 10px;
      // background-color: #0d0;
      .swiper-container {
        display: flex;
        width: 100%;
        height: 100%;
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
      width: 690px;
      height: 127px;
      .el-row {
        // width: 690px;
        margin: 0;
        padding: 0;
      }
      .item {
        width: 226px;
        height: 127px;
        &:nth-child(2) {
          margin: 0 6px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .right {
    .right-top {
      width: 100%;
      height: 290px;
      margin-bottom: 10px;
      padding: 0 20px;
      border: 1px solid #ddd;
      background-color: #fff;
      .avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 120px;
      }
      .mine-box {
        .el-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          height: 50px;
          .el-col {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 60px;
            height: 46px;
            margin: 8px 5px;
            cursor: pointer;
            .iconfont {
              font-size: 40px;
              color: rgb(240, 150, 40);
            }
            .item {
              display: block;
            }
          }
        }
      }
    }
    .right-bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 127px;
      background-color: #fff;
      border: 1px solid #ddd;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>
