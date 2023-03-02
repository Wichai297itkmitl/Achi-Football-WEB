<template>
    <head>
        <title>
            ดำเนินการสั่งซื้อ
        </title>
    </head>

    <div class="container py-3">
        <div class="col-12" style="border: 1px solid white; height: 20%; margin-bottom: 3%; ">

            <div style="height: 2rem; margin-left: 2%;" >
                <h6 style="display: inline; color: aliceblue; ">รายการคำสั่งซื้อล่าสุด วันที่ {{ date }}</h6>
                
            </div>
            <h5 style="color: yellow;  margin-left: 2%;">เลขที่คำสั่งซื้อ: {{ id }}</h5>
            <img src="https://cdn.discordapp.com/attachments/954014737979564052/1080813386696249424/image.png"
                style="margin-left: 25%; width: 50%; margin-bottom: 5%;" alt="">

        </div>
        <div class="row py-2 mx-4" style="color:aliceblue">
            <!--  -->
            <div class="col-7">
                <div class="row py-1">
                    <h3>ข้อมูลการสั่งซื้อ</h3>
                </div>
                <hr style="border-width: 4px; color: white;">

                <div class="" v-show="new_address == false">

                    <div class="col-10">
                        <div class="row py-1">
                            <h5 style="display: inline;">จัดส่งคินค้าวันที่ <span>
                                    <h5 style="display: inline;">{{ date_sent }}</h5>
                                </span></h5>
                        </div>
                        <div class="row py-1">
                            <h5 style="display: inline;">วันที่ทำรายการ <span>
                                    <h5 style="display: inline;">{{ date }}</h5>
                                </span></h5>
                        </div>
                        <div class="row py-1">
                            <h5 style="display: inline;">วิธีการชำระเงิน <span>
                                    <h5 style="display: inline;">{{ pay[0] }}</h5>
                                </span></h5>
                        </div>
                        <div class="row py-1">
                            <h5 style="display: inline;">วิธีการจัดส่ง <span>
                                    <h5 style="display: inline;">{{ delivery[0] }}</h5>
                                </span></h5>
                        </div>
                        <div class="row py-1">
                            <h5 style="display: inline;">สถานะการชำระเงิน <span>
                                    <h5 style="display: inline;">{{ payment[0] }}</h5>
                                </span></h5>
                        </div>

                    </div>
                </div>
                <div class="row py-1" style="margin-top: 10%;">
                    <h3>ที่อยู่จัดส่ง</h3>
                </div>
                <hr style="border-width: 4px; color: white;">

                <div class="" v-show="new_address == false">

                    <div class="col-10">
                        <div class="row py-1">
                            <h5 style="display: inline;">ชื่อ <span>
                                    <h5 style="display: inline;">{{ name }}</h5>
                                </span></h5>
                        </div>
                        <div class="row py-1">
                            <h5 style="display: inline;">{{address}}</h5>
                            <h5 style="display: inline;">เบอร์โทร {{ phone }}</h5>
                        </div>


                    </div>
                </div>


            </div>


            <div class="col-5 py-4 s_fix rounded-start" style="background-color: #464646;">
                <div class="row">
                    <div class="col text-center">
                        <h2>สรุปคำสั่งซื้อ</h2>
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col">
                        <h3>สินค้าในตระกร้า (2รายการ)</h3>
                    </div>
                </div>
                <div class="row order_flow">
                    <div class="col">
                        <table class="table " style="color:aliceblue">
                            <thead class="">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody style="" class="">
                                <tr v-for="index in 2" :key="index">
                                    <th class="">
                                        <div class="card" style=" border: none; background-color: #464646;">
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
                                    <td class="" style="width: fit-content">
                                        <h3>x1</h3>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col">
                        <div class="row py-1 mb-3">
                            <div class="col-6">
                                <h3 class="text-strat">ยอดรวม:</h3>
                            </div>
                            <div class="col-6">
                                <h3 class="text-end">6500.00 THB</h3>
                            </div>
                        </div>
                        <div class="row py-1 mb-3">
                            <div class="col-6">
                                <h3 class="text-strat">ค่าจัดส่ง:</h3>
                            </div>
                            <div class="col-6">
                                <h3 class="text-end">80.00 THB</h3>
                            </div>
                        </div>
                        <hr>
                        <div class="row py-1 mb-3">
                            <div class="col-6">
                                <h3 class="text-strat">ราคารวม:</h3>
                            </div>
                            <div class="col-6">
                                <h3 class="text-end">6580.00 THB</h3>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>
        <div class="row">
            <div class="col" style="height: 200px !important;">
                <!-- for future -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            new_address: false,
            id: 264445,
            date: "26-02-2023",
            date_sent: "28-02-2023",
            name:"Wichai Komm",
            address:"เลขที่497/2 อาคาร นาคบำรุงศรี12 ลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520",
            phone:"0956466558",
            pay:["พร้อมเพย์","ชำระผ่านธนาคาร","เก็บเงินปลาบทาง"],
            payment:["จ่ายเงินสำเร็จ","จ่ายเงินไม่สำเร็จ"],
            delivery:["จัดส่งสินค้าแบบปกติ - ( 2-4 วันทำการ )","จัดส่งด่วน - ( 1-2 วันทำการ)"]
        }
    }
}
</script>

<style scoped>
.order_flow {
    height: 500px !important;
    overflow-y: auto;
    overflow-x: hidden;
}

.tr_p {
    margin-top: -15px !important;

}

.s_fix {
    max-height: 900px !important;
}</style>