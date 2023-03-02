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
                        <tr v-for="index in 2" :key="index">
                            <th class="">
                                <div class="card mb-1 VueBg" style="max-width: 540px; border: none;">
                                    <div class="row g-0">
                                        <div class="col-5">
                                            <img src="https://www.futbolemotion.com/imagesarticulos/188051/grandes/bota-adidas-predator-accuracy-.3-fg-core-black-white-shock-pink-0.jpg"
                                                class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col">
                                            <div class="card-body VueBg " style="padding-top: 0px !important;" v-for="item in chart_info" :key="item">
                                                <h4 class="card-title">{{item.product[0].brand}}</h4>
                                                <p class="card-text d-r">{{item.product[0].pro_name}}</p>
                                                <p class="card-text d-r">รหัสสินค้า: {{item.product[0].product_id}}</p>
                                                <p class="card-text d-r">สี: {{item.product[0].color}}</p>
                                                <p class="card-text d-r">ขนาด: {{item.product[0].size}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <td class="" style="width: fit-content">
                                <div class="row g-0">
                                    <div class="col-8 d-flex">
                                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                                            <button type="button" class="btn btn-outline-secondary">-</button>
                                            <input type="text" class="form-control text-center ele-num"
                                                style="color: aliceblue;" value="1" >
                                            <button type="button" class="btn btn-outline-secondary" >+</button>
                                        </div>
                                        <a href="#" class="mx-3"><img src="@/assets/icons/trash-can-64.png" alt=""
                                                width="35" class="mx-2"></a>
                                    </div>
                                </div>
                            </td>
                            <td class="" colspan="2">
                                <div class="row">
                                    <div class="col">
                                        <h4>8,500 THB</h4>
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
                        <h3 class="text-end">2ชิ้น</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <h3 class="text-strat">รวมทั้งหมด</h3>
                    </div>
                    <div class="col-6">
                        <h3 class="text-end">17,000 THB</h3>
                    </div>
                </div>
                <div class="row py-2 mt-2">
                    <div class="col">
                        <label for="inputEmail4" class="form-label">
                            <h3>ใส่โค้ดส่วนลด</h3>
                        </label>
                        <input type="text" class="form-control mb-2" id="">
                        <button type="button" class="btn btn-success py-2" style="font-size: 22px;">ใช้โค้ด</button>
                    </div>
                </div>
                <div class="row py-2 mt-4">
                    <div class="col-6">
                        <h3 class="text-strat">ได้รับส่วนลด</h3>
                    </div>
                    <div class="col-6">
                        <h3 class="text-end">100 THB</h3>
                    </div>
                </div>

                <div class="row py-1 mb-3">
                    <div class="col-6">
                        <h3 class="text-strat">ยอดรวมสุทธิ</h3>
                    </div>
                    <div class="col-6">
                        <h3 class="text-end">16,900.00 THB</h3>
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
export default {
    data() {
        return {
            chart_info: ''
        }
    },
    created(){
        this.chart_info = JSON.parse(localStorage.getItem("chart_key"));
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