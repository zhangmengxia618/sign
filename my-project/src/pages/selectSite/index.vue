<template>
  <div>
    <form action>
      <label for>
        <span>北京</span>
        <input type="text" placeholder="北京市海淀区上地软件园南路57号" v-model="val" @input="s" />
      </label>
    </form>
    <div class="cen">
      <dl v-for="(item,index) in siteData" :key="index">
        <dt>!</dt>
        <dd @click="valDa(item.address)">
          <h4>{{item.title}}</h4>
          <p>{{item.address}}</p>
        </dd>
      </dl>
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
      val: ""
    };
  },
  computed: {
    ...mapState({
      siteData: state => state.selectSite.siteData
    })
  },
  methods: {
    ...mapActions({
      getSuggestion: "selectSite/getSuggestion"
    }),
    //点击每一项
    ...mapMutations({
      valD: "selectSite/valD"
    }),
    //出发input事件
    s() {
      this.getSuggestion(this.val);
    },

    valDa(value) {
      wx.navigateBack({
        delta: 1
      });
      this.valD(value);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
form {
  span {
    display: inline-block;
    width: 100rpx;
    border-right: solid 1px #ccc;
  }
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
.cen {
  dl {
    width: 100%;
    padding: 20rpx;
    border-bottom: 1px solid rgb(102, 102, 102);
    display: flex;
    dt {
      width: 10%;
    }
    p {
      font-size: 28rpx;
      color: rgb(102, 102, 102);
    }
  }
}
</style>