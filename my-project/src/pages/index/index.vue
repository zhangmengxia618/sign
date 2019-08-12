<template>
    <div class="home">
        <div class="map">
            <map 
                id="map"
                show-location
                :markers="markers"
                :longitude="longitude"
                :latitude="latitude"
                :reLocation="reLocation"
               ></map>
        </div>
        <cover-view class="location" @click="location">
            ◎
        </cover-view>
        <navigator url="/pages/personage/main"> 
        <span class="qDl">
            →
            </span>
            </navigator>
        <navigator url="/pages/addText/main">  
           <div class="add">添加面试</div>
        </navigator>
      
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
             markers:[],
             // 用户当前位置
      reLocation: false,
        }
    },
    computed:{
        ...mapState({
              longitude: state=>state.home.longitude,
              latitude: state=>state.home.latitude,
        })
    },
    methods:{
          ...mapActions({
              location:'home/getLocation'
          })
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
 .home{
     width: 100%;
     height: 100%;
     display: flex;
      flex-direction: column;
      overflow: hidden;
      .map{
          flex: 1;
          map{
              width: 100%;
              height: 100%;
          }
      }
      .location{
        position: fixed;
        bottom: 70rpx;
        left: 12rpx;
        font-size: 150rpx;
        color: blue;
        }
     .qDl{
            position: fixed;
        bottom: 106rpx;
        right: 220rpx;
         display: flex;
         width: 100rpx;
         height: 100rpx;
         line-height: 100rpx;
         color: blue;
          font-size: 100rpx;
     } 
     .add{
         width: 100%;
         height: 100rpx;
         background: #000;
         color: #fff;
         text-align: center;
         font-size: 40rpx;
         line-height: 100rpx;
         z-index: 99;
     }
    
 }


</style>