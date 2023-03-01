<template>
<head>
    <title>
        {{title}}
    </title>
</head>
  <div class="container py-4 VueBg">

    <div class="row">
        <!-- select to Show -->
        <div class="col-2 border-end">
            <!-- Brand -->
            <div class="row" style="color:#fff">
                <div class="col">
                    <h4>ยี่ห้อสินค้า</h4>
                    <div class="form-check" v-for="(item, index) in brand" :key="index">
                        <input class="form-check-input" type="checkbox" :value="item" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            {{item}}
                        </label>
                    </div>
                    <hr>
                </div>
            </div>
            <div class="row" style="color:#fff">
                <div class="col ">
                    <div class="size_title d-flex">
                        <h4>ไซต์</h4>
                        <select class="mx-4" aria-label="Default select example">
                            <option selected value="EUR">EUR</option>
                            <option value="US">US</option>
                            <option value="UK">UK</option>
                            <option value="CM">CM</option>
                        </select>
                    </div>
                    <div class="checksize">
                        <div class="form-check" v-for="(item, index) in size" :key="index">
                            <input class="form-check-input" type="checkbox" :value="item" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                {{item}}
                            </label>
                        </div>
                    </div>

                    <hr>
                </div>
            </div>
            <div class="row" style="color:#fff">
                <div class="col">
                    <h4>สี</h4>
                    <div class="form-check" v-for="(item, index) in color" :key="index">
                        <input class="form-check-input" type="checkbox" :value="item" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            {{item}}
                        </label>
                    </div>
                    <hr>
                </div>
            </div>
            <div class="row" style="color:#fff">
                <div class="col">
                    <h4>ราคา</h4>
                    <div class="py-1">
                        <label for="customRange3" class="form-label">ราคาต่ำสุด {{ min_price }} </label>
                        <input type="range" class="form-range" min="0" max="30000" step="100" v-model="min_price">
                    </div>
                    <div class="py-1">
                        <label for="customRange3" class="form-label">ราคาสูงสุดสุด {{ max_price }}</label>
                        <input type="range" class="form-range" min="0" max="30000" step="100" id="customRange3" v-model="max_price">
                    </div>
                </div>
            </div>
        </div>

        <!-- show product -->
        <div class="col-10">
            <!-- Header show product -->
            <div class="row" style="color: #fff">
                <div class="col d-flex">
                    <h1>{{title}} (99 item)</h1> 
                    <div class="sort mt-2 mx-4">
                        <h2>เรียงตาม :</h2>
                    </div>
                    <div class="select_sort mt-2">
                        <select name="" id="" class="form-select">
                            <option selected value="A_Z">เรียงตามชื่อ A-z</option>
                            <option value="z-A">เรียงตามชื่อ Z-A</option>
                            <option value="min_to_max">เรียงตามราคา น้อย-มาก</option>
                            <option value="max_to_min">เรียงตามราคา มาก-น้อย</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- List_product -->
            <div class="row py-2">
                <div class="col-3 mx-3 py-3">
                  <div class="card bg-dark " style="width: 18rem; height: ; ">
                    <img
                      src="https://lzd-img-global.slatic.net/g/p/9a761cd5dc6b4456fd80bed73d8921ea.jpg_720x720q80.jpg_.webp"
                      class=""
                      alt="..."
                      width="100%" height="280px"
                    />
                    <div class="card-body text-start" style="color:#fff; width: 18rem; height: 12rem;">
                      <h5 class="card-title">ADIDAS</h5>
                      <p class="card-text"> ADIDAS X SPEEDPORTAL MESSI .1 FG - TMSOOR/MINRUS/CBLACK</p>
                      <h3 >8,500.00 THB</h3>
                      <div class="star text-end">
                        <span>
                          <i class="bi bi-star" style="font-size:24px;"></i>
                          <!-- text-warning -->
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-3 mx-3 py-3">
                  <div class="card bg-dark " style="width: 18rem; height: ; ">
                    <img
                      src="https://lzd-img-global.slatic.net/g/p/9a761cd5dc6b4456fd80bed73d8921ea.jpg_720x720q80.jpg_.webp"
                      class=""
                      alt="..."
                      width="100%" height="280px"
                    />
                    <div class="card-body text-start" style="color:#fff; width: 18rem; height: 12rem;">
                      <h5 class="card-title">ADIDAS</h5>
                      <p class="card-text"> ADIDAS X SPEEDPORTAL MESSI .1 FG - TMSOOR/MINRUS/CBLACK</p>
                      <h3 >8,500.00 THB</h3>
                      <div class="star text-end">
                        <span>
                          <i class="bi bi-star" style="font-size:24px;"></i>
                          <!-- text-warning -->
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-3 mx-3 py-3">
                  <div class="card bg-dark " style="width: 18rem; height: ; ">
                    <img
                      src="https://lzd-img-global.slatic.net/g/p/9a761cd5dc6b4456fd80bed73d8921ea.jpg_720x720q80.jpg_.webp"
                      class=""
                      alt="..."
                      width="100%" height="280px"
                    />
                    <div class="card-body text-start" style="color:#fff; width: 18rem; height: 12rem;">
                      <h5 class="card-title">ADIDAS</h5>
                      <p class="card-text"> ADIDAS X SPEEDPORTAL MESSI .1 FG - TMSOOR/MINRUS/CBLACK</p>
                      <h3 >8,500.00 THB</h3>
                      <div class="star text-end">
                        <span>
                          <i class="bi bi-star" style="font-size:24px;"></i>
                          <!-- text-warning -->
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-3 mx-3 py-3">
                  <div class="card bg-dark " style="width: 18rem; height: ; ">
                    <img
                      src="https://lzd-img-global.slatic.net/g/p/9a761cd5dc6b4456fd80bed73d8921ea.jpg_720x720q80.jpg_.webp"
                      class=""
                      alt="..."
                      width="100%" height="280px"
                    />
                    <div class="card-body text-start" style="color:#fff; width: 18rem; height: 12rem;">
                      <h5 class="card-title">ADIDAS</h5>
                      <p class="card-text"> ADIDAS X SPEEDPORTAL MESSI .1 FG - TMSOOR/MINRUS/CBLACK</p>
                      <h3 >8,500.00 THB</h3>
                      <div class="star text-end">
                        <span>
                          <i class="bi bi-star" style="font-size:24px;"></i>
                          <!-- text-warning -->
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-3 mx-3 py-3">
                  <div class="card bg-dark " style="width: 18rem; height: ; ">
                    <img
                      src="https://lzd-img-global.slatic.net/g/p/9a761cd5dc6b4456fd80bed73d8921ea.jpg_720x720q80.jpg_.webp"
                      class=""
                      alt="..."
                      width="100%" height="280px"
                    />
                    <div class="card-body text-start" style="color:#fff; width: 18rem; height: 12rem;">
                      <h5 class="card-title">ADIDAS</h5>
                      <p class="card-text"> ADIDAS X SPEEDPORTAL MESSI .1 FG - TMSOOR/MINRUS/CBLACK</p>
                      <h3 >8,500.00 THB</h3>
                      <div class="star text-end">
                        <span>
                          <i class="bi bi-star" style="font-size:24px;"></i>
                          <!-- text-warning -->
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-3 mx-3 py-3">
                  <div class="card bg-dark " style="width: 18rem; height: ; ">
                    <img
                      src="https://lzd-img-global.slatic.net/g/p/9a761cd5dc6b4456fd80bed73d8921ea.jpg_720x720q80.jpg_.webp"
                      class=""
                      alt="..."
                      width="100%" height="280px"
                    />
                    <div class="card-body text-start" style="color:#fff; width: 18rem; height: 12rem;">
                      <h5 class="card-title">ADIDAS</h5>
                      <p class="card-text"> ADIDAS X SPEEDPORTAL MESSI .1 FG - TMSOOR/MINRUS/CBLACK</p>
                      <h3 >8,500.00 THB</h3>
                      <div class="star text-end">
                        <span>
                          <i class="bi bi-star" style="font-size:24px;"></i>
                          <!-- text-warning -->
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-3 mx-3 py-3">
                  <div class="card bg-dark " style="width: 18rem; height: ; ">
                    <img
                      src="https://lzd-img-global.slatic.net/g/p/9a761cd5dc6b4456fd80bed73d8921ea.jpg_720x720q80.jpg_.webp"
                      class=""
                      alt="..."
                      width="100%" height="280px"
                    />
                    <div class="card-body text-start" style="color:#fff; width: 18rem; height: 12rem;">
                      <h5 class="card-title">ADIDAS</h5>
                      <p class="card-text"> ADIDAS X SPEEDPORTAL MESSI .1 FG - TMSOOR/MINRUS/CBLACK</p>
                      <h3 >8,500.00 THB</h3>
                      <div class="star text-end">
                        <span>
                          <i class="bi bi-star" style="font-size:24px;"></i>
                          <!-- text-warning -->
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-3 mx-3 py-3">
                  <div class="card bg-dark " style="width: 18rem; height: ; ">
                    <img
                      src="https://lzd-img-global.slatic.net/g/p/9a761cd5dc6b4456fd80bed73d8921ea.jpg_720x720q80.jpg_.webp"
                      class=""
                      alt="..."
                      width="100%" height="280px"
                    />
                    <div class="card-body text-start" style="color:#fff; width: 18rem; height: 12rem;">
                      <h5 class="card-title">ADIDAS</h5>
                      <p class="card-text"> ADIDAS X SPEEDPORTAL MESSI .1 FG - TMSOOR/MINRUS/CBLACK</p>
                      <h3 >8,500.00 THB</h3>
                      <div class="star text-end">
                        <span>
                          <i class="bi bi-star" style="font-size:24px;"></i>
                          <!-- text-warning -->
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-3 mx-3 py-3">
                  <div class="card bg-dark " style="width: 18rem; height: ; ">
                    <img
                      src="https://lzd-img-global.slatic.net/g/p/9a761cd5dc6b4456fd80bed73d8921ea.jpg_720x720q80.jpg_.webp"
                      class=""
                      alt="..."
                      width="100%" height="280px"
                    />
                    <div class="card-body text-start" style="color:#fff; width: 18rem; height: 12rem;">
                      <h5 class="card-title">ADIDAS</h5>
                      <p class="card-text"> ADIDAS X SPEEDPORTAL MESSI .1 FG - TMSOOR/MINRUS/CBLACK</p>
                      <h3 >8,500.00 THB</h3>
                      <div class="star text-end">
                        <span>
                          <i class="bi bi-star" style="font-size:24px;"></i>
                          <!-- text-warning -->
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
    
            </div>
                <div class="row d-flex justify-content-center">
                    <div class="d-grid col-6 mx-aut ">
                        <button type="button" class="btn btn-warning mb-4 btn-lg">ดูสินค้าเพิ่มเติม</button>
                    </div>
                </div>
        </div>
    </div>
  </div>
