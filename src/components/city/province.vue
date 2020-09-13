<template>
  <div>
    <span class="name">按省份选择</span>
    <m-select
      :list="provinceList"
      title="省份"
      :showWrapperActive="provinceActive"
      :value="province"
      :disabled="!cityDisabled"
      @change_active="proAcitve"
      @change_val="changeProVal"
      className="province"
    ></m-select>
    <m-select
      :list="cityList"
      :showWrapperActive="cityActive"
      @change_active="citAcitve"
      @change_val="changeCityVal"
      :disabled="cityDisabled"
      title="城市"
      :value="city"
      className="city"
    ></m-select>
    <span>直接搜索:</span>&nbsp;
    <el-select
      v-model="value"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "./select";
import {mapMutations} from "vuex"
export default {
  created() {
    this.$api.getProvince().then((res) => {
      // console.log(res);
      this.provinceList = res.data.map((item) => {
        return item.provinceName;
      });
      this.states = res.data.map((item) => {
        return item.provinceName;
      });
      this.res = res.data;
    });
  },
  mounted() {
    this.list = this.states.map((item) => {
      return { value: `value:${item}`, label: item };
    });
  },
  components: {
    MSelect,
  },
  methods: {
    ...mapMutations(['setPosition','setCity']),
    // 改变省份的值
    changeProVal(val) {
      // this.cityDisabled = true;
      this.setPosition(val);
      let filter = this.res.filter((item) => {
        return item.provinceName == val;
      });
      this.province = val;
      this.cityList = filter[0].cityInfoList.map((item) => {
        return item.name;
      });
      this.setCity("  ")
    },
    // 改变city的值
    changeCityVal(val) {
      this.setCity(val);
      this.city = val;
      this.$router.push({name : "index"})
    },
    proAcitve(flag) {
      this.provinceActive = flag;
      flag ? (this.cityActive = false) : "";
      // console.log(flag,'province')
    },
    citAcitve(flag) {
      this.cityActive = flag;
      flag ? (this.provinceActive = false) : "";
      // console.log(flag,'city')
    },
    remoteMethod(query) {
      // 请求后端接口
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter((item) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
  },
  data() {
    return {
      res: {},
      cityDisabled: true,
      provinceActive: false,
      cityActive: false,
      provinceList: [],
      province: "省份",
      city: "城市",
      cityList: ['请选择省份'],
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [
        "北京市",
        "广东省",
        "山东省",
        "江苏省",
        "河南省",
        "上海市",
        "河北省",
        "浙江省",
        "香港特别行政区",
        "陕西省",
        "湖南省",
        "重庆市",
        "福建省",
        "天津市",
        "云南省",
        "四川省",
        "广西壮族自治区",
        "安徽省",
        "海南省",
        "江西省",
        "湖北省",
        "山西省",
        "辽宁省",
        "台湾省",
        "黑龙江",
        "内蒙古自治区",
        "澳门特别行政区",
        "贵州省",
        "甘肃省",
        "青海省",
        "新疆维吾尔自治区",
        "西藏区",
        "吉林省 ",
        "宁夏回族自治区 ",
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>