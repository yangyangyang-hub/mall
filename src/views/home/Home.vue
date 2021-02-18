<template>
  <div>
      <nav-bar class="home-bar">
        <template v-slot:center>
          <div>购物街</div>
        </template>
      </nav-bar>
      <swiper :banner="banners"></swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view/>
  </div>
</template>

<script>

import {getHomeMultidata} from '../../network/home'

import NavBar from '../../components/common/navbar/NavBar'
import Swiper from './childComponents/Swiper'
import RecommendView from './childComponents/RecommendView'
import FeatureView from './childComponents/FeatureView'


export default {
  components: {
    NavBar,
    Swiper,
    RecommendView,
    FeatureView,
  },
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
    });
  },
}
</script>

<style>
.home-bar {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>