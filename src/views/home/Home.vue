<template>
  <keep-alive>
    <div id="home">
      <nav-bar class="home-bar">
        <template v-slot:center>
          <div>购物街</div>
        </template>
      </nav-bar>
      <swiper :banner="banners"></swiper>
      <!-- 轮播图 -->
      <recommend-view :recommends="recommends"></recommend-view>
      <!-- 推荐 -->
      <feature-view />

      <tab-control @tabclick="tabclick">
        <vant-scroll
          :goods="goods[currentType].list"
          :goodsName="currentType"
          @onLoad="getHomeGoods"
        >
        </vant-scroll>
      </tab-control>

      <div @click="backTop">
        <back-top v-show="isShow"></back-top>
      </div>
      <div class="foot"></div>
    </div>
  </keep-alive>
</template>

<script>
import { getHomeMultidata, goodHomeGoods } from "../../network/home";

import NavBar from "../../components/common/navbar/NavBar";
import GoodsList from "../../components/content/goods/GoodsList";
import Swiper from "./childComponents/Swiper";
import RecommendView from "./childComponents/RecommendView";
import FeatureView from "./childComponents/FeatureView";
import BackTop from "../../components/content/backTop/backTop";
import TabControl from "../../components/content/tabControl/TabControl";
import VantScroll from "./childComponents/VantScroll";

export default {
  components: {
    NavBar,
    Swiper,
    RecommendView,
    FeatureView,
    GoodsList,
    BackTop,
    TabControl,
    VantScroll,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
      scrollTop: 0,
    };
  },
  destroyed() {
    console.log("被销毁了");
  },
  created() {
    getHomeMultidata().then((res) => {
      //所有获取数据
      if (res == undefined) {
        return;
      } else {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      }
    });

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    // this.contentScroll()
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    tabclick(index) {
      if (index == 0) {
        this.currentType = "pop";
      } else if (index == 1) {
        this.currentType = "new";
      } else {
        this.currentType = "sell";
      }
    },

    async getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      await goodHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },

    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (this.scrollTop < 500) {
        this.isShow = false;
      }
      if (this.scrollTop >= 500) {
        this.isShow = true;
      }
    },
  },
};
</script>

<style >
#home {
  padding-top: 44px;
  height: calc(100vh - 49px);
  /* overflow: hidden; */
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
.foot {
  width: 100%;
  height: 49px;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>