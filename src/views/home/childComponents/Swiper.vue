<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="pink">
      <van-swipe-item v-for="(item, index) in banner"  :key="index" >
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </van-swipe-item>


    </van-swipe>
  </div>
</template>

<script>


export default {
  props: ['banner']
};
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
img {
  width: 100%;
  height: 100%;
  vertical-align: bottom;
}
</style>

