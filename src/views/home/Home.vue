.<template>
  <div id="home">
    <nav-bar class="home-bar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>

    <scroll class="scroll">
      <swiper :banner="banners"></swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view />
      <tab-control class="tab-control" @tabclick="tabclick"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
  </div>
</template>

<script>
import { getHomeMultidata, goodHomeGoods } from "../../network/home";

import NavBar from "../../components/common/navbar/NavBar";
import GoodsList from "../../components/content/goods/GoodsList";
import Swiper from "./childComponents/Swiper";
import RecommendView from "./childComponents/RecommendView";
import FeatureView from "./childComponents/FeatureView";
import TabControl from "../../components/content/tabControl/TabControl";
import Scroll from "../../components/common/scroll/scorll";

export default {
  components: {
    NavBar,
    Swiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
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
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      if (res == undefined) {
        return;
      } else {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      }
    });
    this.goodHomeGoods("pop");
    this.goodHomeGoods("new");
    this.goodHomeGoods("sell");
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

    goodHomeGoods(type) {
      const page = this.goods[type].page + 1;
      goodHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style >
#home {
  padding-top: 44px;
  height: 100vh;
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
.tab-control {
  position: sticky;
  top: 44px;
}
.scroll {
  height: calc(100% - 49px);
  overflow: hidden;
}

</style>