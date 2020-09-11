<template>
  <div class="m-products-fav">
    <dl>
      <dt>猜你喜欢</dt>
      <dd v-for="fav in favList" :key="fav.id">
        <img :src="fav.image" alt="">
        <p>
          <span class="fav-title">{{fav.title}}</span>
        </p>
        <p class="fav-comment">
          <el-rate v-model="fav.score" disabled  text-color="#ff9900"></el-rate>
          <span>{{fav.commentNum}}个评价</span>
        </p>
        <p class="fav-address">{{fav.address}}</p>
        <p class="fav-price">
          <span class="yuan">￥</span>
          <span class="price-number numfont">{{fav.price}}</span>
          <span class="price-desc">起</span>
        </p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  created(){
    // 这里的请求 图片地址失效
    // this.$api.getRecommendList().then(res => {
    //   console.log(res)
    // })
  },
  data() {
    return {
      favList: [
        {
          id: 1,
          image:
            "https://p0.meituan.net/bbia/f58fafc0be2bc3a69dfcac20260888c2201000.jpg@237w_132h_1e_1c",
          title: "晓寿司（望京soho店）",
          score: 5,
          commentNum: 2143,
          address: "望京",
          price: 98.0,
        },
         {
          id: 2,
          image:
            "https://p0.meituan.net/bbia/f58fafc0be2bc3a69dfcac20260888c2201000.jpg@237w_132h_1e_1c",
          title: "晓寿司（望京soho店）",
          score: 5,
          commentNum: 2143,
          address: "望京",
          price: 98.0,
        },
      ],
    };
  },
};
</script>

<style lang = "scss">
@import "@/assets/css/products/fav.scss";

</style>