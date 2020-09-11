<template>
  <el-row class="m-header-topbar m-header">
    <el-col :span="10">
      <geo></geo>
    </el-col>
    <el-col :span="14">
      <m-Nav></m-Nav>
    </el-col>
  </el-row>
</template>

<script>
import geo from "./geo"
import mNav from "./nav"
export default {
  components : {
    geo,
    mNav
  }
};
</script>

<style lang="scss">
@import '@/assets/css/public/header/topbar.scss'
</style>