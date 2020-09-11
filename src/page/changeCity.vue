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
  data() {
    return {
      hotList: ["北京", "上海", "西安", "银川", "深圳"],
      recentList: ["北京", "上海", "西安", "银川", "深圳"],
    };
  },
};
</script>

<style>
</style>