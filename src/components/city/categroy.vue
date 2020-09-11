<template>
  <div>
    <dl class="m-categroy">
      <dt>按拼音首字母选择:</dt>
      <dd v-for="(item,index) in list" :key="index">
        <a :href="'#city-'+item">{{item}}</a>
      </dd>
    </dl>
    <dl :id="'city-'+index" class="m-categroy-section" v-for="(item,index) in cityGroup" :key="index">
        <dt>{{index}}</dt>
        <dd >
            <span v-for="city in item" :key="city.id" >
                {{city.name}}
            </span>
        </dd>
    </dl>
  </div>
</template>

<script>
export default {
  created() {
    let data = [
      {
        id: 1,
        name: "北京",
        pinyin: "beijing",
        acronym: "bj",
        rank: "S",
        firstChar: "b",
      },
      {
        id: 2,
        name: "上海",
        pinyin: "shanghai",
        acronym: "sh",
        rank: "S",
        firstChar: "s",
      },
      {
        id: 3,
        name: "云南",
        pinyin: "yunnan",
        acronym: "yn",
        rank: "S",
        firstChar: "y",
      },
      {
        id: 4,
        name: "南京",
        pinyin: "nanjing",
        acronym: "nj",
        rank: "A",
        firstChar: "n",
      },
      {
        id: 5,
        name: "深圳",
        pinyin: "shenzheng",
        acronym: "sz",
        rank: "S",
        firstChar: "s",
      },
    ];
    let obj = {};
    data.forEach(item => {
        if(obj[item.firstChar.toUpperCase()]){
            obj[item.firstChar.toUpperCase()].push(item)
        }else{
         obj[item.firstChar.toUpperCase()] = [item];
        }
    })
    this.cityGroup = obj;
    console.log(this.cityGroup);
  },

  data() {
    return {
      cityList: [],
      cityGroup : {},
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