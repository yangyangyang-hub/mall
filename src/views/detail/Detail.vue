<template>
  <div>
      {{id}}
  </div>
</template>

<script>
export default {
    data() {
        return {
            id: null
        }
    },
    created() {
        this.id = this.$route.query.id
        console.log(this.$route.query);
    }
}
</script>

<style lang="less" scoped>

</style>>