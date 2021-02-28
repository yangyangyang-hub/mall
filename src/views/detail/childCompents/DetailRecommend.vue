<template>
  <div class="goods">
    <div
      class="goods-item"
      v-for="(item, index) in goods.data.list"
      :key="index">
      <div class="goods-item-img">
        <img :src="item.image" alt="" />
      </div>

      <div class="goods-info">
        <p>{{ item.title }}</p>
        <span class="price">￥{{ item.price }}</span>
        <span class="collect">{{ item.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {
      console.log(this.goods);
  }
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}
.goods-item {
  padding-bottom: 20px;
  position: relative;
  width: 45%;
  margin: 6px 6px 0 6px;
}

.goods-item-img {
  height: 153px;
  overflow: hidden;
  border-radius: 5px;
}

goods-item img {
  width: 100%;
  height: 230px;
}

.goods-info p {
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>