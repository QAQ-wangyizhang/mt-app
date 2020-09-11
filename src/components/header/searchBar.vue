<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            placeholder="搜索商家或地点"
            v-model="searchVal"
            @input="inputVal"
            @focus="isShowHot"
            @blur="isHideHot"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-show="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(place,index) in hotPlaceList" :key="index">
              <router-link :to="{name : 'goods',params:{name:place}}">{{place}}</router-link>
            </dd>
          </dl>

          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(sea,index) in searchList" :key="sea+index">
              <router-link :to="{name : 'goods',params:{name:sea}}">{{sea}}</router-link>
            </dd>
          </dl>
        </div>

        <p class="suggest">
          <router-link
            :to="{name : 'goods',params:{name:item}}"
            v-for="(item,index) in sugList"
            :key="index"
          >{{item}}</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  created() {
    this.$api.searchHotWords().then((res) => {
      this.hotPlaceList = res.data;
      this.sugList = res.data;
    });
    // this.$api.get('/api/meituan/header/searchHotWords.json')
    //   .then(res => {
    //
    //   })
  },
  data() {
    return {
      searchVal: "",
      isHotPlace: false,
      isSearchList: false,
      hotPlaceList: [],
      searchList: [],
      sugList: [],
    };
  },
  methods: {
    isShowHot() {
      if (!this.isSearchList && !this.searchVal) {
        this.isHotPlace = true;
      } else {
        this.isSearchList = true;
      }
    },
    isHideHot() {
      setTimeout(() => {
        this.isHotPlace = false;
        this.isSearchList = false;
      }, 120);
    },
    inputVal() {
      let val = this.searchVal;
      if (!this.searchVal) {
        this.isHotPlace = true;
        this.isSearchList = false;
      } else {
        this.isHotPlace = false;
        this.$api.search().then((res) => {
          this.searchList = res.data.list.filter((item) => {
            return item.includes(val);
          });
          // console.log(res.data)
        });
        this.isSearchList = true;
      }
    },
  },
};
</script>

<style lang='scss'>
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>