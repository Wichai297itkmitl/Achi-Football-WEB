<template>

  <div class="container-fluid py-3 v_bg">
    <div class="row">
      <div class="col d-flex justify-content-center">
        <a href="/"><img src="@/assets/logo.png" alt="" width="120"></a>
      </div>
    </div>
    <router-view v-if="login"></router-view>
    <Login v-else></Login>
  </div>

  
</template>

<script>
import Login from './components/Login-employee_page.vue'

export default {
  name: 'App',
  components: {
    Login
  },
  data(){
    return{
      login: true
    }
  }
}
</script>

<style>
  .v_bg{
    background-color: #2C2C2C;
  }
</style>
