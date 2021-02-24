<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages" />
    <detail-base-info v-if="initSuccess" :goods="goodsInfo"></detail-base-info>
    {{ id }}
    <div class="foot"></div>
  </div>
</template>

<script>
import { getDetail, Goods } from "../../network/detail";

import DetailNavBar from "./childCompents/DetailNavBar";
import DetailSwiper from "./childCompents/DetailSwiper";
import DetailBaseInfo from './childCompents/DetailBaseInfo'

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  data() {
    return {
      id: null,
      titles: ["商品", "参数", "评论", "推荐"],
      topImages: [],
      goodsInfo: {},
      initSuccess: false,
    };
  },
   methods: {
      initSlot() {
        setTimeout(()=> {
          this.initSuccess = true;
        }, (Number(this.time || 0)));
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
        this.initSuccess = true
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