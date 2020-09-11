<template>
  <div class="m-istyle">
    <dl @mouseover="over($event)" :class="navList.class">
      <dt>{{navList.title}}</dt>
      <dd v-for="item in navList.list" :key="item.tas" :class="{active:kind == item.tas}" :data-type="item.tas">{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(card,index) in resultData[kind]" :key="card+''+index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="card.image" class="image" />
          <div class="cbody">
            <div class="title" :title="card.title">{{card.title}}</div>
            <div class="sub-title" :title="card.sub_title">{{card.sub_title}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{card.price}}</span>
              </span>
              <span class="old-price">门市价¥{{card.price}}</span>
              <span class="bottom-right-info sold">{{card.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created(){
    this.$api.getResultProducts().then(res => {
      this.resultData = res.data;
      // console.log(res)
    })
  },
  props: { navList: Object },
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      //   动态获取数据ajax 请求
    },
  },
  data() {
    return {
      resultData : {},
      kind: "all",
      cardList: [],
    };
  },
};
</script>

<style lang = "scss">
@import "@/assets/css/index/artistic.scss";
</style>