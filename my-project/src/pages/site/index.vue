<template>
  <div>
    <form action>
      <label for>
        <span>面试地址</span>
        <!-- <p>{{signDetailData.address}}</p> -->
        <input type="text" placeholder="北京市海淀区上地软件园南路57号" :value="signDetailData.address" />
      </label>
      <label for>
        <span>面试时间</span>
        <input type="text" placeholder="2019-08-06 17:00" :value="signDetailData.start_time" />
      </label>
      <label for>
        <span>联系方式</span>
        <input type="text" placeholder="1156151561" :value="signDetailData.phone" />
      </label>
      <label for>
        <span>是否提醒</span>
        <input type="text" placeholder="未提醒" v-model="remind" />
      </label>
      <label for>
        <span>面试状态</span>
        <input type="text" placeholder="未开始" v-model="status" />
      </label>
      <label for>
        <span>取消提醒</span>
        <view class="body-view">
          <switch @change="switch1Change" />
        </view>
        <!-- <input type="text" placeholder="请选择面试地址" /> -->
      </label>
    </form>
    <div class="btn">
      <button class="btn1">去打卡</button>
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
    return {};
  },
  computed: {
    ...mapState({
      signDetailData: state => state.site.signDetailData,
      signP: state => state.site.signP
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
    },
  },
  methods: {
     ...mapActions({
       signP: "site/signP",
     }),
     //取消提醒
     switch1Change(e){
      console.log('switch1 发生 change 事件，携带值为', e.mp.detail.value)
     if(e.mp.detail.value===true){
         this.signP({id:this.signDetailData.id,remind:-1})
     }else{
         this.signP({id:this.signDetailData.id,remind:0})
     }
    },
    //放弃面试
    interview(){
       this.signP({id:this.signDetailData.id,status:1})
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