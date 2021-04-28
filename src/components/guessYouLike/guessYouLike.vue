<template>
  <div class="guessYouLike w">
    <ul class="clearfix">
      <li>猜你喜欢</li>
      <li>为你甄选最合适的</li>
    </ul>
    <div class="yourLikes">
      <div v-for="item in 15" :key="item" class="item-card">
        <div class="item-box">
            <div class="img-box">
                <img src="../../../src/assets/list/1.jpg" alt="">
            </div>
            <div class="card">
                <p title="川和潮人（龙湖星悦荟店）" class="title">川和潮人（龙湖星悦荟店）</p>
                <div class="stars">
                    <el-rate v-model="value" disabled text-color="#ff9900"
                    show-score
                    disabled-void-color="#ccc" score-template="{value}分"></el-rate>
                </div>
                <div class="address">
                    <p>簇桥</p>
                </div>
                <div class="price">
                    ￥ <span>38.8</span> 起
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            rates:[3.7],
            value:2.0
        }
    }
};
</script>
<style scoped>
.clearfix{
    height: 44px;
    background:linear-gradient(to right, rgb(88, 174, 221) 2%, rgb(66, 191, 205) 97%) rgb(88, 174, 221);
}
.clearfix li{
    display: inline-block;
    padding:0 5px;
    box-sizing: border-box;
    color: white;
    line-height: 44px;
    font-family: "MFShangHei-Regular";
    cursor:pointer;
    text-transform: uppercase;
}
.yourLikes{
    width: 100%;
    max-height: 758px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-top: 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 10px 10px 20px;
    box-sizing: border-box;
    overflow-y: hidden;
    text-align: left;
}
.item-card {
    display: inline-block;
    width: 20%;
    box-sizing: border-box;
    vertical-align: middle;
}
.item-box{
    padding: 10px;
}
.item-box:hover{
    background-color: #f3f3f3;
}
.img-box{
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
}
.img-box img{
    display: block;
    height: 120px;
}
.card .title{
    margin: 5px 0;
}
.card .address{
    font-size: 12px;
    color: #cccccc;
    margin-bottom: 3px;
}
.card .price{
    color: orange;
}
.card .price span{
    font-size: 24px;
}
</style>