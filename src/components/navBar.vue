<template>
<div class="container py-2">
    <div class="row">
    <div class="col d-flex justify-content-center VueBg">
      <router-link to="/">
        <img src="@/assets/images/logo.png" />
      </router-link>
    </div>
  </div>
</div>

  <nav class="navbar navbar-expand-lg  VueBg">
    <div class="container">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <button
        class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 py-2">
          <li class="nav-item mx-4">
            <router-link to="/" class="nav-link active" aria-current="page" href="#" style="color: #fff; font-size:28px;">หน้าหลัก</router-link>
          </li>
          <li class="nav-item mx-4">
            <!-- <router-link to="/product?p=football" class="nav-link active" aria-current="page" href="#" style="color: #FFF; font-size:28px;">
              รองเท้าฟุตบอล
            </router-link> -->
            <a href="/product?p=football" class="nav-link active" style="color: #FFF; font-size:28px;">รองเท้าฟุตบอล</a>
          </li>
          <li class="nav-item mx-4">
            <!-- <router-link to="/product?p=futsal" class="nav-link active" aria-current="page" href="#" style="color: #FFF; font-size:28px;">
              รองเท้าฟุตซอล
            </router-link> -->
            <a href="/product?p=futsal" class="nav-link active" style="color: #FFF; font-size:28px;">รองเท้าฟุตซอล</a>
           </li>
        </ul>
      </div>
      <!-- <div class="row">
        <div class="col mx-3">
          <img src="@/assets/icons/search.svg">
        </div>
        <div class="col mx-3">
          <img src="@/assets/icons/user.svg">
        </div>
        <div class="col mx-3">
          <img src="@/assets/icons/cart.svg">
        </div>
      </div> -->

      <div class="row">
        <div class="col mx-3 mt-4">
          <a href="#" @click="search = !search;">
            <img src="@/assets/icons/search.svg">
          </a>
        </div>
        <!-- Login dosnt'n has done dropdown element are select Login or Register -->
        <div class="col mb-4" v-if="cart_active">
          <li class="nav-item dropdown ">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="@/assets/icons/user.svg">
            </a>
            <ul class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
              <li >
                <a class="dropdown-item" href="/login" style="background-color: #E0CB0A;"><h2>เข้าสู่ระบบ</h2></a>
                <h4>หรือ</h4>
                <a class="dropdown-item" href="/register" style="background-color: #4DCC4B;"><h2>สมัครสมาชิก</h2></a>
              </li>
              <!-- <li class="dropdown-item disabled"><h4>หรือ</h4></li>
              <li style="background-color: #4DCC4B;"><a class="dropdown-item" href="/register" ><h2>สมัครสมาชิก</h2></a></li> -->
            </ul>
          </li>
        </div>

        <!-- Login has done ! -->
        <div class="col mb-4" v-if="cart_active == false">
          <li class="nav-item dropdown ">
              <a class="nav-link dropdown-toggle d-flex" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="@/assets/icons/user.svg" >
                <h5 style="color:aliceblue" class="mt-2 mx-1">{{ username }}</h5>
              </a>
              <!-- <a class="nav-link dropdown-toggle" style="font-size: 18px; color: aliceblue;" href="#" id="navbarDropdown" 
                role="button" data-bs-toggle="dropdown" aria-expanded="false"> </a>-->
              
            <ul class="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
              <li><h3><a href="/account-information" class="modi-a">บันชีของฉัน</a></h3></li>
              <li><h3><a href="/order_his" class="modi-a">ประวัติการสั่งซื้อ</a></h3></li>
              <li><h3><a href="/pro_star" class="modi-a">สินค้าที่สนใจ</a></h3></li>
              <li><h3><a :href="url" @click="log_out()" class="" style="color: #E7CB0A;">ออกจากระบบ</a></h3></li>
            </ul>
          </li>
        </div>

        <div class="col mt-4 d-flex" v-if="cart_active == false">
          <a href="/cart" @click="cart_number_no_look = 0">
            <img src="@/assets/icons/cart.svg">
          </a>
          <div class="numCart text-center">
            <h3>{{ cartNum }}</h3>
          </div>
          
        </div>

        <!-- Login ? -->
        <div class="col mb-4" v-if="cart_active">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="@/assets/icons/cart.svg">
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><p style="font-size: 18px; "> กรุณาเข้าสู้ระบบเพื่อใช้งานตระกร้าสินค้า</p> 
                <a class="dropdown-item" href="/login" style="background-color: #E0CB0A;"><h4>เข้าสู่ระบบ</h4></a>
              </li>
            </ul>
          </li>
        </div>
        <!-- if login have done this emlement on above not display-->
      </div>

    </div>
  </nav>
  <div class="container modal-login" v-show="search">
    <div class="row py-4">
      <div class="col text-center">
        <h1>ยินดีต้นรับคุณสามารถค้นหาสินค้าภายในเว็บไซต์ได้ง่ายๆเพียงกรอกคำค้นหา</h1>
      </div>
    </div>
    <div class="row mx-4">
      <div class="col-12 py-4 d-flex justify-content-center">
        <input class="form-control form-control-lg mx-4" type="text" placeholder="พิมพ์ข้อความที่ต้องการค้นหา" aria-label=".form-control-lg example">
        <button type="button" class="btn btn-warning btn-lg">ค้นหาสินค้า</button>
      </div>
    </div>
  </div>

</template>

<script>
console.log(window.location.href);

export default {
  data() {
    return {
      search: false,
      username: '',
      url: window.location.href,
      cart_number_no_look: 2,
    };
  },
  computed:{
    cart_active(){
      if (!this.username)
        return true
      else
        return false
    },
    cartNum(){
      return this.cart_number_no_look;
    }
  },
  methods:{
    log_out(){
      localStorage.removeItem('username');
      localStorage.removeItem('user_id');
      this.username = '';
    }
  },
  created(){
    try{
      this.username = localStorage.getItem('username');
      console.log(this.username);
    }catch(err){
      this.username = '';
    }
  }
};

</script>

<style scoped>

  .modal-login{
    color: antiquewhite;
    position: relative;
    background-color: #504E4E;
  }

  .modi-a{
    color: aliceblue;
    text-decoration: none;
  }
  .modi-a:hover{
    color: rgb(255, 197, 60);
  }
  .dropdown-menu {
    width: 220px !important;
    padding: 15px !important;
    /* height: 300px !important; */
}

.numCart{
  width: 2rem;
  height: 2.2rem;
  color: aliceblue;
  background-color: rgb(230, 164, 0);
  border-radius: 50%;
}
</style>