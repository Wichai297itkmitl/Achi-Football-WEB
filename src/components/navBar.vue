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
        <div class="col mb-4">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="@/assets/icons/user.svg">
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li style="background-color: #E0CB0A;"><a class="dropdown-item" href="/login"><h2>เข้าสู่ระบบ</h2></a></li>
              <li class="dropdown-item disabled"><h4>หรือ</h4></li>
              <li style="background-color: #4DCC4B;"><a class="dropdown-item" href="#" ><h2>สมัครสมาชิก</h2></a></li>
            </ul>
          </li>
        </div>
        <div class="col mx-2 mt-4">
          <a href="#" >
            <img src="@/assets/icons/cart.svg">
          </a>
        </div>
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

// <script>
export default {
  data() {
    return {
      search: false,
    };
  },
};

</script>

<style>

  .modal-login{
    color: antiquewhite;
    position: relative;
    background-color: #504E4E;
  }
</style>