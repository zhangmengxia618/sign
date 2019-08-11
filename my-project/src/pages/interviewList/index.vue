<template>
  <div class="wrap">
    <header>
      <p
        v-for="(item,i) in headList"
        :class="i===ind?'active':''"
        :key="i"
        @click="navitem(i)"
      >{{item.txt}}</p>
    </header>
    <ul>
      <li class="li" v-for="item in interviewList" :key="item.id" @click="getDetail(item.id)">
        <div class="li-l">
          <p class="tit">{{item.company}}</p>
          <p class="address">{{item.address}}</p>
          <p class="time">面试时间：{{item.start_time}}</p>
        </div>
        <div class="li-r">
          <p class="nostart">未开始</p>
          <p class="noremind">未提醒</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "",
  components: {},
  data() {
    return {
      headList: [
        {
          txt: "未开始",
          status: -1
        },
        {
          txt: "已打卡",
          status: 0
        },
        {
          txt: "已放弃",
          status: 1
        },
        {
          txt: "全部",
          status: 2
        }
      ],
      ind: 0
    };
  },
  computed: {
    ...mapState({
      interviewList: state => state.getInterviewList.interviewList
    })
  },
  methods: {
    ...mapActions({
      getIVList: "getInterviewList/getIVList"
    }),
    navitem(ind) {
      this.ind = ind;
      if (ind == 3) {
        this.getIVList();
      } else {
        // console.log(ind-1)
        this.getIVList({ status: ind-1 });
      }
    },
    getDetail(id){
      wx.navigateTo('/pages/')
    }
  },
  // created() {
  //   this.getIVList({ status: -1 });
  // }
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
header p {
  height: 100%;
  line-height: 88rpx;
  border-bottom: 6rpx solid #fff;
}
ul {
  border-top: 20rpx solid rgb(240, 240, 240);
  flex: 1;
  overflow: auto;
}

header .active {
  border-bottom: 6rpx solid rgb(70, 154, 209);
  color: rgb(70, 154, 209);
}

.li {
  display: flex;
  width: 100%;
  height: 240rpx;
  border-bottom: 1rpx solid #ccc;
  justify-content: space-between;
  padding: 30rpx;
  box-sizing: border-box;
}
.li-l,
.li-r {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tit {
  font-size: 42rpx;
}
.address {
  color: rgb(148, 148, 148);
}
.time {
  color: rgb(97, 97, 97);
}

.nostart {
  padding: 10rpx;
  background: rgb(244, 244, 244);
  font-size: 30rpx;
  color: rgb(160, 160, 160);
  text-align: center;
}
.noremind {
  padding: 10rpx;
  background: rgb(254, 240, 240);
  font-size: 36rpx;
  color: rgb(254, 109, 109);
}
</style>