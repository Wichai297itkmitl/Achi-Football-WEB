<template>
  <div class="container-fluid">
      <navBar></navBar>
      <router-view></router-view>
      <br>
  </div>
  <Footer></Footer>

  <Chart v-if="false"></Chart>
  <Order v-if="false"></Order>
</template>


<script>
import navBar from './components/navBar.vue'
import Footer from './components/Achi-Footer.vue'
import Chart from '@/assets/data_json/chart.js'
import Order from '@/assets/data_json/orders.js'
// import Product from '../data_json/product'
export default {
  name: 'App',
  components: {
    navBar,
    Footer,
    Chart,
    Order

  },
  data(){
    return{
      chart:Chart,
      order:Order,
      chart_info:JSON.parse(localStorage.getItem("chart_key")),
      order_info:JSON.parse(localStorage.getItem("order_key"))
    }
  },
  created(){
      localStorage.setItem("chart_key",JSON.stringify(this.chart));
      localStorage.setItem("order_key",JSON.stringify(this.order));
    },

    methods:{
      
    }
}
</script>

<style>
.VueBg {
  background: #1a1818;
}

</style>