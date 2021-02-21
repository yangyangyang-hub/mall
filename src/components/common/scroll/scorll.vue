<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);

export default {
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.initBscroll();

    console.log(this.scroll);
  },
  methods: {
    initBscroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        pullUpLoad: true,
        click: true,  
      });
      this.scroll.on("pullingUp", this.pullingUpHandler)      
    },

    pullingUpHandler () {
        console.log(1);
        this.scroll.finishPullUp()
        this.scroll.refresh()
      },
  },
};
</script>

<style>
</style>