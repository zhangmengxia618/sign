<template>
  <div class="inter">
    <ul>
      <li
        v-for="(item,index) in list"
        :key="index"
        @click="tab(index,item.status)"
        :class="{active:index===num}"
      >{{item.name}}</li>
    </ul>
    <div class="tabCon">
      <div class="main">
        <div
          class="mainItem"
          v-for="(itemCon,index) in addData"
          :key="index"
          :class="{active:index===num}"
          @click="navG(itemCon.id)"
        >
          <div class="company">
            <h3>{{itemCon.company}}</h3>
            <span>{{status}}</span>
            <!--  -->
          </div>
          <div class="address">{{itemCon.address}}</div>
          <div class="time">
            <p>面试时间:2019-08-06 17:00</p>
            <span>{{remind}}</span>
            <!--{{signDetailData.remind===-1?"未提醒":signDetailData.remind===0?"已提醒":"取消提醒"}}  -->
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
          name: "未开始",
          status: -1
        },
        {
          name: "已打卡",
          status: 0
        },
        {
          name: "已放弃",
          status: 1
        },
        {
          name: "全部",
          status: 2
        }
      ],
      tabContents: ["内容一", "内容二", "内容三", "内容4"],
      num: 0
    };
  },
  computed: {
    ...mapState({
      addData: state => state.addText.addData,
      signDetailData: state => state.site.signDetailData
    }),
    status() {
      let str = "";
      this.addData.forEach(item => {
        if (item.status === -1) {
          str = "未开始";
        } else if (item.status === 1) {
          str = "已放弃";
        } else {
          str = "已打卡";
        }
      });
      return str;
    },
    remind() {
      let str = "";
      this.addData.forEach(item => {
        if (item.remind === -1) {
          str = "未提醒";
        } else if (item.status === 1) {
          str = "已提醒";
        } else {
          str = "取消提醒";
        }
      });
      return str;
    }
  },
  methods: {
    ...mapActions({
      getLocaList: "addText/getLocaList",
      signDet: "site/signDet"
    }),
    tab(index, status) {
      this.getLocaList({ status: status });
      this.num = index;
    },

    navG(id) {
      this.signDet(id);
      wx.navigateTo({
        url: "/pages/site/main"
      });
    }
  },
  created() {},
  mounted() {
    this.getLocaList({ status: -1 });
  }
};
</script>
<style scoped lang="scss">
.inter {
  width: 100%;
  height: 100%;
  background: #ccc;
  display: flex;
  flex-direction: column;
  ul {
    width: 100%;
    height: 80rpx;
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
    background: #fff;
    overflow: scroll;
    flex: 1;
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
          font-size: 28rpx;
          padding: 10rpx;
        }
      }

      .address {
        width: 100%;
        height: 80rpx;
        line-height: 80rpx;
        color: #ccc;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .time {
        width: 100%;
        height: 80rpx;
        line-height: 80rpx;
        display: flex;
        justify-content: space-between;
        color: rgba(0, 0, 0, 0.6);
        span {
          height: 40rpx;
          line-height: 40rpx;
          background: lightcoral;
          margin-top: 10rpx;
          margin-right: 10rpx;
          font-size: 28rpx;
          padding: 10rpx;
        }
      }
    }
  }
}
</style>