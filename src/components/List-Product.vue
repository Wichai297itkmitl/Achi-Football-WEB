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
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="s_nike" id="flexCheckDefault">
                        <label class="form-check-label">
                            NIKE
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="s_adi" id="flexCheckDefault">
                        <label class="form-check-label">
                            ADIDAS
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="s_puma" id="flexCheckDefault">
                        <label class="form-check-label">
                            PUMA
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="s_mizu" id="flexCheckDefault">
                        <label class="form-check-label">
                            MIZUNO
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
                            <label class="form-check-label">
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
                        <label class="form-check-label">
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
                <div class="col-3 mx-3 py-3" v-for="item in product" :key="item"
                 v-show="(search_all ? true: false) || ((s_nike && item.brand === 'Nike') ? true: false) ||
                 ((s_adi && item.brand === 'Adidas' ) ? true: false) ||
                 ((s_puma && item.brand === 'Puma') ? true: false) ||
                 ((s_mizu && item.brand === 'Mizuno') ? true: false)">
                  <div class="card bg-dark " style="width: 18rem; height: ; " >
                    <img
                      :src="item.image"
                      class=""
                      alt="..."
                      style="max-width: 300px; min-height: 300px; max-height: 300px; cursor: pointer;"
                      @click="go_detail(item.product_id)"
                    />
                    <div class="card-body text-start" style="color:#fff; width: 18rem; height: 12rem;">
                      <h5 class="card-title">{{ item.brand }}</h5>
                      <p class="card-text" @click="go_detail(item.product_id)" style="cursor: pointer;">{{ item.pro_name }}</p>
                      <h3 @click="go_detail(item.product_id)" style="cursor: pointer;">{{ item.price }}.00 THB</h3>
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
  import product from '../data_json/product'

  console.log(window.location.href);
  console.log(window.location.search);


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
            product: product,

            search_all : true,
            s_nike : false,
            s_puma : false,
            s_adi : false,
            s_mizu : false,
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
        s_nike(n){
            if (!n){
                this.search_all = true;
            }else{
                this.search_all = false;
            }
        },
        s_adi(n){
            if (!n){
                this.search_all = true;
            }else{
                this.search_all = false;
            }
        },
        s_puma(n){
            if (!n){
                this.search_all = true;
            }else{
                this.search_all = false;
            }
        },
        s_mizu(n){
            if (!n){
                this.search_all = true;
            }else{
                this.search_all = false;
            }
        },
    }, methods:{
        go_detail(id){
            window.location.href = '/info?pid='+id;
        }
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