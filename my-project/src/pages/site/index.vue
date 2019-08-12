<template>
  <div>
    <form action>
      <label for>
        <span>面试地址</span>
        <p>{{signDetailData.address}}</p>
      </label>
      <label for>
        <span>面试时间</span>
        <p>{{signDetailData.start_time}}</p>
      </label>
      <label for>
        <span>联系方式</span>
        <p @click="makePhone">{{signDetailData.phone}}</p>
      </label>
      <label for>
        <span>是否提醒</span>
        <p>{{signDetailData.remind?'未提醒':'已提醒'}}</p>
      </label>
      <label for>
        <span>面试状态</span>
        <p>{{status}}</p>
      </label>
      <label for>
        <span>取消提醒</span>
        <view class="body-view">
          <switch @change="switch1Change" :checked="signDetailData.remind===0" />
        </view>
      </label>
    </form>
    <div class="btn" v-if="signDetailData.status !==1">
      <button class="btn1" @click="goSign">去打卡</button>
      <button class="btn2" @click="interview">放弃面试</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      flag:true
    };
  },
  computed: {
    ...mapState({
      signDetailData: state => state.site.signDetailData,
      signP: state => state.site.signP,
    
    }),
    remind() {
      if (this.signDetailData.remind === -1) {
        return "未提醒";
      } else if (this.signDetailData.remind === 0) {
        return "已提醒";
      } else if (this.signDetailData.remind === 1) {
        return "取消提醒";
      }
    },
    status() {
      if (this.signDetailData.status === -1) {
        return "未开始";
      } else if (this.signDetailData.status === 0) {
        return "已打卡";
      } else if (this.signDetailData.status === 1) {
        return "已放弃";
      }
    }
  },
  methods: {
    ...mapActions({
      signP: "site/signP",
      getLocaList: "addText/getLocaList",
    }),
    //取消提醒
    switch1Change(e) {
      console.log("switch1 发生 change 事件，携带值为", e.mp.detail.value);
      this.signP({
        id: this.signDetailData.id,
        remind: { remind: e.target.value ? 1 : -1 }
      });
    },
    //电话
    makePhone() {
      wx.makePhoneCall({ phoneNumber: this.signDetailData.phone });
    },
    //放弃面试
    interview() {
      wx.showModal({
        title: "温馨提示", 
        content: "确定要放弃本次面试吗?",
        success: async res => {
          if (res.confirm) {
            await  this.signP({ id: this.signDetailData.id, status: 1 });
          }
          this.flag=false;
        }
      });
      this.getLocaList({ status: -1 })
      // this.signP({ id: this.signDetailData.id, status: 1 });
    },
    //去打卡
    goSign() {
      wx.navigateTo({ url: "/pages/sign/main" });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
form {
  label {
    width: 100%;
    padding: 35rpx;
    display: flex;
    padding-left: 20rpx;
    border-bottom: 1px solid rgb(246, 246, 246);
    color: rgb(102, 102, 102);
    span {
      margin-right: 50rpx;
    }
  }
}
.btn {
  width: 100%;
  display: flex;
  margin-top: 20rpx;
  button {
    width: 48%;
  }
  .btn1 {
    background: rgb(25, 12, 197);
    color: #fff;
  }
  .btn2 {
    background: rgb(220, 78, 66);
    color: #fff;
  }
 
}

</style>