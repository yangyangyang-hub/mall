<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleclick" />
    <detail-swiper :topImages="topImages" />
    <detail-base-info v-if="initSuccess" :goods="goodsInfo"></detail-base-info>
    <detail-shop-info v-if="initSuccess" :shop="shopInfo"></detail-shop-info>

    <detail-image-info v-if="initSuccess" :detailInfo="detailInfo" />

    <detail-params-info
      ref="params"
      v-if="initSuccess"
      :paramInfo="itemParams"
    />

    <detail-comment-info
      ref="comment"
      v-if="initSuccess"
      :commentInfo="commentInfo"
    />

    <detail-recommend ref="recommend" v-if="initRecommend" :goods="recommend" />
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>

    <div class="foot"></div>
  </div>
</template>

<script>
import { getDetail, Goods, getRecommend } from "../../network/detail";

import DetailNavBar from "./childCompents/DetailNavBar";
import DetailSwiper from "./childCompents/DetailSwiper";
import DetailBaseInfo from "./childCompents/DetailBaseInfo";
import DetailShopInfo from "./childCompents/DetailShopInfo";
import DetailImageInfo from "./childCompents/DetailImageInfo";
import DetailParamsInfo from "./childCompents/DetailParamsInfo";
import DetailCommentInfo from "./childCompents/DetailCommetInfo";
import DetailRecommend from "./childCompents/DetailRecommend"
import DetailBottomBar from './childCompents/DetailBottomBar'

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailRecommend,
    DetailBottomBar,

  },
  data() {
    return {
      id: null,
      titles: ["商品", "参数", "评论", "推荐"],
      topImages: [],
      goodsInfo: {},
      initSuccess: false,
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommend: {},
      initRecommend: false,
      paramsTopYs: 0,
      commentTopYs: 0,
      recommendTopYs: 0,
    };
  },
  methods: {
    initSlot() {
      setTimeout(() => {
        this.initSuccess = true;
      }, Number(this.time || 0));
    },
    titleclick(index) {
      if (index == 3) {
      // const that = this;
      // let timer = setInterval(() => {
      //   let ispeed = Math.floor(-that.$refs.recommend.$el.offsetTop / 5);
      //   console.log(ispeed);
        // if(this.$refs.recommend.$el.offsetTop ==
        // document.documentElement.scrollTop + ispeed) {
        //   console.log('nih');
        //   clearInterval(timer);
        // }
        

        // if (that.scrollTop === 0) {
        //   clearInterval(timer);
        // }
      // }, 16);

        this.recommendTopYs = 0;
        this.recommendTopYs = this.$refs.recommend.$el.offsetTop - 40;
        window.scrollTo(0, this.recommendTopYs);
      // console.log(this.$refs.recommend.$el.offsetTop);
      // console.log(document.documentElement.scrollTop);

      } else if (index == 2) {
        this.commentTopYs = 0;
        this.commentTopYs = this.$refs.comment.$el.offsetTop;
        window.scrollTo(0, this.commentTopYs);
      } else if (index == 1) {
        this.recommendTopYs = 0;
        this.paramsTopYs = this.$refs.params.$el.offsetTop;
        window.scrollTo(0, this.paramsTopYs-40);
      } else {
         window.scrollTo(0, 0);
      }
    },
    addToCart() {
      const product ={}
      product.image = this.topImages[0]
      product.title = this.goodsInfo.title
      product.desc = this.goodsInfo.desc
      product.price = this.goodsInfo.price
      product.id = this.id

      this.$store.commit('addCart', product )
    }
  },

  created() {
    this.id = this.$route.query.id;

    getDetail(this.id).then((res) => {
      const data = res.result;
      console.log(data);

      this.topImages = data.itemInfo.topImages;

      this.goodsInfo = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services,
        data.skuInfo.title
      );

      if (this.goodsInfo.price) {
        this.initSuccess = true;
      }

      this.shopInfo = data.shopInfo;
      this.detailInfo = data.detailInfo;
      this.itemParams = data.itemParams;

      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    getRecommend().then((res) => {
      this.recommend = res;
      console.log(this.recommend);
      if (this.recommend.data) {
        this.initRecommend = true;
      }
    });
  },
};
</script>

<style lang="less" scoped>
#detail{
position: relative;
z-index: 10;  
// background-color: pink !important;
}
.foot {
  width: 100%;
  height: 49px;
}
</style>>