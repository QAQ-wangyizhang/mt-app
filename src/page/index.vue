<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu />
      </el-col>
      <el-col :span="19">
        <m-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :navList="styleList" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :navList="recomment" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :navList="styleList" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from "@/components/main/menu";
import MLife from "@/components/main/life";
import MContainer from "@/components/main/container";
export default {
  data() {
    return {
      styleList: {
        class : "",
        title: "有格调",
        list: [
          {
            text: "全部",
            tas: "all",
          },
          {
            text: "约会聚餐",
            tas: "food",
          },
          {
            text: "丽人SPA",
            tas: "spa",
          },
          {
            text: "电影演出",
            tas: "movie",
          },
          {
            text: "品质出游",
            tas: "travel",
          },
        ],
      },
      recomment: {
        class : 'youhui',
        title: "很优惠",
        list: [
          {
            text: "全部",
            tas: "all",
          },
          {
            text: "美食",
            tas: "food",
          },
          {
            text: "休闲",
            tas: "leisur",
          },
        ],
      },
    };
  },
  components: {
    MMenu,
    MLife,
    MContainer,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>