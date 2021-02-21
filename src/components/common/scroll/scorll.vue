<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from "@better-scroll/core";
// import Pullup from "@better-scroll/pull-up";
// BScroll.use(Pullup);

export default {
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {

      })
      console.log(this.scroll);
  },
};
</script>

<style>

</style>