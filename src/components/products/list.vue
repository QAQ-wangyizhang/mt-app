<template>
  <div class="m-products-list">
    <ul>
      <li
        :class="{'s-nav-active':item.active}"
        v-for="(item,index) in nav"
        :key="item.key+index"
      >{{item.name}}</li>
    </ul>
    <el-row>
      <item v-for="(item,index) in productList" :key="index" :meta="item" />
    </el-row>
  </div>
</template>

<script>
import Item from "./item";
export default {
  created(){
    this.$api.getProductsList().then(res => {
      this.productList = res.data;
      console.log(res);
    })
  },
  components: {
    Item,
  },
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true,
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false,
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false,
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false,
        },
      ],
      productList: [],
    };
  },
};
</script>

<style lang = "scss">
@import "@/assets/css/products/list.scss";
</style>