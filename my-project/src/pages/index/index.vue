<template>
  <div class="wrap">
    <map
      id="map"
      show-location
      show-compass="true"
      enable-rotate="true"
      :markers="markers"
      :longitude="longitude"
      :latitude="latitude"
    ></map>
    <cover-view class="location" @click="location">
      <cover-image src="../../images/location.png" />
    </cover-view>
    <cover-view class="person" @click="person">
      <button>我的</button>
    </cover-view>
    <button @click="addInterview" class="addInterview">添加面试</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      markers: []
    };
  },

  computed: {
    ...mapState({
      longitude: state => state.home.longitude,
      latitude: state => state.home.latitude
    })
  },

  methods: {
    ...mapActions({
       location: "home/getLocation"
    }),
    addInterview() {
      wx.navigateTo({
        url: "/pages/addinterview/main"
      });
    },
    person() {
      wx.navigateTo({url:"/pages/personalCenter/main"})
    }
  },

  created() {
    // let app = getApp()
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

map {
  width: 100%;
  flex: 1;
}
.addInterview {
  width: 100%;
  height: 88rpx;
  color: white;
  background: black;
  border-radius: 0;
}
.location {
  width: 80rpx;
  position: fixed;
  left: 60rpx;
  bottom: 100rpx;
}
.person {
  width: 80rpx;
  position: fixed;
  right: 60rpx;
  bottom: 100rpx;

}
</style>
