<template>
  <div class="page-product">
      <el-row class="m-crumbs">
        <crumbs/>
      </el-row>
      <el-row>
        <el-col :span="19">
          <el-row>
            <categroy-1/>
          </el-row>
          <el-row>
            <m-list></m-list>
          </el-row>
        </el-col>
        <el-col :span="5">
          <el-row>
            <m-nav/>
          </el-row>
          <el-row>
            <m-fav/>
          </el-row>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import Crumbs from "@/components/products/crumbs"
import Categroy1 from "@/components/products/categroy1"
import MList from "@/components/products/list"
import MNav from "@/components/products/nav"
import MFav from "@/components/products/fav"
export default {
  components : {
    Crumbs,
    Categroy1,
    MList,
    MNav,
    MFav
  }
}
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>