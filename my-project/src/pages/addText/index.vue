<template>
  <form @submit="submit" report-submit class="addtext-warp">
    <h3>面试信息</h3>

    <label for>
      <span>公司名称</span>
      <input type="text" placeholder="请输入公司名称" v-model="name" />
    </label>
    <label for>
      <span>公司电话</span>
      <input type="text" placeholder="请选择面试联系人电话" v-model="tel" />
    </label>
    <label for>
      <span>面试时间</span>
      <picker
        mode="multiSelector"
        :range="dateRange"
        :value="info.date"
        @change="dateChange"
        @columnchange="columnChange"
      >
        <view class="date">{{dateShow}}</view>
      </picker>
      <i class="icon" @click="icon">！</i>
    </label>
    <label for>
      <span>面试地址</span>
      <input type="text" placeholder="请选择面试地址" @click="navig" :value="valueData" />
    </label>

    <h3>备注信息</h3>
    <textarea name id cols="100" rows="0" v-model="text"></textarea>
    <!-- <navigator url="/pages/site/main"> -->
    <button form-type="submit">确认</button>
    <!-- </navigator> -->
  </form>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
const moment = require("moment");
const range = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
  ["00分", "10分", "20分", "30分", "40分", "50分"]
];
export default {
  props: {},
  components: {},
  data() {
    return {
      name: "",
      tel: "",
      text: "",
      info: {
        date: [0, 0, 0]
      }
    };
  },
  computed: {
    ...mapState({
      valueData: state => state.selectSite.valueData,
      longitude: state => state.home.longitude,
      latitude: state => state.home.latitude
    }),
    // 处理面试日期
    dateRange() {
      let dateRange = [...range];
      // 如果时间是今天，过滤掉现在之前的小时
      if (!this.info.date[0]) {
        dateRange[1] = dateRange[1].filter(item => {
          return item > moment().hour();
        });
      } else {
        dateRange[1] = range[1];
      }
      // 格式化小时
      dateRange[1] = dateRange[1].map(item => {
        return item + "点";
      });
      // 计算当前日期之后的十天
      dateRange[0] = dateRange[0].map(item => {
        return (
          moment()
            .add(item, "days")
            .date() + "号"
        );
      });
      return dateRange;
    },
    // 显示的日期
    dateShow() {
      return moment()
        .add(
          moment().hour() == 23 ? this.info.date[0] - 1 : this.info.date[0],
          "d"
        )
        .add(this.info.date[1] + 1, "h")
        .minute(this.info.date[2] * 10)
        .format("YYYY-MM-DD HH:mm");
    }
  },
  methods: {
    bindDateChange: function(e) {
      this.date = e.mp.detail.value;
    },
    ...mapActions({
      getLocation: "addText/getLocation"
    }),
    submit(e) {
      this.getLocation({
        company: this.name,
        phone: this.tel,
        address: this.valueData,
        latitude: this.latitude * 1,
        longitude: this.longitude * 1,
        start_time: moment(this.dateShow).unix() * 1000,
        description: this.text,
        form_id: e.target.formId
      });
      if (this.name == "" || this.tel == "") {
        wx.showToast({
          title: "请输入公司名称",
          icon: "none",
          duration: 2000
        });
      } else if (!/^1[3456789]\d{9}$/.test(this.tel)) {
        wx.showToast({
          title: "请输入正确的手机号",
          icon: "none",
          duration: 2000
        });
      }
    },
    // 监听多列选择器每列变化
    columnChange(e) {
      let { column, value } = e.target;
      let date = [...this.info.date];
      date[column] = value;
      this.info.date = date;
    },
    navig() {
      wx.navigateTo({
        url: "/pages/selectSite/main"
      });
    },
    icon() {
      wx.showToast({
        title: "在面试前一个小时我们会通知您",
        icon: "none",
        duration: 2000
      });
    }
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss" >
.addtext-warp {
  width: 100%;
  height: 100%;
  h3 {
    width: 100%;
    height: 80rpx;
    background: rgb(246, 246, 246);
    line-height: 80rpx;
    padding-left: 20rpx;
  }

  label {
    width: 100%;
    padding: 35rpx;
    display: flex;
    padding-left: 20rpx;
    border-bottom: 1px solid rgb(246, 246, 246);
    color: rgb(102, 102, 102);
    span {
      width: 30%;
      display: inline-block;
    }
    .date {
      width: 139%;
      margin-left: 54rpx;
    }
    .icon {
      width: 50rpx;
      height: 50rpx;
      display: inline-block;
      background: rgb(25, 125, 191);
      color: #fff;
      line-height: 50rpx;
      border-radius: 50%;
      text-align: right;
      margin-left: 300rpx;
    }
  }
}
textarea {
  width: 90%;
  height: 200rpx;
  margin: 0 auto;
  border: solid 1px #ccc;
  margin-top: 30rpx;
  padding: 10rpx;
  color: rgb(102, 102, 102);
}
button {
  margin-top: 20rpx;
  width: 100%;
  height: 80rpx;
  background: rgb(153, 153, 153);
  border-radius: 0;
  color: #fff;
}
</style>

