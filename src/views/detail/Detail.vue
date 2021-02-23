<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    {{ id }}
  </div>
</template>

<script>
import {getDetail} from '../../network/detail'
import DetailNavBar from "./childCompents/DetailNavBar";

export default {
  components: {
    DetailNavBar,
  },
  data() {
    return {
      id: null,
      titles: ["商品", "参数", "评论", "推荐"],
    };
  },
  created() {
    this.id = this.$route.query.id;
    console.log(this.id);
    console.log(getDetail);

    getDetail(this.id).then(res => {
      console.log(res);
    })
  },
};
</script>

<style lang="less" scoped>
</style>>