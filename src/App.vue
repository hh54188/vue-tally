<template>
  <div id="app">
    <Count />
    <button v-on:click="addCount()">Add</button>
    <button v-on:click="minusCount()">Minus</button>
  </div>
</template>

<script>
import Count from './components/Count.vue';

export default {
  name: 'App',
  components: {
    Count
  },
  methods: {
    addCount() {
      this.$store.dispatch('add');
    },
    minusCount() {
      this.$store.dispatch('minus');
    }
  }
}
</script>

<style>
</style>
