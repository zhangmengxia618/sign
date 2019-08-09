<template>
  <div class="inter">
    <ul>
      <li
        v-for="(item,index) in list"
        :key="index"
        @click="tab(index,item.status,item.name)"
        :class="{active:index===num}"
      >{{item.name}}</li>
    </ul>
    <div class="tabCon">
      <!-- <div
        v-for="(itemCon,index) in addData"
        :key="index"
        v-show="index == num"
        class="cenZ"
      >{{itemCon.address}}</div> -->
       <div class="main">
      <div 
         class="mainItem"  
         v-for="(itemCon,index) in addData"
         :key="index"
          :class="{active:index===num}"
         >
        <div class="company">
          <h3>{{itemCon.company}}</h3>
          <span>未开始</span>
        </div>
        <div class="address">{{itemCon.address}}</div>
        <div class="time">
          <p>面试时间:2019-08-06 17:00</p>
          <span>未提醒</span>
        </div>
      </div>
    </div>

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
      list: [
        {
          "name":"未开始",
          "status":-1
        },
         {
          "name":"已打卡",
          "status":0
        },
         {
          "name":"已放弃",
          "status":1
        },
         {
          "name":"全部",
          "status":''*1
        },
      ],
      tabContents: ["内容一", "内容二", "内容三", "内容4"],
      num: 0
    };
  },
  computed: {
    ...mapState({
      addData: state => state.addText.addData
    }),
  
  },
  methods: {
    ...mapActions({
      getLocaList: "addText/getLocaList"
    }),
    tab(index,status,name) {
      this.getLocaList({status:status})
      this.num = index;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.inter {
  width: 100%;
  height: 100%;
  background: #ccc;
  ul {
    width: 100%;
    display: flex;
    background: #fff;
    margin-bottom: 10rpx;
    li {
      width: 25%;
      text-align: center;
      height: 80rpx;
      line-height: 80rpx;
    }
    .active {
      color: blue;
    }
  }
  .tabCon {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #fff;
    .cenZ {
      width: 100%;
      height: 100%;
    }
  }
   .main {
    width: 100%;
    flex: 1;
    background: #fff;
    margin-top: 20rpx;

    .mainItem {
      width: 100%;
      height: 300rpx;

      .company {
        width: 100%;
        height: 100rpx;
        line-height: 100rpx;
        display: flex;
        justify-content: space-between;

        span {
          height: 40rpx;
          line-height: 40rpx;
          background: #eee;
          margin-right: 10rpx;
           margin-top: 10rpx;
           font-size:28rpx;
           padding:10rpx;
           
        }
      }

      .address {
        width: 100%;
        height: 80rpx;
        line-height: 80rpx;
        color:#ccc;
      }

      .time {
        width: 100%;
        height: 80rpx;
        line-height: 80rpx;
        display: flex;
        justify-content: space-between;
        color:rgba(0,0,0,0.6);
        span {
          height: 40rpx;
          line-height: 40rpx;
          background: lightcoral;
          margin-top: 10rpx;
          margin-right: 10rpx;
          font-size:28rpx;
            padding:10rpx;
        }
      }
    }
  }

}
</style>