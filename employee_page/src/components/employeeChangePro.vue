<template>
    <head>
        <title>AchiFootBall</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
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

            <div class="col-8 mx-3">
                <div class="row" style="color:aliceblue;">
                    <div class="col-3">
                        <h4>รหัสพนักงาน 12345</h4>
                        <h5>จัดการข้อมูลสินค้า</h5>
                    </div>
                </div>

                <div class="row py-2" style="color: aliceblue;">
                    <div class="col d-flex py-2">
                        <label for="">
                            <h4>ค้นหาสินค้า :</h4>
                        </label>
                        <div class="col-3 mx-2 input-group-sm">
                            <input type="text" placeholder="ระบุรหัสสินค้า" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="row py-3">
                    <div class="col-4">
                        <a href="/emAddPro"><button class="btn btn-warning btn-lg rounded-3">เพิ่มสินค้าใหม่</button></a>
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col-3 d-flex py-2">
                        <h4>จำนวนสินค้าทุกขนาด 12 ชิ้น</h4>
                    </div>
                    <div class="col-8 d-flex py-2">
                        <!-- <div class="form-group col-8 mx-4" style="display: inline;"> -->
                        <h5>ขนาด :</h5>
                        <div class="col-2 mx-2">
                            <select class="form-select form-select-sm">
                                <option>All size</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                            </select>
                        </div>
                        <h5 class="mx-2">สี :</h5>
                        <div class="col-3 mx-2">
                            <select class="form-select form-select-sm">
                                <option>All color</option>
                                <option>red</option>
                                <option>blue</option>
                                <option>green</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <table class="table " style="color: aliceblue;">
                            <thead style="font-size: 30px; background-color: #505050;">
                                <th>ขนาด</th>
                                <th>สี</th>
                                <th>จำนวน</th>
                            </thead>
                            <tbody style="background-color: #222222; font-size: 20px;">
                                <tr>
                                    <td>38.5 EUR</td>
                                    <td>Red/Green</td>
                                    <td class="" style="max-width: 60px !important;">
                                        <div class="row g-0">
                                            <div class="col-8 d-flex">
                                                <h3 class="mx-2">6 </h3>
                                                <button class="btn btn-primary mx-2">เพิ่ม</button>
                                                <button class="btn btn-warning mx-2">ลด</button>
                                                <!-- <button type="button" class="btn btn-outline-secondary">-</button>
                                                    <button type="button" class="btn btn-outline-secondary">+</button> -->
                                                <a href="#" class=""><img src="@/assets/icons/trash-can-64.png" alt=""
                                                        width="35" class="mx-2"></a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>40 EUR </td>
                                    <td>Red/Green</td>
                                    <td class="" style="max-width: 60px !important;">
                                        <div class="row g-0">
                                            <div class="col-8 d-flex">
                                                <h3 class="mx-2">6 </h3>
                                                <button class="btn btn-primary mx-2">เพิ่ม</button>
                                                <button class="btn btn-warning mx-2">ลด</button>
                                                <!-- <button type="button" class="btn btn-outline-secondary">-</button>
                                                    <button type="button" class="btn btn-outline-secondary">+</button> -->
                                                <a href="#" class=""><img src="@/assets/icons/trash-can-64.png" alt=""
                                                        width="35" class="mx-2"></a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <h5>รหัสสินค้า : 146465465</h5>
                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-6 d-flex ">
                                <h5 style="display: inline">ชื่อสินค้า :</h5>
                                <div class="col-10 mx-2">
                                    <input type="text" placeholder="" class="form-control"
                                        value="ADIDAS X SPEEDPORTAL MESSI .1 FG - TMSOOR/MINRUS/CBLACK">
                                </div>
                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-6 d-flex">
                                <h5 style="display: inline">แบรนด์ :</h5>
                                <div class="col-4 mx-2">
                                    <input type="text" class="form-control" value="Nike">
                                </div>
                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-6 d-flex">
                                <h5 style="display: inline">ราคา :</h5>
                                <div class="col-4 mx-2">
                                    <input type="text" placeholder="" class="form-control" value="8500">
                                </div>
                            </div>

                        </div>
                        <div class="row py-3">
                            <div class="col">
                                <button type="button" class="btn-lg btn-success">บันทึก</button>
                            </div>
                        </div>

                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col">
                        <div class="row">
                            <div class="col d-flex">
                                <h4>เพิ่มข้อมูลใหม่ให้ รหัสสินค้า : 146465465</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 d-flex py-2">
                                <h5>ขนาด :</h5>
                                <div class="col-4 mx-2">
                                    <input type="text" value="7 EU" class="form-control">
                                </div>
                                <h5 style="color: yellow;">หมายเหตุ* หน่วยเป็น EU</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 d-flex py-2">
                                <h5>สี :</h5>
                                <div class="col-4 mx-2">
                                    <input type="text" value="Red" class="form-control">
                                </div>
                                <h5 style="color: yellow;">ตัวอย่าง Red/blue/pink</h5>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6 d-flex py-2">
                                <h5>จำนวน :</h5>
                                <div class="col-4 mx-2">
                                    <input type="number" value="0" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="row py-3">
                            <div class="col">
                                <button type="button" class="btn-lg btn-warning">เพิ่มสินค้า</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col for-fu">

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
.for-fu{
    height: 100px !important;
}
</style>