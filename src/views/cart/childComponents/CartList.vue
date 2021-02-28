<template>
  <div>
      <cart-list-item v-for="item in $store.state.cartList" :key="item.id" :item-info="item"></cart-list-item>
    </div>
</template>

<script>
import CartListItem from './CartListItem'
export default {
components: {
		CartListItem
    },
}
</script>

<style>

</style>