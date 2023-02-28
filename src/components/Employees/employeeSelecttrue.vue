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
                        <h3 style="color: yellow;">แสดงสินค้าในคงคลัง</h3>
                    </a>
                    <img src="logo.png" alt="">
                </div>
                <a href="#" style="  color: yellow;">
                    <h3 style="margin-top: 10px;">เพิ่ม/ลบ สินค้นในคลัง</h3>
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
                <h4>แสดงสินค้าในคลัง</h4>
                
                <form action="">
                    <div class="col-12">

                        <label for="">ค้นหาคำสั่งซื้อ :</label>
                        &nbsp;
                        <input type="text" placeholder="ระบข้อมูลสินค้า">

                    </div>
                </form>

            </div>
            <div class="container col-10" style="margin-left: 320px;">
                <br>
                <table class="table" style="height: 40%;">
                    <thead style="background-color: black;">
                        <tr>
                            <th>รหัสสินค้า</th>
                            <th>ชื่อสินค้า</th>
                            <th>แบรนด์</th>
                            <th>ราคา</th>
                            <th>จำนวนสินค้าทุกขนาด</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody style="background-color: rgb(89, 84, 84);">
                        <tr>
                            <td>56007823</td>
                            <td>ADIDAS X SPEEDPORTAL MESSI .1 FG - TMSOOR/MINRUS/CBLACK</td>
                            <td>Addidas</td>
                            <td>8,500</td>
                            <td>12</td>
                            <td style="text-decoration: underline; color: yellow;"><a href="#" style="color: yellow;">ข้อมูลเพิ่มเติม</a></td>
                        </tr>
                        <tr>
                            <td>1564486</td>
                            <td>nike vapor 2023 world cup</td>
                            <td>Nike</td>
                            <td>8,500</td>
                            <td>13</td>
                            <td style="text-decoration: underline; color: yellow;"><a href="#" style="color: yellow;">ข้อมูลเพิ่มเติม</a></td>
                        </tr>
                    </tbody>
                </table>

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
 }

 input {
     color: black;
     margin: 10px;
 }

 button {
     margin: 10px;
 }</style>