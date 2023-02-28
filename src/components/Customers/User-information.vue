<template>
    <head>
        <title>บันชีของฉัน</title>
    </head>

    <div class="container">
        <hr style="color:aliceblue">
        <div class="row py-2" v-show="edit_active == false">
            <div class="col-3 border-end">
                <div class="d-flex py-2">
                    <a href="#" style="color: aliceblue; text-decoration: none;">
                        <h2>บันชีของฉัน</h2>
                    </a>
                    <a href=""><img src="@/assets/icons/user.svg" class="mx-2"></a>
                </div>
                <div class="d-flex py-2">
                    <a href="#" style="color: aliceblue; text-decoration: none;">
                        <h2>ประวัติการสั่งซื้อ</h2>
                    </a>
                    <a href=""><img src="@/assets/icons/user.svg" class="mx-2"></a>
                </div>
                <div class="d-flex py-2">
                    <a href="#" style="color: aliceblue; text-decoration: none;">
                        <h2>สินค้าที่สนใจ</h2>
                    </a>
                    <a href=""><img src="@/assets/icons/user.svg" class="mx-2"></a>
                </div>
                <div class="d-flex py-2">
                    <a href="#" style="color: aliceblue;">
                        <h2>ออกจากระบบ</h2>
                    </a>
                    <a href=""><img src="@/assets/icons/user.svg" class="mx-2"></a>
                </div>
            </div>
            <div class="col mx-3" style="color:aliceblue">
                <div class="row">
                    <div class="col-3">
                        <h4>ข้อมูลส่วนตัว</h4>
                    </div>
                    <div class="col-9">
                        <div class="d-flex justify-content-end  mb-2">
                            <a href="" class="fix_data">
                                <h4 class="">แก้ไขข้อมูล</h4>
                            </a>
                        </div>
                    </div>
                    <hr style="color:aliceblue">
                </div>
                <div class="row">
                    <div class="col">
                        <div class="row ">
                            <div class="col py-3" style="background-color: #494949;">
                                <h4>รายละเอียดข้อมูล</h4>
                            </div>
                        </div>
                        <div class="row" style="background-color: #6B6B6B;">
                            <br>
                            <div class="col-6 py-4">
                                <h5>ชื่อ-นามสกุล</h5>
                                <h6>Wichai Kommongkhun</h6>
                            </div>
                            <div class="col-6 py-4">
                                <h5>วัน/เดือน/ปีเกิด</h5>
                                <h6>11/11/2002</h6>
                            </div>
                        </div>
                        <div class="row" style="background-color: #6B6B6B;">
                            <br>
                            <div class="col-6 py-4">
                                <h5>อีเมล์</h5>
                                <h6>64070230kmitl.ac.th</h6>
                            </div>
                            <div class="col-6 py-4">
                                <h5>เบอร์มือถือ</h5>
                                <h6>095-634-0638</h6>
                            </div>
                        </div>
                        <div class="row" style="background-color: #6B6B6B;">
                            <br>
                            <div class="col-6 py-4">
                                <h5>username</h5>
                                <h6>wichai_admin</h6>
                            </div>
                            <div class="col-6 py-4">
                                <h5>รหัสผ่าน</h5>
                                <h6>********</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- edit_information -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            edit_active: true,
        }
    }
}
</script>

<style>
.fix_data {
    color: rgb(255, 255, 255);
    text-decoration: none;
    border: 1px solid #fff;
    padding: 2px;
    border-radius: .2rem;
}

.fix_data:hover {
    color: rgb(231, 170, 15);
}</style>