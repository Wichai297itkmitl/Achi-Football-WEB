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


            <div class="col-8">
                <h2>รหัสพนักงาน 12345</h2>
                <h4>จัดการข้อมูลสินค้า</h4>
                
                <form action="">
                    <div class="col-12">

                        <label for="">ค้นหาสินค้า :</label>
                        &nbsp;
                        <input type="text" placeholder="ระบุรหัสสินค้า">
                        <button class="btn btn-success">ค้นหา</button>
                    </div>
                    <button class="btn btn-warning">เพิ่มสินค้าใหม่</button>
                </form>

            </div>
            <div class="container col-10" style="margin-left: 320px;">
                <br>
                <table class="table" style="height: 40%;">
                    <thead style="background-color: black;">
                        <tr style="border-collapse: ;">
                            <th>ขนาด</th>
                            <th>สี</th>
                            <th>จำนวน</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody style="background-color: rgb(89, 84, 84);">
                        <tr >
                            <td >38.5 EUR</td>
                            <td>Red/Green</td>
                            <td>6</td>
                            <td><button class="btn btn-primary">เพิ่ม</button></td>
                            <td><button class="btn btn-warning">ลด</button></td>
                            <td><button class="btn btn-danger">ลบ</button></td>
                        </tr>
                        <tr >
                            <td>40 EUR </td>
                            <td>Red/Green</td>
                            <td >6</td>
                            <td><button class="btn btn-primary">เพิ่ม</button></td>
                            <td><button class="btn btn-warning">ลด</button></td>
                            <td><button class="btn btn-danger">ลบ</button></td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div class=" container col-8" style=" margin-left: 320px;">
                

                    <div class="col-12" style="margin-top: 30px;  margin-bottom: 20px;">
                        <div style="margin-bottom: 10px;">
                            <h5 style="display: inline">รหัสสินค้า : </h5>
                            <h5 style="display: inline">146465465</h5>
                        </div>
                        <div style="margin-bottom: 10px; ">
                            <h5 style="display: inline">ชื่อสินค้า :</h5>
                            <input type="text" placeholder="ADIDAS X SPEEDPORTAL MESSI .1 FG - TMSOOR/MINRUS/CBLACK" style="border-radius: 10px;">
                        </div> 
                        <div style="margin-bottom: 10px;">
                            <h5 style="display: inline">แบรนด์ :</h5>
                            <input type="text" placeholder="Nike" style="border-radius: 10px;">
                        </div>
                        <div style="margin-bottom: 10px;">
                            <h5 style="display: inline">ราคา :</h5>
                            <input type="text" placeholder="8,500" style="border-radius: 10px;">
                        </div>
                        <button type="button" class="btn-lg btn-success">บันทึก</button>
                    </div>


                    <br>
                    <div class="col-12" style="margin-top: 30px;  margin-bottom: 20px;">
                        <div style="margin-bottom: 10px;">
                            <h5 style="display: inline">เพิ่มข้อมูลใหม่ให้</h5> 
                            &nbsp;
                            <h5 style="display: inline">รหัสสินค้า : </h5>
                            <h5 style="display: inline">146465465</h5>


                        </div>
                        <div style="margin-bottom: 10px; ">
                            <h5 style="display: inline">ขนาด :</h5>
                            <input type="text" placeholder="7 EU" style="border-radius: 10px;">
                            &nbsp;
                            <h5 style="display: inline; color: yellow;" >หมายเหตุ* หน่วยเป็น EU</h5>
                        </div> 
                        <div style="margin-bottom: 10px;">
                            <h5 style="display: inline">สี :</h5>
                            <input type="text" placeholder="Red" style="border-radius: 10px;">
                            &nbsp;
                            <h5 style="display: inline; color: yellow;" >ตัวอย่าง Red/blue/pink</h5>
                        </div>
                        <div style="margin-bottom: 10px;">
                            <h5 style="display: inline">จำนวน :</h5>
                            <input type="text" placeholder="0" style="border-radius: 10px;">
                        </div>
                        <button type="button" class="btn-lg btn-warning">เพิ่มสินค้า</button>
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