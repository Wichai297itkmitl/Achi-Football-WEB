<template>
    <head>
        <title>AchiFootBall</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>

    <div class="container" style="color: aliceblue;">
        <div class="row">
            <div class="col-3" id="left">
                <div style="display: flex;">
                    <a href="#">
                        <h3 style="color: yellow;">แสดงสินค้าในคลัง</h3>
                    </a>
                    <img src="logo.png" alt="">
                </div>
                <a href="#" style="  color: yellow;">
                    <h3 style="margin-top: 10px;">จัดการสินค้าในคลัง</h3>
                </a>
                <div style="display: flex;">
                    <a href="#" style=" margin-top: 10px;">
                        <H3 style="text-decoration: underline;">ออกจากระบบ</H3>
                    </a>
                    <img src="logo.png" alt="">
                </div>
            </div>


            <div class="col-9">
                <h2>รหัสพนักงาน 12345</h2>
                <h4>เพิ่มสินค้าใหม่</h4> 
                <h5 style="display: inline">รหัสสินค้า : </h5>
                <h5 style="display: inline">146465465</h5>
                <div>
                    <h5 style="display: inline">ชื่อสินค้า :</h5>
                    <input type="text" style="width: 50%; border-radius: 10px;"> 
                    <h5 style="display: inline">แบรนด์ :</h5>
                    <input type="text" style="border-radius: 10px; ">
                </div>
                <div>
                    <h5 style="display: inline">ราคา :</h5>
                    <input type="text" style=" border-radius: 10px;width: 15%;">
                    <h5 style="display: inline">ขนาด :</h5>
                    <input type="text" style=" border-radius: 10px; width: 10%;">
                    <h6 style="color: yellow; display: inline;">หมายเหตุ* หน่วยเป็น EU</h6> &nbsp;
                    <h5 style="display: inline">สี :</h5>
                    <input type="text" style=" border-radius: 10px; width: 10%;">
                    <h6 style="color: yellow; display: inline;">ตัวอย่าง Red/blue/pink</h6>
                </div>
                <div>
                    <h5 style="display: inline">จำนวน :</h5>
                    <input type="text" style=" border-radius: 10px;width: 10%;">
                    <h5 style="display: inline; margin-left: 20%;">อัพโหลดรูปภาพ :</h5>
                    <input type="file" style=" border-radius: 10px;width: 40%; color: aliceblue;">
                </div>
                <button type="button" class="btn-lg btn-success">เพิ่มสินค้า</button>
          <button type="button" class="btn-lg btn-danger">ล้างข้อมูล</button>
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
    
<style scoped> #left {

     border-right: 2px solid cornflowerblue;

 }

 a {
     color: aliceblue;
     text-decoration: none;
 }

 table {
     height: 20rem;
     color: aliceblue;
     width: 100%;
 }

 input {
     color: black;
     margin: 10px;
 }

 button {
     margin: 10px;
 }

 </style>