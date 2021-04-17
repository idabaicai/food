<template>
  <div class="layout">
    <el-container>
      <el-header>
        <slot name="header" />
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="less" scoped>
</style>
