<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="pink">
      <van-swipe-item v-for="(item, index) in banners"  :key="index" >
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </van-swipe-item>


    </van-swipe>
  </div>
</template>

<script>

import {getHomeMultidata} from '../../network/home'
export default {
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(this.banners);
      console.log(this.recommends);
    });
  },
};
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
img {
  width: 100%;
  height: 100%;
  vertical-align: bottom;
}
</style>

