<template>
  <form class="wrap" @submit="submit" report-submit>
    <div class="section">
      <div class="interview">面试信息</div>
      <div class="label">
        <p>公司名称</p>
        <input type="text" placeholder="请输入公司名称" v-model="company" />
      </div>
      <div class="label">
        <p>公司电话</p>
        <input type="text" placeholder="请输入面试联系人电话" v-model="phone" maxlength="11" />
      </div>
      <div class="label">
        <p>面试时间</p>
        <picker
          mode="multiSelector"
          :value="info.date"
          :range="dateRange"
          @change="dateChange"
          @columnchange="columnChange"
        >
          <div class="picker">{{dateShow}}</div>
        </picker>
        <div class="gantanhao" @click="showToast">!</div>
      </div>
      <div class="label">
        <p>面试地址</p>
        <input type="text" :value="add.address" placeholder="请选择面试地址" @click="chooseAdd" />
      </div>
      <div class="beizhu">备注信息</div>
      <textarea class="textarea" placeholder="备注信息(可选，100字以内)" v-model="description"></textarea>
    </div>
    <button :class="btnEnable?'': 'disable'" form-type="submit">确认</button>
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
const moment = require("moment");
const range = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23
  ],
  ["00分", "10分", "20分", "30分", "40分", "50分"]
];
export default {
  name: "",
  data() {
    return {
      form_id: "",
      // address: "",
      company: "",
      phone: "",
      description: "",
      latitude: 0,
      longitude: 0,
      start_time: 0,
      info: {
        date: [0, 0, 0]
      }
    };
  },
  created() {
    // 如果当前时间是十一点之后，过滤掉今天
    if (moment().hour() == 23) {
      this.info.date = [1, 0, 0];
    }
  },
  methods: {
    ...mapActions({
      addaddress: "addAddress/addAddress"
    }),
    chooseAdd() {
      wx.navigateTo({ url: "/pages/chooseAdd/main" });
    },
    columnChange(e) {
      let { column, value } = e.target;
      let date = [...this.info.date];
      date[column] = value;
      this.info.date = date;
    },
    showToast() {
      wx.showToast({
        title: "在面試前一個小時我們會通知您哦",
        icon: "none",
        duration: 2000
      });
    },
    async submit(e) {
      if (this.submiting) {
        return false;
      }
      if (!this.company) {
        wx.showToast({
          title: "请输入公司名称", //提示的内容,
          icon: "none" //图标,
        });
        return false;
      }
      // 判断手机号是否符合规范
      if (
        !/^1(3|4|5|7|8)\d{9}$/.test(this.phone) ||
        !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.phone)
      ) {
        wx.showToast({
          title: "请输入面试联系人的手机或座机", //提示的内容,
          icon: "none" //图标,
        });
        return false;
      }
      // 判断公司地址
      if (!this.add.address) {
        wx.showToast({
          title: "请选择公司地址", //提示的内容,
          icon: "none" //图标,
        });
        return false;
      }
      // 添加时间戳到表单
      this.start_time = moment(this.dateShow).unix() * 1000;
      // 添加form_id
      this.form_id = e.target.formId;
      // console.log(e.target.formId);
      this.submiting = true;
      let res = await this.addaddress({
        company: this.company,
        phone: this.phone,
        form_id: this.form_id,
        address: JSON.stringify({ address: this.add.address }),
        latitude: this.add.location.lat,
        longitude: this.add.location.lng,
        start_time: this.start_time,
        description: this.description
      });
      this.submiting = false;
      if (res.code === 0) {
        wx.showModal({
          title: "温馨提示",
          content: res.msg,
          showCancel: false,
          confirmText: "确定",
          confirmColor: "#197Dbf",
          success: res => {
            if (res.confirm) {
              this.phone = "";
              this.form_id = "";
              this.description = "";
              this.company = "";
            }
            wx.navigateTo({ url: "/pages/interviewList/main" });
          }
        });
      } else {
      }
    }
  },
  computed: {
    ...mapState({
      add: state => state.chooseAddress.addinfo
    }),
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
    // 按钮是否可点击
    btnEnable() {
      // 判断公司名称是否为空
      if (!this.company) {
        return false;
      }
      // 判断手机号是否符合规范
      if (
        !/^1(3|4|5|7|8)\d{9}$/.test(this.phone) ||
        !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.phone)
      ) {
        return false;
      }
      // 判断公司地址
      if (!this.add) {
        return false;
      }
      return true;
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
.interview,
.beizhu {
  background: #eee;
  padding: 25rpx 0 25rpx 20rpx;
}
.section {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.label {
  display: flex;
  padding: 30rpx 0 30rpx 20rpx;
  border-bottom: 1rpx solid #eee;
}
input,
.picker {
  margin-left: 30rpx;
}
._picker {
  flex: 1;
}
.textareabox {
  flex: 1;
  padding: 40rpx;
  margin-bottom: 20rpx;
}
.textarea {
  width: 100%;
  height: 100%;
  border: 1rpx solid #ccc;
}
.gantanhao {
  width: 40rpx;
  height: 40rpx;
  background: rgb(25, 125, 191);
  text-align: center;
  border-radius: 50%;
  color: white;
  margin-right: 20rpx;
}
.sure {
  width: 100%;
  height: 88rpx;
  background: rgb(153, 153, 153);
  border: none;
  color: white;
  border-radius: 0;
}
textarea {
  font-size: 30rpx;
  color: #333;
  width: 690rpx;
  height: 200rpx;
  margin: 30rpx;
  box-sizing: border-box;
  padding: 10rpx;
  border: 1rpx solid #c0c0c0;
  border-radius: 5rpx;
}
button {
  margin-top: 50rpx;
  color: #fff;
  background: #197dbf;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
button.disable {
  background: #999;
}
</style>