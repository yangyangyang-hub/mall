<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物车({{$store.state.cartList.length}})</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="less" scoped>
.cart {
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
}
</style>>