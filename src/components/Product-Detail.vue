<template>
    <head>
        <title>{{ product.pro_name }}</title>
    </head>
    <div class="container py-4">
        <div class="row">
            <div class="col" style="color:aliceblue">
                <h2>{{ product.pro_name }}</h2>
            </div>
        </div>
        <div class="row py-1">
            <div class="col-6">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img :src="product.image"
                                class="d-block w-100" height="600">
                        </div>
                        <!-- <div class="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPHrei_knEZ4ePQibKPc1BiMF250zuC-YbMLGyJEUmcviwQkULVrSrO5BT77svcd-DB4&usqp=CAU"
                                class="d-block w-100" height="600">
                        </div>
                        <div class="carousel-item">
                            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/730916bf-eeb5-4f30-a4f0-dde6a9c54467/zoom-mercurial-vapor-15-elite-ag-pro-football-boots-sQFdvG.png"
                                class="d-block w-100" height="600">
                        </div> -->
                    </div>
                    <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button> -->
                </div>
                <div class="row py-4 " style="color:aliceblue">
                    <div class="col">
                        <h2>รายละเอียด</h2>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col">
                            <p>
                                Obsessed with perfecting your craft? We design Elite cleats for you and the world’s biggest
                                stars to give you high-level quality, because you demand greatness from yourself and your
                                footwear. Infused with revolutionary Nike Gripknit, these cleats provide better touch on the
                                ball in an intuitive design that's made to optimize performance both when striking and
                                during close control.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ProductDail -->
            <div class="col-6" style="color: aliceblue;">
                <div class="row">
                    <div class="col">
                        <h1>{{ product.brand }}</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h2>{{ product.pro_name }}</h2>
                        <h3>รหัสสินค้า: {{ product.product_id }}</h3>
                        <h3>สี: {{ product.color }}</h3>
                    </div>
                </div>
                <div class="row py-4">
                    <div class="col d-flex">
                        <h3>ขนาด: </h3>
                        <div class="mx-4">
                            <div class="col">
                                <select id="inputState" class="form-select"
                                    style="background-color: #1a1818; color: aliceblue;">
                                    <option selected>EUR</option>
                                    <option>US</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2 py-2 mx-0" v-for=" item in size" :key="item">
                        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
                        <label class="btn bg-chekbox btn-lg" for="option2">{{ item }} {{ unit }}</label>
                    </div>
                </div>
                <div class="row py-4">
                    <div class="col d-flex">
                        <h2>จำนวน:</h2>
                        <div class="btn-group mx-4" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-light" @click="item_amo > 1 ? item_amo--: false">-</button>
                            <input type="text" class="form-control text-center ele-num"
                                style="color: aliceblue; background-color: #1a1818;" v-model="item_amo">
                            <button type="button" class="btn btn-outline-light" @click="item_amo++">+</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h2>ราคา: 8,500 THB</h2>
                    </div>
                </div>
                <div class="row py-3">
                    <div class="col d-flex">
                        <button type="button" class="btn btn-primary col-6 btn-lg"
                            style="font-size: 35px;">เพิ่มใส่ตะกร้า</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import product from '../data_json/product.js';


export default {
    data() {
        return {
            product: product,
            title: "",
            size: [],
            unit: "EUR",
            pid: 0,
            item_amo: 1,
        }
    },
    created() {
        for (let i = 40; i < 45.5; i += 0.5) {
            this.size.push(i);
        }
        var getData = new URLSearchParams(window.location.search);
        this.pid = Number(getData.get('pid'));
        console.log(this.pid);
        product.forEach(item =>{
            if (item.product_id == this.pid){
                this.product = item;
            }
        })
    },
}
</script>

<style scoped>.bg-chekbox {
    background-color: rgb(49, 49, 49);
    color: aliceblue;
}</style>