<template>
    <head>
        <title>Register-Page</title>
    </head>
    <div class="container py-4">
        <div class="row mx-4 py-4">
            <form action="" class="col-5" style="color: aliceblue">
                <div class="" style="color: aliceblue">
                    <h1>ลงทะเบียนเข้าใช้งานเว็บไซต์ AchiFootball</h1>
                </div><br>
                <label for="inputUsername" class="form-label">
                    <h3>username *</h3>
                </label>
                <div class="input-group mb-1">
                    <input type="text" class="form-control col-5" id="basic-url" aria-describedby="basic-addon3" required />
                </div>
                <label for="inputPassword" class="form-label mt-3">
                    <h3>ชื่อ-นามสกุล *</h3>
                </label>
                <div class="input-group mb-1">
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" required />
                </div>

                <div class="row py-1">
                    <div class="col-3">
                        <label for="inputPassword" class="form-label mt-3">
                            <h3>เพศ *</h3>
                        </label>
                        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option selected>-------</option>
                            <option value="1">ชาย</option>
                            <option value="2">หญิง</option>
                            <option value="3">อื่นๆ</option>
                            <option value="3">ไม่ระบุ</option>
                        </select>
                    </div>
                    <div class="col-5 mx-2">
                        <label for="inputPassword" class="form-label mt-3">
                            <h3>วัน/เดือน/ปี *</h3>
                        </label>
                        <div class="input-group mb-1 ">
                            <input type="date" class="form-control form-select-lg" id="basic-url"
                                aria-describedby="basic-addon3" required />
                        </div>
                        <!-- <input type="date" id="birthday" name="birthday"> -->
                    </div>
                </div>


                <label for="inputPassword" class="form-label mt-3">
                    <h3>email *</h3>
                </label>
                <div class="input-group mb-1">
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" required />
                </div>
                <label for="inputPassword" class="form-label mt-3">
                    <h3>phone *</h3>
                </label>
                <div class="input-group mb-1">
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" required />
                </div>
                <label for="inputPassword" class="form-label mt-3">
                    <h3>password *</h3>
                </label>
                <div class="input-group mb-1">
                    <input type="password" class="form-control" id="basic-url" aria-describedby="basic-addon3" required />
                </div>
                <label for="inputPassword" class="form-label mt-3">
                    <h3>Confirm password: *</h3>
                </label>
                <div class="input-group mb-1">
                    <input type="password" class="form-control" id="basic-url" aria-describedby="basic-addon3" required />
                </div>
                <div class="submit py-2">
                    <a href="#" style="color:aliceblue; font-size:22px">อ่านเงื่อนไขการยินยอมให้เปิดเผยข้อมูลส่วนตัว</a>
                    <div class="check mt-2 mx-2">
                        <div class="form-check checkbox-xl mt-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label " for="flexCheckDefault">
                                ยอมรับนโยบายข้อมูลส่วนตัว
                            </label>
                        </div>
                        <div class="form-check checkbox-xl mt-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label " for="flexCheckDefault">
                                ตรวจสอบข้อมูลเรียบร้อยแล้ว
                            </label>
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col d-flex">
                            <button type="submit" class="btn btn-primary mb-3 btn-lg"> สมัครสมาชิก</button>
                            <div class="to_login mx-3 mt-2">
                                <h4>ฉันเป็นสมาชิกแล้ว <a href="/login" style="color:aliceblue">เข้าสู่ระบบ</a></h4>
                            </div>
                        </div>
                    </div>


                </div>


            </form>
            <div class="col-6 mx-4">
                <img src="https://i.pinimg.com/originals/5b/7c/a4/5b7ca403ad99558099e8d93c9475537d.jpg"
                    class="img-fluid mx-4" alt="...">
            </div><br>

        </div>
        <br />
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
.checkbox-lg .form-check-input {
    top: .8rem;
    scale: 1.4;
    margin-right: 0.7rem;
}

.checkbox-lg .form-check-label {
    padding-top: 13px;
}

.checkbox-xl .form-check-input {
    top: 1.2rem;
    scale: 1.7;
    margin-right: 0.8rem;
}

.checkbox-xl .form-check-label {
    padding-top: 0px;
    padding-bottom: 10px;
    font-size: 20px;
    
}
</style>