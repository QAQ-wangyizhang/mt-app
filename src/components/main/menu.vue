<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="hide">
      <dt>全部分类</dt>
      <dd
        v-for="(item,index) in menuList"
        :key="item + index"
        @mouseenter="handleTouch(index)
      "
      >
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="numDetail" class="detail" @mouseenter="enterDetail" @mouseleave="leaveDetail">
      <template v-for="(item,index) in menuList[curDetail].items">
        <h4 :key="item + '_' + index">{{item.title}}</h4>
        <span v-for="(v,i) in item.items" :key="v + '__' +i">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    this.$api.getMenuList().then(res => {
      // console.log(res);
      this.menuList = res.data;
    })
  },
  methods: {
    handleTouch(index) {
      let last = index;
      this.curDetail = index;
      // console.log(this.curDetail,index)
    },
    hide() {
      this.timer = setTimeout(() => {
        this.curDetail = null;
      }, 1000);
    },
    enterDetail() {
      clearTimeout(this.timer);
    },
    leaveDetail() {
      this.curDetail = null;
    },
  },
  computed: {
    numDetail() {
      return typeof this.curDetail === "number";
    },
  },
  data() {
    return {
      timer: null,
      curDetail: null,
      menuList: [],
    };
  },
};
</script>

<style>
</style>