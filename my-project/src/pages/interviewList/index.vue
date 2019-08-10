<template>
  <div class="wrap">
    <header>
      <p v-for="(item,i) in headList" :class="i===ind?'active':''" :key="i"  @click="navitem(i)">{{item}}</p>
    </header>
    <ul>
      <li>
          <div>
            <p>北京八维研修学院</p>
            <p>北京市海淀区</p>
            <p>面试时间：2019:08:06</p>
          </div>
          <div>
              
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      headList: ["未开始", "已打卡", "已放弃", "全部"],
      ind:0
    };
  },
  
  methods: {
    navitem(ind) {
      this.ind=ind
    }
  }
};
</script>

<style  scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 88rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
ul{
  border-top:10rpx solid rgb(230, 230, 230);
  flex:1;
}
p{
  border-bottom:5rpx solid #fff;
}
.active{
  border-bottom: 5rpx solid rgb(70, 154, 209);
  color: rgb(70, 154, 209);
}
</style>