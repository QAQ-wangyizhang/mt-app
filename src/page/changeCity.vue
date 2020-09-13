<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot title="热门城市" :list="hotList" />
    </el-row>
    <el-row>
      <hot title="最近访问" :list="recentList" />
    </el-row>
    <el-row>
      <categroy />
    </el-row>
  </div>
</template>

<script>
import Province from "@/components/city/province";
import Hot from "@/components/city/hot";
import Categroy from "@/components/city/categroy";
export default {
  components: {
    Province,
    Hot,
    Categroy,
  },
  created() {
    this.$api.getHotCity().then((res) => {
      this.hotList = res.data.map((item) => {
        return item.name;
      });
    });
    this.$api.getRecentCity().then((res) => {
      this.recentList = res.data.map((item) => {
        return item.name;
      });
    });
  },
  data() {
    return {
      hotList: [],
      recentList: [],
    };
  },
};
</script>

<style>
</style>