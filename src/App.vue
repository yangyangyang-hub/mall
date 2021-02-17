<template>
  <div id="app">
    <tab-bar>

      <tab-bar-item path="/home">
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/1.jpg" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="./assets/img/tabbar/2.jpg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/category">
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/1.jpg" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="./assets/img/tabbar/2.jpg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/cart">
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/1.jpg" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="./assets/img/tabbar/2.jpg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="profile">
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/1.jpg" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="./assets/img/tabbar/2.jpg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from "./components/common/tabbar/TabBar";
import TabBarItem from "./components/common/tabbar/TabBarItem";

export default {
  name: "app",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>