<template>
    <head>
      <title>AchiFootBall</title>
    </head>
    <div class="">
        <div class="container py-2">
            <div class="row">
            <div class="col d-flex justify-content-center VueBg">
              <router-link to="/">
                <img src="logo.png" />
              </router-link>
            </div>
          </div>  
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3" id="left" >
                <div style="display: flex;">
                    <a href="#"><h3>บัญชีของฉัน</h3></a>
                    <img src="logo.png" alt="" >
                </div>

                <a href="#"><h3>รายการคำสั่งซื้อ</h3></a>
                <a href="#"><h3>ส่งเลขติดตามพัศดุ</h3></a>
                <div style="display: flex;">
                    
                    <a href="#"><H3 style="text-decoration: underline;">ออกจากระบบ</H3></a>
                    <img src="logo.png" alt="" >
                </div>
            </div>


            <div class="col-lg-6">
                <h2>รหัสพนักงาน 12345</h2>
                <h4>ส่งเลขติดตามพัสดุ</h4>
                <form action="">
                <div class="col-lg-6">
                     
                        <label for="">ค้นหาคำสั่งซื้อ :</label>
                     &nbsp
                    <input type="text" placeholder="ระบุเลขที่คำสั่งซื้อ">
                </div>
                <div class="col-lg-6">
                    <label for="">แสดงคำสั่งซื้อวันที่ :</label>
                    &nbsp
                    <input type="date" >
                </div>
                    </form>
            </div>
            <div class="container col-lg-7 ">
                <br>
                <table class="table"  style="height:40%;">
                    <thead style="background-color: black;">
                      <tr>
                        <th>เลขที่คำสั่งซื้อ</th>
                        <th>วันที่สั่งซื้อ</th>
                        <th>ราคารวม</th>
                        <th>การชำระเงิน</th>
                        <th>เลขติดตามพัสดุ</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody style="background-color: rgb(89, 84, 84);" >
                      <tr>
                        <td>1564486</td>
                        <td>26-02-2023</td>
                        <td>1820$</td>
                        <td>ชำระเงินสำเร็จ</td>
                        <td><input type="text"></td>
                        <td><button type="button" class="btn-sm btn-success">ยืนยัน</button></td>
                      </tr>
                      <tr>
                        <td>1564486</td>
                        <td>26-02-2023</td>
                        <td>1820$</td>
                        <td>ชำระเงินสำเร็จ</td>
                        <td><input type="text"></td>
                        <td><button type="button" class="btn-sm btn-success">ยืนยัน</button></td>
                      </tr>
                    </tbody>
                  </table>
                  
            </div>
        </div>

    </div> 
  </template>
  
  <script>
  export default {
      data(){
          return{
              
          }
      }
  }
  </script>
  
  <style>
  body {
    background-color: rgb(39, 35, 35);
    color: aliceblue;
}
#left{

    border-right: 2px solid cornflowerblue;
 
}
a{
    color: aliceblue;
}
table{
    height: 20rem;
}
input {
    color: black;
}
  </style>