<template>
    <head>
        <title>
            ดำเนินการสั่งซื้อ
        </title>
    </head>

    <div class="container">
        <div class="row py-2" style="color: aliceblue;">
            <!--  -->
            <div class="col-7">
                <div class="row">
                    <div class="row py-2">
                        <div class="col">
                            <h3>วิธีการจัดส่ง:</h3>
                        </div>
                    </div>
                    <div class="row py-3">
                        <div class="col-4 d-flex">
                            <div class="form-check mx-2">
                                <input class="form-check-input py-2 px-2" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1">
                                <label class="form-check-label mx-2" for="flexRadioDefault1"
                                    style="font-size: 20px !important;">
                                    จัดส่งสินค้าแบบปกติ (5-7 วัน)
                                </label>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-check mx-2">
                                <input class="form-check-input py-2 px-2" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1">
                                <label class="form-check-label mx-2" for="flexRadioDefault1"
                                    style="font-size: 20px !important;">
                                    จัดส่งสินค้าแบบพิเศษในราคา 80 บาท (1-2 วัน)
                                </label>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-check mx-2">
                                <input class="form-check-input py-2 px-2" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1">
                                <label class="form-check-label mx-2" for="flexRadioDefault1"
                                    style="font-size: 20px !important;">
                                    รับสินค้าที่ร้าน
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col">
                        <hr>
                        <h3>ที่อยู่จัดส่ง:</h3>
                    </div>
                </div>


                <!-- Add address -->
                <div class="row py-3">
                    <div class="col">
                        <div class="col-5 py-1">
                            <label for="exampleFormControlInput1" class="form-label">ชื่อ *</label>
                            <input type="text" class="form-control" placeholder="">
                        </div>
                        <div class="col-5 py-2">
                            <label for="exampleFormControlInput1" class="form-label">เบอร์โทรศัพท์ *</label>
                            <input type="text" class="form-control" placeholder="">
                        </div>
                        <div class="col-8 py-2">
                            <label for="exampleFormControlInput1" class="form-label">ที่อยู่ *</label>
                            <textarea type="text" class="form-control" rows="2" placeholder=""></textarea>
                        </div>
                        <div class="row">
                            <div class="col-4 py-2">
                                <label for="inputState" class="form-label">State</label>
                                <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-4 py-2">
                                <label for="inputState" class="form-label">State</label>
                                <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-4 py-2">
                                <label for="inputState" class="form-label">State</label>
                                <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-4 py-2">
                                <label for="exampleFormControlInput1" class="form-label">รหัสไปรษณีย์ *</label>
                                <input type="text" class="form-control" placeholder="">
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>

                <!-- payment -->
                <div class="row">
                    <div class="col-8">
                        <h3>ชำระเงิน</h3>
                        <div class="row py-3">
                            <div class="col-5 d-flex">
                                <div class="form-check mx-2">
                                    <input class="form-check-input py-2 px-2" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1">
                                    <label class="form-check-label mx-2" for="flexRadioDefault1"
                                        style="font-size: 20px !important;">
                                        ชำระผ่านพร้อมเพย์
                                    </label>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="form-check mx-2">
                                    <input class="form-check-input py-2 px-2" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1">
                                    <label class="form-check-label mx-2" for="flexRadioDefault1"
                                        style="font-size: 20px !important;">
                                        เก็บเงินปลายทาง
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row py-3">
                    <div class="col-8">
                        <h3>หมายเหตุคำสั่งซื้อ</h3>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1"
                                class="form-label">บอกหมายเหตุเพิ่มเติมเพื่อให้เรารู้ถึงความต้องการของคุณ</label>
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-5 py-4" style="background-color: #464646;">
                <div class="row">
                    <div class="col text-center">
                        <h1>สรุปคำสั่งซื้อ</h1>
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col">
                        <h3>สินค้าในตระกร้า (2รายการ)</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col order_flow">
                        <table class="table " style="color:aliceblue">
                            <thead class="">
                                <tr>
                                    <th scope="col" ></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody style="" class="">
                                <tr v-for="index in 2" :key="index">
                                    <th class="">
                                        <div class="card mb-1" style=" border: none; background-color: #464646;">
                                            <div class="row g-0">
                                                <div class="col-5">
                                                    <img src="https://www.futbolemotion.com/imagesarticulos/188051/grandes/bota-adidas-predator-accuracy-.3-fg-core-black-white-shock-pink-0.jpg"
                                                        class="img-fluid rounded-start" alt="...">
                                                </div>
                                                <div class="col">
                                                    <div class="card-body">
                                                        <h4 class="card-title tr_p">NIKE</h4>
                                                        <p class="card-text">NIKE GRIPKNIT PHANTOM GX ELITE FG - BALTIC</p>
                                                        <p class="card-text tr_p">รหัสสินค้า: 10750280</p>
                                                        <p class="card-text tr_p">สี: BLUE, PINK, WHITE</p>
                                                        <p class="card-text tr_p">ขนาด: 40 EUR</p>
                                                        <p class="card-text tr_p">ราคา: 8,500 THB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td class="" style="width: fit-content"> <h3>x1</h3></td>
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

        }
    }
}
</script>

<style scoped>
.order_flow{
    height: 600px;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-scrollbar-track: yellowgreen;
}

.tr_p{
    margin-top: -15px !important;
}
</style>