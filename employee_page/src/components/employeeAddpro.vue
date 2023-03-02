<template>
    <head>
        <title>AchiFootBall</title>
    </head>

    <div class="container-fluid mx-4" style="color: aliceblue;">
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
                        <h3>ออกจากระบบ</h3>
                    </a>
                    <img src="logo.png" alt="">
                </div>
            </div>


            <div class="col-8">
                <div class="row" style="color:aliceblue;">
                    <div class="col-3">
                        <h4>รหัสพนักงาน 12345</h4>
                        <h5>เพิ่มสินค้าใหม่</h5>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <br>
                        <h3>รหัสสินค้า : {{ p_id }}</h3>
                    </div>
                </div>

                <div class="row py-2">
                    <div class="col-7 d-flex ">
                        <h5>ชื่อสินค้า :</h5>
                        <div class="col mx-2">
                            <input type="text" value="" class="form-control">
                        </div>
                    </div>
                    <div class="col-4 d-flex">
                        <h5>แบรนด์ :</h5>
                        <div class="col mx-2">
                            <input type="text" value="" class="form-control">
                        </div>
                    </div>
                </div>

                <div class="row py-2">
                    <div class="col-4 d-flex ">
                        <h5>ราคา :</h5>
                        <div class="col mx-2">
                            <input type="text" value="" class="form-control">
                        </div>
                    </div>
                    <div class="col-4 d-flex">
                        <h5>ขนาด :</h5>
                        <div class="col mx-2">
                            <input type="number" value="" class="form-control">
                        </div>
                        <h6 style="color: yellow;" class="mt-2">หมายเหตุ* หน่วยเป็น EU</h6>
                    </div>
                    <div class="col-4 d-flex">
                        <h5>สี :</h5>
                        <div class="col mx-2">
                            <input type="text" value="" class="form-control">
                        </div>
                        <h6 style="color: yellow;" class="mt-2">ตัวอย่าง Red/blue/pink</h6>
                    </div>
                </div>

                <div class="row py-2">
                    <div class="col-3 d-flex ">
                        <h5>จำนวน :</h5>
                        <div class="col mx-2">
                            <input type="number" value="" class="form-control">
                        </div>
                    </div>
                    <div class="col-6 d-flex mx-4">
                        <h5>อัพโหลดรูปภาพ :</h5>
                        <div class="col mx-2">
                            <input type="file" value="" class="form-control">
                        </div>
                    </div>
                </div>

                <div class="row py-2">
                    <div class="col d-flex">
                        <button type="button" class="btn btn-lg btn-success mx-2" @click="">เพิ่มสินค้า</button>
                        <button type="button" class="btn btn-lg btn-danger mx-2">ล้างข้อมูล</button>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col h_max">

                </div>
            </div>
        </div>

    </div>
</template>
    
<script>
export default {
    data() {
        return {
            p_id:0,
            p_name:'',
            brand: '',
            size: 0,
            color: '',
            amount: '',
        }
    },
    methods(){
        return{
            add_pro(){

            }
        }
    },
    created() {
        
    },
}
</script>
    
<style scoped></style>