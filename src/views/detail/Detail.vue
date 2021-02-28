<template>
  <div class="detail">
    <detail-nav-bar @titleClick="titleclick" />
    <detail-swiper :topImages="topImages" />
    <detail-base-info v-if="initSuccess" :goods="goodsInfo"></detail-base-info>
    <detail-shop-info v-if="initSuccess" :shop="shopInfo"></detail-shop-info>

    <detail-image-info
      v-if="initSuccess"
      :detailInfo="detailInfo"
    ></detail-image-info>
    <detail-params-info
      v-if="initSuccess"
      :paramInfo="itemParams"
    ></detail-params-info>
    <detail-comment-info
      v-if="initSuccess"
      :commentInfo="commentInfo"
    ></detail-comment-info>
    <detail-recommend v-if="initRecommend" :goods="recommend" />

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
import DetailRecommend from "./childCompents/DetailRecommend";

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
    };
  },
  methods: {
    initSlot() {
      setTimeout(() => {
        this.initSuccess = true;
      }, Number(this.time || 0));
    },
    titleclick(index) {
      const that = this;
      console.log(document.body.scrollTop);
      // let timer = setInterval(() => {
      //   document.documentElement.scrollTop = document.body.scrollTop 
      // , 16);
    },
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
.foot {
  width: 100%;
  height: 49px;
}
</style>>