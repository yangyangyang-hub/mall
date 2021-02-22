<template>
  <div>
    <van-tabs v-model="currentIndex" animated @click="onClick(currentIndex)">
      <van-tab 
      v-for="(item,index) in titles" 
      :key="index"
      :title="item">
      <slot></slot>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
    data() {
        return {
            titles: ["流行", "新款", "精选"],
            currentIndex: 0,
        }
    },
    methods: {
        onClick(currentIndex) {
            this.$emit('tabclick', currentIndex)
        }
    }
};
</script>

<style>
</style>