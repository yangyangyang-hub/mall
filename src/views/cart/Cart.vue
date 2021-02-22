<template>
  <div class="gotop" v-if="showgo">
    <button @click="gotop">top</button>
    <button @click="gobottom">bottom</button>
  </div>
</template>

<script>
export default {
 data() {
            return {
                showgo: false
            }
        },
        mounted() {
            var vm = this;
            window.onscroll = function() {
                if (document.documentElement.scrollTop > 300) {
                    vm.showgo = true;
                } else {
                    vm.showgo = false;
                }
            }
        }
 
};
</script>

<style>
</style>