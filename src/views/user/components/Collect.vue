<template>
  <div class="container">
    <div class="item">
      item
    </div>
  </div>
</template>
<script>
export default {
  name: 'Collect',
  data () {
    return {
      itemList: [
        { id: 1, name: '孜然鸡柳+百事可乐', img_path: require('../../../assets/list/item1.jpg') }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .container {
    padding: 15px;
  }
</style>
