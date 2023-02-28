<template>
  <div class="container-fluid">
      <navBar></navBar>
      <router-view></router-view>
      <br>
  </div>
  <Footer></Footer>
</template>

<script>
import navBar from './components/Customers/navBar.vue'
import Footer from './components/Customers/Achi-Footer.vue'

export default {
  name: 'App',
  components: {
    navBar,
    Footer,
  }
}
</script>

<style>
.VueBg {
  background: #1a1818;
}

</style>