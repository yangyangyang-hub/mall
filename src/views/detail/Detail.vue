<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages" />
    {{ id }}
  </div>
</template>

<script>
import { getDetail, Goods } from "../../network/detail";

import DetailNavBar from "./childCompents/DetailNavBar";
import DetailSwiper from "./childCompents/DetailSwiper";

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
  },
  data() {
    return {
      id: null,
      titles: ["商品", "参数", "评论", "推荐"],
      topImages: [],
      goodsInfo: {},
    };
  },
  created() {
    this.id = this.$route.query.id;

    getDetail(this.id).then((res) => {
      const data = res.result;

      this.topImages = data.itemInfo.topImages;

      this.goodsInfo = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
    });

  },
};
</script>

<style lang="less" scoped>
</style>>