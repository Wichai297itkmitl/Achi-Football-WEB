<template>
    <head>
        <title>Login-Page</title>
    </head>
    <div class="container py-4">
        <div class="row mx-4 py-4">
            <form action="" class="col-5" style="color: aliceblue">
                <div class="" style="color: aliceblue">
                    <h1>ยินดีต้อนรับสู่ AchiFootball</h1>
                </div><br>
                <label for="inputUsername" class="form-label">
                    <h3>Username/Email *</h3>
                </label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control col-5" id="basic-url" aria-describedby="basic-addon3" required />
                </div>
                <label for="inputPassword" class="form-label mt-3">
                    <h3>Password *</h3>
                </label>
                <div class="input-group mb-3">
                    <input type="password" class="form-control" id="basic-url" aria-describedby="basic-addon3" required />
                </div>
                <a href="" style="color:aliceblue">ฉันลืมรหัสผ่าน</a>
                <div class="col-auto mt-3">
                    <button type="submit" class="btn btn-primary mb-3 btn-lg">เข้าสู่ระบบ</button>
                </div>
                <h5>ฉันยังไม่ได้เป็นสมาชิก <a href="/register" style="color:aliceblue">สมัครสมาชิกเลย</a></h5>
            </form>
            <div class="col-6 mx-4">
                <img src="https://www.lovellsoccer.co.uk/cms/graphics/Puma-Supercharge-Product-Page-Mobile.jpg"
                    class="img-fluid" alt="...">
            </div>
        </div>
        <br />
    </div>
</template>


<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    data() {
        return {};
    },
};
</script>


<style scoped>
</style>