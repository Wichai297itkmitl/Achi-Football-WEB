<template>
    <head>
        <title>Login-Page</title>
    </head>
    <div class="container py-4">
        <div class="row mx-4 py-4">
            <form action="" class="col-6" style="color: aliceblue">
                <div class="" style="color: aliceblue">
                    <h1>ยินดีต้อนรับสู่ AchiFootball</h1>
                </div><br>
                <label for="inputUsername" class="form-label">
                    <h3>Username/Email *</h3>
                </label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control col-5" v-model="username" required />
                </div>
                <label for="inputPassword" class="form-label mt-3">
                    <h3>Password *</h3>
                </label>
                <div class="input-group mb-3">
                    <input type="password" class="form-control" v-model="password" required />
                </div>
                <a href="" style="color:aliceblue">ฉันลืมรหัสผ่าน</a>
                <div class="col-auto mt-3">
                    <button type="button" class="btn btn-primary mb-3 btn-lg" @click="login()">เข้าสู่ระบบ</button>
                </div>
                <div class="row" v-show="check_err">
                    <div class="col">
                        <h4 style="color: brown;">เข้าสู่ระบบไม่สำเร็จ username หรือ password ไม่ถูกต้อง</h4>
                    </div>
                </div>
                <h5>ฉันยังไม่ได้เป็นสมาชิก <a href="/register" style="color:aliceblue">สมัครสมาชิกเลย</a></h5>
            </form>
            <div class="col-5 mx-4">
                <img src="https://www.lovellsoccer.co.uk/cms/graphics/Puma-Supercharge-Product-Page-Mobile.jpg"
                    class="img-fluid" alt="...">
            </div>
        </div>
        <br />
    </div>
</template>


<script>
// import { defineComponent } from '@vue/composition-api'
import user from '../data_json/user.js';
export default {
    data() {
        return {
            user: user,
            username: '',
            password: '',
            check_err: false,
        };
    },
    methods:{
        login(){
            var check_pass = false;
            this.user.forEach(acc =>{
                if (this.username === acc.username || this.username === acc.email){
                    if (this.password === acc.password){
                        localStorage.setItem('username', acc.username);
                        localStorage.setItem('user_id', acc.user_id);
                        this.username = acc.username;
                        check_pass = true;
                        this.check_err = false,
                        console.log(this.username);
                        console.log("Login Pass!");
                        window.location.href = '/'
                    }
                }
            });
            if (check_pass == false){
                this.check_err = true;
                console.log("Login No Pass!");
            }
        }
    }
};
</script>


<style scoped>
</style>