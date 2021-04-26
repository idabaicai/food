<template>
  <div class="calc">
    <el-input class="input" v-model="number" @change="emitChange">
       <el-button slot="prepend" icon="el-icon-minus" @click="handleMinux" :disabled="this.number===1"></el-button>
       <el-button slot="append" icon="el-icon-plus" @click="handlePlus"></el-button>
    </el-input>
  </div>
</template>
<script>
export default {
  name: 'Calculator',
  props: {
    num: { // 数量
      type: [Number, String],
      default () {
        return 1
      }
    },
    idx: { // 索引
      type: Number
    }
  },
  data () {
    return {
      number: 1
    }
  },
  methods: {
    handleMinux () {
      if (this.num > 1) {
        this.number--
        this.$emit('numChange', this.number, this.idx)
      }
    },
    handlePlus () {
      this.number++
      this.$emit('numChange', this.number, this.idx)
    },
    emitChange () {
      console.log(this.number)
      if (this.number > 0) {
        this.$emit('numChange', this.number, this.idx)
      } else {
        this.number = 1
        this.$emit('numChange', this.number, this.idx)
      }
    }
  },
  created () {
    this.number = this.num // Avoid mutating a prop directly
  }
}
</script>
<style lang="less" scoped>
  .calc {
    .el-input {
      width: 170px;
      /deep/ input {
        text-align: center;
      }
    }
  }
</style>
