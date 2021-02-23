<template>
  <div class=".title">
    <nav-bar>
        <template v-slot:center>
          <span v-for="(item, index) in titles" :key="index" class="title-item">
            {{ item }}
          </span>
        </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";

export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
    };
  },
  components: {
    NavBar,
  },
};
</script>

<style lang="less" scoped>
.title-item {
    margin: 0 5px 0 5px;
    font-size: 13px;
}
</style>>