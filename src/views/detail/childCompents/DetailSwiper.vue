<template>
  <div class="item">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="pink">
      <van-swipe-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.my-swipe {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  height: 300px;
  text-align: center;
  background-color: #39a9ed;
}
img {
  width: 100%;
  vertical-align: bottom;
}
</style>>
