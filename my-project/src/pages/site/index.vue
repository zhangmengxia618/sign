<template>
  <div>
    <form action>
      <label for>
        <span>面试地址</span>
        <input type="text" placeholder="北京市海淀区上地软件园南路57号" />
      </label>
      <label for>
        <span>面试时间</span>
        <input type="text" placeholder="2019-08-06 17:00" />
      </label>
      <label for>
        <span>联系方式</span>
        <input type="text" placeholder="1156151561" />
      </label>
      <label for>
        <span>是否提醒</span>
        <input type="text" placeholder="未提醒" />
      </label>
      <label for>
        <span>面试状态</span>
        <input type="text" placeholder="未开始" />
      </label>
      <label for>
        <span>取消提醒</span>
        <input type="text" placeholder="请选择面试地址" />
      </label>
    </form>
    <div class="btn">
        <button class="btn1">去打卡</button>
        <button class="btn2">放弃面试</button>
    </div>
   
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
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
.btn{
    width: 100%;
    display: flex;
    margin-top: 20rpx;
    button{
        width: 48%;
          
    }
    .btn1{
        background: rgb(25, 12, 197);
        color: #fff;
    }
     .btn2{
        background: rgb(220, 78, 66);
         color: #fff;
    }
}
</style>