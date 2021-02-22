<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
    >
      <div class="goods">
        <goods-list-item
          v-for="(item, index) in goods"
          :goods-item="item"
          :key="index"
        ></goods-list-item>
      </div>
    </van-list>
  </div>
</template>

<script>
import GoodsListItem from "../../../components/content/goods/GoodsListItem";

export default {
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      page: 1,
    };
  },
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
    goodsName: {},
  },
  mounted() {
    window.addEventListener("scroll", this.handlePage);
  },
  methods: {
    handlePage() {
      if (this.page >= 5) {
          this.finished = true;
          this.$toast("没有更多内容了");
        }
    },
    onLoad() {
      this.$emit("onLoad", this.goodsName);
      this.page += 1;
      console.log(this.page);
      setTimeout(() => {
        this.loading = false;

        if (this.page >= 5) {
          this.finished = true;
          this.$toast("没有更多内容了");
        }
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}
</style>>
