<template>
  <div class="personage">
      <dl>
        <dt></dt>
        <dd>*********</dd>
      </dl>
     <div class="cen">
        <p><span><i class="icon">!</i>我的面试</span><span> > </span></p>
        <p><span><i class="icon">!</i>我的面试</span><span> > </span></p>
      </div> 
  </div>
</template>
<script>
// import { mapState, mapActions, mapMutations } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      val: ""
    };
  },
  computed: {

  },
  methods: {
  
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
 .personage{
     width: 100%;
     height: 100%;

    dl{
      text-align: center;
      dt{
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
        background: forestgreen;
        margin: 0 auto;
        margin-bottom: 10rpx;

      }
    }

    .cen{
      p{
       display: flex;
       justify-content: space-between;
       padding: 30rpx;
       border-bottom: 1px solid #ccc;
       span{
         display: flex;
         i{
           margin-right: 10rpx;
         }
       }
      }
    
    }
 }
</style>