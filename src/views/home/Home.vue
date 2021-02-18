<template>
  <div>
      <nav-bar class="home-bar">
        <template v-slot:center>
          <div>购物街</div>
        </template>
      </nav-bar>
      <swiper></swiper>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import Swiper from './Swiper'


export default {
  components: {
    NavBar,
    Swiper
  },
}
</script>

<style>
.home-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>