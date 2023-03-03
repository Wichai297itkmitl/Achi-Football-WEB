<template>
    <head>
        <title>ตระกร้าสินเค้า</title>
    </head>
    
    <div class="container-fluid py-4 px-4">
        
        <div class="row px-4" style="padding-left: 10rem !important;">
            <hr/>
            <div class="col-8 px">
                <table class="table " style="color:aliceblue">
                    <thead class="">
                        <tr style="font-size: 24px;">
                            <th scope="col" class="text-start">สินค้า (2 Item)</th>
                            <th scope="col">จำนวน</th>
                            <th scope="col">ราคา</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in chart_info.product" :key="item" :index="index">
                            <th class="">
                                <div class="card mb-1 VueBg" style="max-width: 540px; border: none;">
                                    <div class="row g-0">
                                        <div class="col-5">
                                            <img src="https://www.futbolemotion.com/imagesarticulos/188051/grandes/bota-adidas-predator-accuracy-.3-fg-core-black-white-shock-pink-0.jpg"
                                                class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col">
                                            <div class="card-body VueBg " style="padding-top: 0px !important;" >
                                                <h4 class="card-title">{{item.brand}}</h4>
                                                <p class="card-text d-r">{{item.pro_name}}</p>
                                                <p class="card-text d-r">รหัสสินค้า: {{item.product_id}}</p>
                                                <p class="card-text d-r">สี: {{item.color}}</p>
                                                <p class="card-text d-r">ขนาด: {{item.size}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <td class="" style="width: fit-content">
                                <div class="row g-0">
                                    <div class="col-8 d-flex">
                                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                                            <button type="button" class="btn btn-outline-secondary" @click="item.amount >1 ? item.amount--: ''
                                            ">-</button>
                                            <input type="text" class="form-control text-center ele-num"
                                                style="color: aliceblue;" :value="item.amount" >
                                            <button type="button" class="btn btn-outline-secondary" @click="item.amount++">+</button>
                                        </div>
                                        <a class="mx-3" style="cursor: pointer;"><img src="@/assets/icons/trash-can-64.png" alt=""
                                                width="35" class="mx-2" @click="del(index)"></a>
                                    </div>
                                </div>
                            </td>
                            <td class="" colspan="2">
                                <div class="row">
                                    <div class="col">
                                        <h4>{{ item.price }} THB</h4>
                                    </div>
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-3 bg-checkout py-4">
                <div class="row py-3">
                    <div class="col-6">
                        <h3 class="text-strat">จำนวนสินค้า</h3>
                    </div>
                    <div class="col-6">
                        <h3 class="text-end">{{sumAmout()}}ชิ้น</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <h3 class="text-strat">รวมทั้งหมด</h3>
                    </div>
                    <div class="col-6">
                        <h3 class="text-end">{{ sumPrice()  }} THB</h3>
                    </div>
                </div>
                <div class="row py-2 mt-2">
                    <div class="col">
                        <label for="inputEmail4" class="form-label">
                            <h3>ใส่โค้ดส่วนลด</h3>
                        </label>
                        <input type="text" class="form-control mb-2" id="" v-model="input_code">
                        <button type="button" class="btn btn-success py-2" style="font-size: 22px;" @click="promo()">ใช้โค้ด</button>
                    </div>
                </div>
                <div class="row py-2 mt-4">
                    <div class="col-6">
                        <h3 class="text-strat">ได้รับส่วนลด</h3>
                    </div>
                    <div class="col-6">
                        <h3 class="text-end">{{ discount }} THB</h3>
                    </div>
                </div>

                <div class="row py-1 mb-3">
                    <div class="col-6">
                        <h3 class="text-strat">ยอดรวมสุทธิ</h3>
                    </div>
                    <div class="col-6">
                        <h3 class="text-end">{{ sumPrice()-discount }} THB</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col d-flex">
                        <button type="button" class="btn btn-warning col-12 btn-lg" style="font-size: 35px;">ดำเนินการสั่งสินค้า</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    
</template>

<script>

import cart from '../data_json/chart';

export default {
    data() {
        return {
            user_id: 0,
            chart_info: [],
            input_code: '',
            discount: 0,
            code_promotion: "FRAME555",

        }
    },
    created(){
        // this.chart_info = JSON.parse(localStorage.getItem("chart_key"));
        this.user_id = Number (localStorage.getItem('user_id'));
        cart.forEach(item =>{
            if (this.user_id == item.user_id){
                this.chart_info = item;
                console.log(item);
            }
        })
    },
    methods:{
        sumAmout(){
            var sum = 0;
            this.chart_info.product.forEach(item =>{
                sum += item.amount;
            })
            return sum;
        },
        sumPrice(){
            var sum = 0;
            this.chart_info.product.forEach(item =>{
                sum += item.price;
            })
            return sum;
        },
        promo(){
            if (this.input_code === this.code_promotion){
                this.discount += 100;
            }
        },
        del(index){
            this.chart_info.product.splice(index, 1);
        }
    }
}
</script>

<style scoped>
.d-r {
    margin-bottom: 4px;
}

.ele-num {
    background-color: rgb(38, 38, 38);
}

.card-title {
    color: rgb(255, 208, 79);
}

.bg-checkout{
    background-color: #BCBCBC;
    border-radius: 1rem;
    padding: 12px !important;
}

</style>