<template>

  <div class="container-fluid py-3 v_bg">
    <div class="row">
      <div class="col d-flex justify-content-center">
        <a href="#" @click="go()"><img src="@/assets/logo.png" alt="" width="120"></a>
      </div>
    </div>
    <router-view v-if="login"></router-view>
    <Login v-else></Login>
  </div>

  <Product v-if="fales">
  </Product>
  
  
</template>

<script>

import Product from './data_json/product.js';
import Login from './components/Login-employee_page.vue';

// function read(){
//   let re = localStorage.getItem("product_key");
//   console.log(re);
// }

export default {
  name: 'App',
  components: {
    Login,
    Product
  },
  data(){
    return{
      login: true,
      prd: Product,
      product_info:JSON.parse(localStorage.getItem("product_key")) 
    }
  },
  created() {
    console.log();
      localStorage.setItem("product_key", JSON.stringify(this.prd));
      
  },
  methods:{
      go(){
      let re = localStorage.getItem("product_key");
      console.log(123);
      console.log(JSON.parse(re));
    }
    
  }
}
</script>

<style>
  .v_bg{
    background-color: #2C2C2C;
  }
</style>
