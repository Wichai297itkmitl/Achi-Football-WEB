<template>
    <head>
        <title>AchiFootBall</title>
    </head>
    

    <div class="container-fluid mx-4 py-4" style="color: aliceblue;">
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


            <div class="col-9">
                <div class="row" style="color:aliceblue;">
                    <div class="col">
                        <h4>รหัสพนักงาน 12345</h4>
                        <h5>แสดงสินค้าในคลัง</h5>
                    </div>
                </div>

                <div class="row py-4" style="color: aliceblue;">
                    <div class="col d-flex">
                        <label for="">ค้นหาสินค้า :</label>
                        <div class="col-2 mx-3 input-group-sm">
                            <input type="text" placeholder="ระบุข้อมูลสินค้า" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col" >
                        <table class="table" style="color: aliceblue;">
                            <thead style="background-color: #505050;">
                                <tr>
                                    <th>รหัสสินค้า</th>
                                    <th>ชื่อสินค้า</th>
                                    <th>แบรนด์</th>
                                    <th>ราคา</th>
                                    <th class="text-center"> จำนวนสินค้าทุกขนาด</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody class="">
                                <tr class="size_tr">
                                    <td >56007823</td>
                                    <td style="max-width: 200px !important;">ADIDAS X SPEEDPORTAL MESSI .1 FG - TMSOOR/MINRUS/CBLACK</td>
                                    <td>Addidas</td>
                                    <td>8,500</td>
                                    <td class="text-center">12</td>
                                    <td style="text-decoration: underline; color: yellow;">
                                        <a href="#" style="color: yellow;">ข้อมูลเพิ่มเติม</a>
                                    </td>
                                </tr>
                                <tr class="size_tr">
                                    <td>1564486</td>
                                    <td style="max-width: 200px !important;">nike vapor 2023 world cup</td>
                                    <td>Nike</td>
                                    <td>8,500</td>
                                    <td class="text-center">13</td>
                                    <td style="text-decoration: underline; color: yellow;" >
                                        <a href="#" style="color: yellow;">ข้อมูลเพิ่มเติม</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <div class="row">
                    <div class="col h_max">
                        <!-- for some think in future -->
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
    
<style>
.h_max{
    height: 600px !important;
}
</style>