<template>
    <head>
        <title>บันชีของฉัน</title>
    </head>

    <div class="container">
        <hr style="color:aliceblue">
        <div class="row py-2">
            <div class="col-3 border-end">
        <div class="d-flex py-2">
          <a href="/emInfo" style="color:aliceblue; text-decoration: none;">
            <h3>บัญชีของฉัน</h3>
          </a>
          <img src="logo.png" alt="">
        </div>
        <div class="d-flex py-2">
          <a href="/employeeSelect" style="color:aliceblue; text-decoration: none;">
            <h3>รายการคำสั่งซื้อ</h3>
          </a>
        </div>
        <div class="d-flex py-2">
          <a href="/emCon" style="color:aliceblue; text-decoration: none;">
            <h3>ส่งเลขติดตามพัศดุ</h3>
          </a>
        </div>

        <div class="d-flex py-2">
          <a href="/emSelecttrue" style="color:aliceblue; text-decoration: none;">
            <h3>จัดการสินค้าในคลัง</h3>
          </a>
        </div>
        <div class="d-flex py-2">
          <a href="#" style="color:aliceblue;">
            <h3>ออกจากระบบ</h3>
          </a>
          <img src="logo.png" alt="">
        </div>
      </div>

            <div class="col mx-3" style="color:aliceblue" v-show="edit_active == false">
                <div class="row">
                    <div class="col-3">
                        <h4>ข้อมูลส่วนตัว</h4>
                    </div>
                    <div class="col-9">
                        <div class="d-flex justify-content-end  mb-2">
                            <a class="fix_data" @click="edit_active = true">
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
                                <h5>รหัสพนักงาน</h5>
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

            <!-- edit_information -->
            <div class="col mx-3 py-3" style="background-color: #5A5A5A; color: aliceblue;" v-show="edit_active">
                <div class="row ">
                    <div class="col">
                        <h3>ข้อมูลส่วนตัว</h3>
                    </div>
                </div>
                <div class="row py-4 mx-4">
                    <div class="col-5">
                        <h4>ชื่อ-นามสกุล</h4>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control col-5" id="basic-url" aria-describedby="basic-addon3"
                                required />
                        </div>
                    </div>
                    <div class="col-3 mx-3">
                        <h4>เพศ</h4>
                        <select class="form-select form-select-lg mb-2" aria-label=".form-select-lg example">
                            <option selected>-------</option>
                            <option value="1">ชาย</option>
                            <option value="2">หญิง</option>
                            <option value="3">อื่นๆ</option>
                            <option value="3">ไม่ระบุ</option>
                        </select>
                    </div>
                </div>
                <div class="row mx-4">
                    <div class="col-5">
                        <h4>วัน/เดือน/ปีเกิด</h4>
                        <div class="input-group mb-3">
                            <input type="date" class="form-control col-5" id="basic-url" aria-describedby="basic-addon3"
                                required />
                        </div>
                    </div>
                </div>

                <div class="row mx-4 py-2">
                    <div class="col-6">
                        <h4>email:</h4>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control col-5" id="basic-url" aria-describedby="basic-addon3"
                                required />
                        </div>
                    </div>
                </div>

                <div class="row mx-4 py-2">
                    <div class="col-6">
                        <h4>phone:</h4>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control col-5" id="basic-url" aria-describedby="basic-addon3"
                                required />
                        </div>
                    </div>
                </div>

                <div class="row mx-4 py-2">
                    <div class="col-6">
                        <h4>password:</h4>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control col-5" id="basic-url" aria-describedby="basic-addon3"
                                required />
                        </div>
                    </div>
                </div>

                <div class="row mx-4 py-2">
                    <div class="col-6">
                        <h4>Confirm Password:</h4>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control col-5" id="basic-url" aria-describedby="basic-addon3"
                                required />
                        </div>
                    </div>
                </div>
                <div class="row mx-4">
                    <div class="col">
                        <div class="form-check checkbox-xl mt-1">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label " for="flexCheckDefault">
                                <h4>ตรวจสอบข้อมูลเรียบร้อยแล้ว</h4>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="row mx-4">
                    <div class="col-6 d-flex">
                        <button type="submit" class="btn btn-success btn-lg">บันทึก</button>
                        <button type="submit" class="btn btn-danger btn-lg mx-3"
                            @click="edit_active = false;">ยกเลิก</button>
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
            edit_active: false,
        }
    },
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
    cursor: pointer;
}
</style>