</template>

<script>

// function parseURLParams(url) {
//     var queryStart = url.indexOf("?") + 1,
//         queryEnd   = url.indexOf("#") + 1 || url.length + 1,
//         query = url.slice(queryStart, queryEnd - 1),
//         pairs = query.replace(/\+/g, " ").split("&"),
//         parms = {}, i, n, v, nv;

//     if (query === url || query === "") return;

//     for (i = 0; i < pairs.length; i++) {
//         nv = pairs[i].split("=", 2);
//         n = decodeURIComponent(nv[0]);
//         v = decodeURIComponent(nv[1]);

//         if (!parms.hasOwnProperty(n)) parms[n] = [];
//         parms[n].push(nv.length === 2 ? v : null);
//     }
//     return parms;
//   }
  console.log(window.location.href);
  console.log(window.location.search);
  // var data_get = parseURLParams(window.location.href)
  

export default {
    data(){
        return{
            url: window.location.search,
            title:'',
            brand:['NIKE', 'ADIDAS', 'PUMA', 'MIZUNO'],
            size:[],
            color:['แดง', 'ขาว', 'น้ำเงิน', 'ชมพู','ส้ม','แดง','เขียว','เทา'],
            max_price: 50000,
            min_price: 0,
        }
    },
    created(){
        for(let i = 32 ; i < 45.5; i+=0.5){
            this.size.push(i);
        }
        if (this.url === "?p=football"){
          this.title = "FootBall - Boot";
        }
        if (this.url == "?p=futsal"){
          this.title = "FutSal - Boot";
        }
    },
    watch:{
      // url(ndata, odata){
      //   this.url = ndata;
      //   console.log(odata);
      // }
    }
}
</script>

<style scoped>

.checksize{
    height: 12rem;
    overflow: scroll;
    overflow-x: hidden;
    -webkit-scrollbar-track: yellowgreen;
}


</style>