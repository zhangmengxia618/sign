<template>
  <div class="wrap">
    <header>
      <div class="personimg">
        <img src="../../images/my.png" class="person" />
      </div>
      <p class="phone">{{phone}}</p>
    </header>
    <section>
      <div class="s-item">
        <icon type="waiting"></icon>
        <span class="myinterview">我的面试</span>
        <img src="../../images/arrow.svg" class="right" />
      </div>
      <div class="s-item">
        <icon type="info"></icon>
        <span class="kefu">客服中心</span>
        <img src="../../images/arrow.svg" class="right" />
      </div>
    </section>
    <button v-if="showSetting" open-type="openSetting">打开设置页面</button>
    <button
      v-if="flag"
      class="getphone"
      open-type="getPhoneNumber"
      @getphonenumber="getPhoneNumber"
    ></button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "",
  data() {
    return {
      flag: true,
      showSetting: false,
      
    };
  },
  computed: {
    ...mapState({
      phone: state => state.user.phone
    })
  },
  methods: {
    ...mapActions({
      decrypt: "user/decrypts"
    }),
    getPhoneNumber(e) {
      this.flag = false;
      let { encryptedData, iv } = e.target;
      if (encryptedData) {
        this.decrypt({
          encryptedData,
          iv
        });
        // this.phone = this.info.data.phoneNumber;
      } else {
        this.showSetting = true;
      }
    }
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 350rpx;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}
.personimg {
  width: 140rpx;
  height: 140rpx;
  padding: 20rpx;
  margin-top: 100rpx;
  background: white;
  text-align: center;
  line-height: 150rpx;
  border-radius: 50%;
  box-sizing: border-box;
}
.person {
  width: 100%;
  height: 100%;
}

.phone {
  margin-top: 30rpx;
}

section {
  flex: 1;
}
.s-item {
  display: flex;
  padding: 30rpx;
  box-sizing: border-box;
  border-bottom: 1rpx solid #eee;
}
.right {
  width: 50rpx;
  height: 50rpx;
}
.myinterview,
.kefu {
  flex: 1;
  margin-left: 50rpx;
}

.getphone {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  left: 0;
  background: transparent;
}
</style>