<template>
  <div class="personage">
    <dl>
      <dt></dt>
      <dd>{{phone}}</dd>
    </dl>
    <div class="cen">
      <p @click="navG">
        <span>
          <i class="icon">!</i>我的面试
        </span>
        <span>></span>
      </p>
      <p>
        <span>
          <i class="icon">!</i>我的面试
        </span>
        <span>></span>
      </p>
    </div>
    <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" class="btn" v-if="flag"></button>
    <button open-type="openSetting" @opensetting="callback" v-if="showFlag">打开设置页</button>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      val: "",
      flag: true,
      showFlag: false,
      //指纹
      isfingerPrint: false
    };
  },
  computed: {
    ...mapState({
      phone: state => state.user.phone
    })
  },
  methods: {
    ...mapActions({
      getPhoneNumberD: "user/getPhoneNumber",
      fingerPrintData: "user/fingerPrintData"
    }),
    getPhoneNumber(e) {
      let encryptedData = e.target.encryptedData; //加密数据
      let iv = e.target.iv;
      if (encryptedData) {
        this.getPhoneNumberD({
          encryptedData,
          iv
        });
        this.flag = false;
      } else {
        this.flag = true;
        this.showFlag = true;
        wx.openSetting({
          success(res) {
            console.log(res.authSetting);
          }
        });
      }
    },
    navG() {
      wx.navigateTo({
        url: "/pages/interList/main"
      });
    }
  },
  //   onLoad: function(options) {
  //     console.log(options);
  //     var that = this;
  // //   wx.startSoterAuthentication({
  // //    requestAuthModes: ['fingerPrint'],
  // //    challenge: '123456',
  // //    authContent: '请用指纹解锁',
  // //    success(res) {
  // //     //  console.log(res,)
  // //    }
  // // })
  //   },
  created() {
     let openid = wx.getStorageSync('openid');
    console.log('openid.....',openid)
    wx.startSoterAuthentication({
      requestAuthModes: ["fingerPrint"],
      challenge: "123456",
      authContent: "请用指纹解锁",
      success(res) {
        console.log(res,'res+++15121')
        //  console.log(res,)
        this.fingerPrintData({
          openid:openid,
          json_string:res.resultJSON,
          json_signature:res.resultJSONSignature
        })
      }
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.personage {
  width: 100%;
  height: 100%;

  dl {
    text-align: center;
    dt {
      width: 100rpx;
      height: 100rpx;
      border-radius: 50%;
      background: forestgreen;
      margin: 0 auto;
      margin-bottom: 10rpx;
    }
  }

  .cen {
    margin-top: 100rpx;
    p {
      display: flex;
      justify-content: space-between;
      padding: 30rpx;
      border-bottom: 1px solid #ccc;
      span {
        display: flex;
        i {
          margin-right: 10rpx;
        }
      }
    }
  }
  .btn {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>