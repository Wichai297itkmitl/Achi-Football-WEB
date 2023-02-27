<template>
<div class="container">
    <div class="row">
    <div class="col d-flex justify-content-center VueBg py-2">
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
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 py-2">
          <li class="nav-item mx-4">
            <a class="nav-link active" aria-current="page" href="#" style="color: #fff; font-size:28px;"
              >หน้าหลัก</a
            >
          </li>
          <li class="nav-item mx-4">
            <a class="nav-link active" aria-current="page" href="#" style="color: #FFF; font-size:28px;"
              >รองเท้าฟุตซอล</a
            >
          </li>
          <li class="nav-item mx-4">
            <a class="nav-link active" aria-current="page" href="#" style="color: #FFF; font-size:28px;"
              >รองเท้าฟุตซอล</a
            >
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="col mx-3">
          <img src="@/assets/icons/search.svg">
        </div>
        <div class="col mx-3">
          <img src="@/assets/icons/user.svg">
        </div>
        <div class="col mx-3">
          <img src="@/assets/icons/cart.svg">
        </div>
      </div>
    </div>
  </nav>
</template>

// <script>
// export default {
//   data() {
//     return {
//       name: "nav",
//       props: {
//         msg: String,
//       },
//     };
//   },
// };
//
</script>

<style>
</style>