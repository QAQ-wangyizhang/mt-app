<template>
  <div>
    <dl class="m-categroy">
      <dt>按拼音首字母选择:</dt>
      <dd v-for="(item,index) in list" :key="index">
        <a :href="'#city-'+item">{{item}}</a>
      </dd>
    </dl>
    <dl
      :id="'city-'+index"
      class="m-categroy-section"
      v-for="(item,index) in cityGroup"
      :key="index"
    >
      <dt>{{index}}</dt>
      <dd>
        <span v-for="city in item" :key="city.id" @click="changeCity(city)">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import { mapState ,mapMutations} from "vuex";
export default {
  async created() {
    let data = null;
    let res = await this.$api.getCityList();
    console.log(res.data);
    let obj = {};
    res.data.forEach(item => {
        if(obj[item.firstChar.toUpperCase()]){
            obj[item.firstChar.toUpperCase()].push(item)
        }else{
         obj[item.firstChar.toUpperCase()] = [item];
        }
    })
    this.cityGroup = obj;
    // console.log(this.cityGroup);
  },
  computed: {
    ...mapState(["position"]),
  },
  methods : {
    ...mapMutations(['setPosition','setCity']),
    changeCity(val){
      this.setPosition(val.name);
      this.setCity(val.name);
      this.$router.push({name : "index"})
    }
  },
  data() {
    return {
      cityList: [],
      cityGroup: {},
      list: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>