<template>
  <div class ="title" id="t">
    <div class="nav">
      <nav-bar>
      <template v-slot:left> 
        <div class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template v-slot:center>
        <span
          v-for="(item, index) in titles"
          :key="index"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </span>
      </template>
    </nav-bar>
    </div>
    
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";

export default {
  data() {
    return {
      currentIndex: 0,
      titles: ["商品", "参数", "评论", "推荐"],
    };
  },
  components: {
    NavBar,
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
      console.log(location);
    }
  },
};
</script>

<style lang="less" scoped>
#t {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: white;
}
.title-item {
  margin: 0 10px 0 10px;
  font-size: 13px;
}
.active {
  color: var(--color-high-text);
}
.back {
  // margin-top: 8px;
  width: 15px;
  height: 15px;
}
</style>>