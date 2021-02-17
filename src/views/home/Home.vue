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
import NavBar from '../../components/common/navbar/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style>
.home-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>