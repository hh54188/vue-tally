<template>
    <div>{{count}}</div>
</template>

<script>
export default {
  name: 'Count',
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
