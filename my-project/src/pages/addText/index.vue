<template>
  <div class="addtext-warp">
    <h3>面试信息</h3>
    <form action>
      <label for>
        <span>公司名称</span>
        <input type="text" placeholder="请输入公司名称"  v-model="name" />
      </label>
      <label for>
        <span>公司电话</span>
        <input type="text" placeholder="请选择面试联系人电话"  v-model="tel"/>
      </label>
      <label for>
        <span>面试时间</span>
          <picker mode="date" start="2019-01-01" end="2020-12-01" @change="bindDateChange">
            <view class="picker">
              {{date}}
            </view>
          </picker>    
          <i class="icon" @click="icon">！</i>
      </label>
      <label for>
        <span>面试地址</span>
        <input type="text" placeholder="请选择面试地址"  @focus="navig" :value="valueData"/>
      </label>
    </form>
    <h3>备注信息</h3>
    <textarea name id cols="100" rows="0">备注信息(可选，100字以内)</textarea>
    <!-- <navigator url="/pages/site/main"> -->
      <button @click="btnD">确认</button>
    <!-- </navigator> -->
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
             date:'2016-09-01',
             name:'',
             tel:''
        }
    },
    computed:{
      ...mapState({
          valueData:state=>state.selectSite.valueData,
        }),
    },
    methods:{
      
            bindDateChange: function(e) {
              console.log('picker发送选择改变，携带值为', e.mp.detail.value)
              this.date=e.mp.detail.value
          
            },
            // ...mapMutations(['btn']),
              ...mapMutations({
                  btn:"selectSite/btn"
              }),
              btnD(){
                 this.btn()
              },
            // btn({name,tel}){
            //   if(name==""||tel==""){
           
            //     wx.showToast({
            //       title: '请输入公司名称',
            //       icon: 'none',
            //       duration: 2000
            //     })
            //   }else{
            //       wx.navigateTo({
            //         url: '/pages/site/main',
            //       })
            //   }
            // },
            navig(){
               wx.navigateTo({
                url: '/pages/selectSite/main',
              })
            },
            icon(){
              wx.showToast({
                title: '在面试前一个小时我们会通知您',
                icon: 'none',
                duration: 2000
              })
            }
    },
    created(){

    },
    mounted(){

    }
}
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
      .icon{
        width: 50rpx;
        height: 50rpx;
        display: inline-block;
        background: rgb(25,125,191);
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
}
</style>

