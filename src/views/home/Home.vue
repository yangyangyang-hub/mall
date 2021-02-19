<template>
  <div id="home">
    <nav-bar class="home-bar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <swiper :banner="banners"></swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view />
    <tab-control></tab-control>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>00</li>
      <li>9</li>
      <li>9</li>
      <li>9</li>
    </ul>
  </div>
</template>

<script>
import { getHomeMultidata } from "../../network/home";

import NavBar from "../../components/common/navbar/NavBar";
import Swiper from "./childComponents/Swiper";
import RecommendView from "./childComponents/RecommendView";
import FeatureView from "./childComponents/FeatureView";
import TabControl from "../../components/content/tabControl/TabControl";

export default {
  components: {
    NavBar,
    Swiper,
    RecommendView,
    FeatureView,
    TabControl,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      console.log("11111");
      if (res == undefined) {
        return;
      } else {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      }
    });
  },
};
</script>

<style>
#home {
  padding-top: 44px;
}
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