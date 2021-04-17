<template>
  <div class="toast">
    {{ msg }}
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: 'default msg'
    }
  }
}
</script>
<style lang="less" scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    padding: 20px;
    border-radius: 10px;
    color: #fff;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,.35);
  }
</style>
