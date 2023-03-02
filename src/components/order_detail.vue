<template>
    <head>
        <title>
            ดำเนินการสั่งซื้อ
        </title>
    </head>

    <div class="container py-3" v-for="item in order_info" :key="item">
        <div class="col-12" style="border: 1px solid white; height: 20%; margin-bottom: 3%; ">

            <div style="height: 2rem; margin-left: 2%;" >
                <h6 style="display: inline; color: aliceblue; ">รายการคำสั่งซื้อล่าสุด วันที่ {{ item.date_sales }}</h6>
                
            </div>
            <h5 style="color: yellow;  margin-left: 2%;">เลขที่คำสั่งซื้อ: {{ item.order_number }}</h5>
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
                                    <h5 style="display: inline;">{{ item.date_delively }}</h5>
                                </span></h5>
                        </div>
                        <div class="row py-1">
                            <h5 style="display: inline;">วันที่ทำรายการ <span>
                                    <h5 style="display: inline;">{{ item.date_sales }}</h5>
                                </span></h5>
                        </div>
                        <div class="row py-1">
                            <h5 style="display: inline;">วิธีการชำระเงิน <span>
                                    <h5 style="display: inline;">{{ item.paymeent }}</h5>
                                </span></h5>
                        </div>
                        <div class="row py-1">
                            <h5 style="display: inline;">วิธีการจัดส่ง <span>
                                    <h5 style="display: inline;">{{item.delivery }}</h5>
                                </span></h5>
                        </div>
                        <div class="row py-1">
                            <h5 style="display: inline;">สถานะการชำระเงิน <span>
                                    <h5 style="display: inline;">{{ item.pay_success }}</h5>
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
                                    <h5 style="display: inline;">{{ item.name }}</h5>
                                </span></h5>
                        </div>
                        <div class="row py-1">
                            <h5 style="display: inline;">{{item.address}}</h5>
                            <h5 style="display: inline;">เบอร์โทร {{ item.phone }}</h5>
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
                                <tr v-for="item in order_info[0].chart" :key="item">
                                    <th class="">
                                        <div class="card" style=" border: none; background-color: #464646;">
                                            <div class="row g-0">
                                                <div class="col-5">
                                                    <img src="https://www.futbolemotion.com/imagesarticulos/188051/grandes/bota-adidas-predator-accuracy-.3-fg-core-black-white-shock-pink-0.jpg"
                                                        class="img-fluid rounded-start" alt="...">
                                                </div>
                                                <div class="col">
                                                    <div class="card-body" >
                                                        <h4 class="card-title tr_p"></h4>
                                                        <p class="card-text">{{item.pro_name}}</p>
                                                        <p class="card-text tr_p">{{item.product_id}}</p>
                                                        <p class="card-text tr_p">{{item.color}}</p>
                                                        <p class="card-text tr_p">{{item.size}}</p>
                                                        <p class="card-text tr_p">{{item.price}}</p>
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
                                <h3 class="text-end">{{ parseInt(item.chart[0].price) + parseInt(item.chart[1].price)}} THB</h3>
                            </div>
                        </div>
                        <div class="row py-1 mb-3">
                            <div class="col-6">
                                <h3 class="text-strat">ค่าจัดส่ง:</h3>
                            </div>
                            <div class="col-6">
                                <h3 class="text-end">{{order_info[0].total_delivery}} THB</h3>
                            </div>
                        </div>
                        <hr>
                        <div class="row py-1 mb-3">
                            <div class="col-6">
                                <h3 class="text-strat">ราคารวม:</h3>
                            </div>
                            <div class="col-6">
                                <h3 class="text-end">{{ parseInt(item.chart[0].price) + parseInt(item.chart[1].price)+parseInt(item.total_delivery)}} THB</h3>
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
            order_info:'',
            oid:'',
            pri:''
        }
    },
    created(){
        this.order_info = JSON.parse(localStorage.getItem("order_key"));
        const ae = new URLSearchParams(window.location.search);
        this.oid = ae.get("oid");
        this.pri = ae.get("pri");
    },
    computed:{
        total(){
            return this.order_info.reduce((total,curr_product) =>{
                return total+(curr_product.chart.price)
            },0)
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