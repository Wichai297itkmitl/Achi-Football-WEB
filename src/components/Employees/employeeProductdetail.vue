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
                <h4>แสดงรายละเอียดสินค้าในคลัง</h4>

                    <div class="col-12" style="margin-top: 30px; margin-left: 50px; margin-bottom: 20px;">
                        <div>
                            <h5 style="display: inline">รหัสสินค้า : </h5>
                            <h5 style="display: inline">56007823</h5>
                        </div>
                        <div>
                            <h5 style="display: inline">ชื่อสินค้า :</h5>
                            <h5 style="display: inline"> ADIDAS X SPEEDPORTAL MESSI .1 FG - TMSOOR/MINRUS/CBLACK</h5>
                        </div>
                        <div>
                            <h5 style="display: inline">แบรนด์ :</h5>
                            <h5 style="display: inline"> ADIDAS</h5>
                        </div>
                        <div>
                            <h5 style="display: inline">ราคา :</h5>
                            <h5 style="display: inline"> 8,500</h5>
                        </div>
                    </div>
 
            </div>
            <div class="container col-10" style="margin-left: 320px; margin-left: 370px;">
                <div style="display: flex; margin-bottom: 20px;">
                    <h5 style="margin-right: 20px; ">จำนวนสินค้าทุกขนาด</h5>
                    &nbsp;
                    <div class="form-group col-lg-8" style="display: inline;">
                        <label for="" style="margin-right: 10px;">ขนาด :</label>
                        <select style="margin-right: 10px; height: 30px; width: 30%;">
                            <option>All size</option>
                            <option>40</option>
                            <option>41</option>
                            <option>42</option>
                        </select>
                        <label for="" style="margin-right: 10px;">สี :</label>
                        <select style="margin-right: 10px; width: 30%; height: 30px;">
                            <option>All color</option>
                            <option>red</option>
                            <option>blue</option>
                            <option>green</option>
                        </select>
                        
                    </div>
                </div>

                <table class="table" style="height: 40%;">
                    <thead style="background-color: black;">
                        <tr style="border-collapse: ;">
                            <th>ขนาด</th>
                            <th>สี</th>
                            <th>จำนวน</th>
                        </tr>
                    </thead>
                    <tbody style="background-color: rgb(89, 84, 84);">
                        <tr >
                            <td>38.5 EUR</td>
                            <td>Red/Green</td>
                            <td>6</td>
                        </tr>
                        <tr >
                            <td>40 EUR</td>
                            <td>Red/Green</td>
                            <td>6</td>
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
 }
 td{
    border: 3px solid white;
 }
 </style>