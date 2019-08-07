<template>
  <div class="inter">
    <ul>
         <li v-for="(item,index) in list" :key="index" @click="tab(index)" :class="{active:index===num}">{{item}}</li>
    </ul>
    <div class="tabCon">
      <div v-for='(itemCon,index) in tabContents' :key="index" v-show="index == num" class="cenZ">{{itemCon}}</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
       list:['未开始','已打卡','已放弃','全部'],
        tabContents: ["内容一", "内容二","内容三","内容4"],
        num: 0
    };
  },
  computed: {
  },
  methods: {
         tab(index) {
      this.num = index;
    }   
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.inter{
  width: 100%;
  height: 100%;
  background: #ccc;
  ul{
    width: 100%;
    display: flex;
    background: #fff;
    margin-bottom: 10rpx;
    li{
      width: 25%;
      text-align: center;
      height: 80rpx;
      line-height: 80rpx;
    }
    .active{
      color: blue;
    }
  }
  .tabCon{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #fff;
    .cenZ{
      width: 100%;
      height: 100%;
    }
  }
}
</style>