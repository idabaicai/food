<template>
  <div>
    <i class="iconfont icon-move"></i>
    <div class="w">
      hello vue2
    </div>
  </div>
</template>
<script>
import request from './utils/request'
console.log(request)
export default {
  created () {
    request.post('/api/login').then(res => {
      console.log(res)
    })
  }
}
</script>
<style lang="less">
</style>
