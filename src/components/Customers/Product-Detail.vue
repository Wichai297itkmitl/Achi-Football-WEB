<template>
    <head>
        <title>{{ title }}</title>
    </head>
    <div class="container py-4">
        <div class="row">
            <div class="col" style="color:aliceblue">
                <h2>NIKE GRIPKNIT PHANTOM GX ELITE FG - BALTIC</h2>
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
                            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/730916bf-eeb5-4f30-a4f0-dde6a9c54467/zoom-mercurial-vapor-15-elite-ag-pro-football-boots-sQFdvG.png"
                                class="d-block w-100" height="600">
                        </div>
                        <div class="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPHrei_knEZ4ePQibKPc1BiMF250zuC-YbMLGyJEUmcviwQkULVrSrO5BT77svcd-DB4&usqp=CAU"
                                class="d-block w-100" height="600">
                        </div>
                        <div class="carousel-item">
                            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/730916bf-eeb5-4f30-a4f0-dde6a9c54467/zoom-mercurial-vapor-15-elite-ag-pro-football-boots-sQFdvG.png"
                                class="d-block w-100" height="600">
                        </div>
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
            </div>

            <!-- ProductDail -->
            <div class="col-6" style="color: aliceblue;">
                <div class="row">
                    <div class="col">
                        <h1>NIKE</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h2>NIKE GRIPKNIT PHANTOM GX ELITE FG - BALTIC</h2>
                        <h3>รหัสสินค้า: 10750280</h3>
                        <h3>สี: BLUE, PINK, WHITE</h3>
                    </div>
                </div>
                <div class="row py-4">
                    <div class="col d-flex">
                        <h3>ขนาด: </h3>
                        <div class="mx-4">
                            <div class="col">
                                <select id="inputState" class="form-select">
                                    <option selected>EUR</option>
                                    <option>US</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <input type="checkbox" class="btn-check bg-chekbox" id="btn-check-2" checked autocomplete="off">
                        <label class="btn btn-primary">Checked</label>
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
            title: "ADIDAS X SPEEDPORTAL MESSI .1 FG - TMSOOR/MINRUS/CBLACK",
        }
    }
}
</script>

<style scoped>
.bg-chekbox{
    background-color: rgb(69, 69, 69);
}

</style>