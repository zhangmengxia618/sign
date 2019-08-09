<template>
  <div class="wrap">
    <div class="header">
      <div class="city">北京</div>
      <div class="district">
        <input type="text" placeholder="请输入地址" v-model="addinp" @input="search" />
      </div>
    </div>
    <ul class="con">
      <li class="li" v-for="item in addressList" :key="item.id" @click="chooseAdd(item)">
        <div class="imgWrap">
          <img src="../../images/location.svg" />
        </div>
        <div class="conitem">
          <div class="addressitem">{{item.title}}</div>
          <div class="addressway">{{item.address}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "",
  data() {
    return {
      addinp: ""
    };
  },
  mounted() {
    this.getSuggestion = this.debounce(this.getSuggestion, 2000);
  },
  methods: {
    ...mapActions({
      getSuggestion: "chooseAddress/getSuggestion",
      chooseadd:'chooseAddress/chooseAdd'
    }),
    search() {
      // this.debounce(this.getSuggestion(this.addinp),2000)
      this.getSuggestion(this.addinp);
    },
    debounce(func, wait) {
      // wait：2000ms；func：被频繁触发的事件
      let start = +new Date();
      return function() {
        let cur = +new Date();
        if (cur - start > wait) {
          func(...arguments);
          start = cur;
        }
      };
    },
    chooseAdd(item){
      this.chooseadd(item);
      wx.navigateBack({
        delta: 1
      })
    }
  },
  computed: {
    ...mapState({
      addressList: a => a.chooseAddress.addressList
    })
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
.header {
  display: flex;
  padding: 20rpx 0;
  border-top: 1rpx solid #ccc;
  border-bottom: 1rpx solid #ccc;
}
.city {
  padding: 0 25rpx 0 25rpx;
  text-align: center;
  border-right: 1rpx solid #ccc;
}
.district {
  flex: 1;
  padding-left: 15rpx;
}
.con {
  flex: 1;
  overflow: scroll;
}
.li {
  width: 100%;
  padding: 20rpx 0;
  display: flex;
  /* align-items: center; */
  border-bottom: 1rpx solid #ccc;
}
.imgWrap {
  width: 18%;
  text-align: center;
  vertical-align: center;
  /* background: red; */
}
.imgWrap img {
  width: 80%;
  height: 80%;
}
.conitem {
  flex: 1;
}
.addressway {
  font-size: 24rpx;
  color: rgb(145, 145, 145);
}
</style>