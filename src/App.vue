<template>
  <div id="app">
		<navbar/>
    <home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import navbar from './components/Navbar.vue'
import home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    navbar,
		home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
