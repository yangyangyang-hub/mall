<template>
  <div>
      <nav-bar class="home-bar">
        <template v-slot:center>
          <div>购物街</div>
        </template>
      </nav-bar>
  </div>
</template>

<script>

import {getHomeMultidata} from '../../network/home'
import NavBar from '../../components/common/navbar/NavBar'
console.log(getHomeMultidata());

export default {
  components: {
    NavBar
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style>
.home-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>