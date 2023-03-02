<template>
    <head>
        <title>AchiFootBall</title>
    </head>

    <div class="container-fluid mx-4 py-2" style="color: aliceblue;">
        <div class="row">
            <div class="col-2 border-end">
                <div class="d-flex py-2">
                    <a href="/emSelecttrue " style="color:#FFB546; text-decoration: none;">
                        <h3>แสดงสินค้าในคลัง</h3>
                    </a>
                    <img src="logo.png" alt="">
                </div>
                <div class="d-flex py-2">
                    <a href="/emChangePro" style="color:#FFB546; text-decoration: none;">
                    <h3>เพิ่ง/ลบ สินค้นในคลัง</h3>
                </a>
                </div>
                <div class="d-flex py-2">
                    <a href="#" style="color:aliceblue;">
                        <h3>ออกจากระบบ </h3>
                    </a>
                    <img src="logo.png" alt="">
                </div>
            </div>


            <div class="col-8">
                <div class="row" style="color:aliceblue;">
                    <div class="col-3">
                        <h4>รหัสพนักงาน 12345</h4>
                        <h5>รายการคำสั่งซื้อ</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col6">
                        <div>
                            <h5 style="display: inline">รหัสสินค้า : </h5>
                            <h5 style="display: inline">{{ product_info[14].product_id }}</h5>
                        </div>
                        <div>
                            <h5 style="display: inline">ชื่อสินค้า :</h5>
                            <h5 style="display: inline"> {{product_info[14].pro_name}}</h5>
                        </div>
                        <div>
                            <h5 style="display: inline">แบรนด์ :</h5>
                            <h5 style="display: inline"> {{product_info[14].brand}}</h5>
                        </div>
                        <div>
                            <h5 style="display: inline">ราคา :</h5>
                            <h5 style="display: inline"> {{product_info[14].price}}</h5>
                        </div>
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col-3 d-flex py-2">
                        <h6>จำนวนสินค้าทุกขนาด 12 ชิ้น</h6>
                    </div>
                    <div class="col-8 d-flex py-1">
                        <!-- <div class="form-group col-8 mx-4" style="display: inline;"> -->
                        <h5>ขนาด :</h5>
                        <div class="col-2 mx-2">
                            <select class="form-select form-select-sm">
                                <option>All size</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                            </select>
                        </div>
                        <h5 class="mx-2">สี :</h5>
                        <div class="col-3 mx-2">
                            <select class="form-select form-select-sm">
                                <option>All color</option>
                                <option>red</option>
                                <option>blue</option>
                                <option>green</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col h_max">
                        <table class="table" style="color: aliceblue;">
                            <thead style="background-color: #505050;">
                                <th>ขนาด</th>
                                <th>สี</th>
                                <th>จำนวน</th>
                            </thead>
                            <tbody style="background-color: #222222;" v-for="item in product_info[14].amount" :key="item">
                                <tr class="size_tr"  v-if="product_info[14]">
                                    <!-- v-if="item.size != item.size" -->
                                    <td>{{item.size}} EUR</td>
                                    <td>{{item.color}}</td>
                                    <td>{{item.amount}} 1</td>
                                </tr>
                            </tbody>
                        </table>
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
            product_info: '',
        }
    },
    created(){
        this.product_info = JSON.parse(localStorage.getItem("product_key"));
    },
}
</script>
    
<style>
</style>