<template>
  <div class="addtext-warp">
      <h3>面试信息</h3>
      <form action="">
         <label for=""><span>公司名称</span><input type="text" placeholder="请输入公司名称"></label>
         <label for=""><span>公司电话</span><input type="text" placeholder="请选择面试联系人电话"></label>
         <label for=""><span>面试时间</span><input type="text" placeholder="请输入公司名称"></label>
         <label for=""><span>面试地址</span><input type="text" placeholder="请选择面试地址"></label>
      </form>
      <h3>备注信息</h3>
      <textarea name="" id="" cols="100" rows="0">备注信息(可选，100字以内)</textarea>
      <navigator url="/pages/site/main"> <button>确认</button></navigator>
      
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss" >
   .addtext-warp{
     width: 100%;
     height: 100%;
     h3{
       width: 100%;
       height:80rpx;
       background: rgb(246, 246, 246);
       line-height: 80rpx;
       padding-left:20rpx; 
      
     }
     form{
          label{
            width: 100%;
            padding: 35rpx;
            display: flex;
            padding-left: 20rpx;
            border-bottom: 1px solid rgb(246, 246, 246);
            color: rgb(102, 102, 102);
            span{
              margin-right: 50rpx;
            }
     }
   
    }
    textarea{
      width: 90%;
      height: 200rpx;
      margin: 0 auto;
      border: solid 1px #ccc;
      margin-top: 30rpx;
      padding: 10rpx;
      color: rgb(102, 102, 102);
    }
    button{
        margin-top:20rpx;
        width: 100%;
        height: 80rpx;
        background: rgb(153, 153, 153);
        border-radius: 0;
        color: #fff;
    }
   }
    
</style>

