<template>
  <div
    :class="{'choose-wrap':true,'disabled' : disabled}"
    @click="showWrapper"
    v-document-click="documentClick"
  >
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true,'active':showWrapperActive}">
        <h2>{{title}}</h2>
        <div :class="['wrapper',className]">
          <div class="col" v-for="(list,index) in renderList" :key="index">
            <span
              :class="{'mt-item':true,'active':item == value}"
              v-for="item in list"
              :key="item"
              @click="changeVal(item)"
            >{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showWrapper(e) {
      e.stopPropagation();
      this.$emit("change_active", true);
    },
    // 这里wrapper 事件冒泡触发来了document click
    documentClick() {
      this.$emit("change_active", false);
    },
    changeVal(val) {
      this.$emit("change_val", val);
    },
  },
  props: {
    list: Array,
    title: String,
    value: String,
    showWrapperActive: Boolean,
    disabled: Boolean,
    className : String
  },
  computed: {
    renderList() {
      let col = Math.ceil(this.list.length / 12);
      let groupList = [];
      for (let i = 0; i < col; i++) {
        groupList.push(this.list.slice(i * 12, i * 12 + 12));
      }
      return groupList;
    },
  },
};
</script>

<style lang = "scss">
@import "@/assets/css/changecity/select.scss";
</style>