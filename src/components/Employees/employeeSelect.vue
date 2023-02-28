<template>
  <head>
    <title>AchiFootBall</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  </head>
  
  <div class="container" style="color: aliceblue;">
      <div class="row">
        <div class="col-3" id="left">
          <div style="display: flex;">
            <a href="#">
              <h3>บัญชีของฉัน</h3>
            </a>
            <img src="logo.png" alt="">
          </div>
          <a href="#">
            <h3>รายการคำสั่งซื้อ</h3>
          </a>
          <a href="#">
            <h3>ส่งเลขติดตามพัศดุ</h3>
          </a>
          <div style="display: flex;">
            <a href="#">
              <H3 style="text-decoration: underline;">ออกจากระบบ</H3>
            </a>
            <img src="logo.png" alt="">
          </div>
        </div>


        <div class="col-8">
          <h2>รหัสพนักงาน 12345</h2>
          <h4>รายการคำสั่งซื้อ</h4>
          <div class="container">
            <span style="display: flex;">
              <h5>แสดงรายการ : </h5>
              &nbsp;
              <form action="">
                <div class="checkbox">
                  <label><input type="checkbox" value="4" name="0"> ที่ชำระเงินสำเร็จ</label>
                  <label class="checkbox-inline"><input type="checkbox" value="0"
                      name="1">ที่ยังไม่ได้รับเลขติดตามพัสดุ</label>
                  <label class="checkbox-inline"><input type="checkbox" value="1" name="2">แสดงคำสั่งซื้อทั้งหมด</label>
                </div>
                <div class="checkbox disabled">
                  <label class="checkbox-inline"><input type="checkbox" value="2" name="3">ที่ยังไม่ชำระเงิน</label>
                  <label class="checkbox-inline"><input type="checkbox" value="3"
                      name="4">ที่ได้รับเลขติดตามพัสดุแล้ว</label>
                </div>
              </form>
            </span>

          </div>
          <form action="">
            <div class="col-6">

              <label for="">ค้นหาคำสั่งซื้อ :</label>
              &nbsp;
              <input type="text" placeholder="ระบุเลขที่คำสั่งซื้อ">

            </div>
            <div class="col-6">
              <label for="">แสดงคำสั่งซื้อวันที่ :</label>
              &nbsp;
              <input type="date">
            </div>
          </form>

        </div>
        <div class="container col-7 ">
          <br>
          <table class="table" style="height:40%;">
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
            <tbody style="background-color: rgb(89, 84, 84);">
              <tr>
                <td>1564486</td>
                <td>26-02-2023</td>
                <td>1820$</td>
                <td>ชำระเงินสำเร็จ</td>
                <td>FAS5654543151</td>
                <td style="text-decoration: underline;"><a href="#">รายละเอียด</a></td>
              </tr>
              <tr>
                <td>1564486</td>
                <td>26-02-2023</td>
                <td>1820$</td>
                <td>ชำระเงินสำเร็จ</td>
                <td>FAS5654543151</td>
                <td style="text-decoration: underline;"><a href="#">รายละเอียด</a></td>
              </tr>
            </tbody>
          </table>
          <button type="button" class="btn-lg btn-success">พิมพ์รายการสั่งซื้อ</button>
          <button type="button" class="btn-lg btn-warning">พิมพ์รายละเอียดคำสั่งซื้อ</button>
          <br><br>
          <p>หมายเหตุ *: พิมพ์ข้อมูลคำสั่งตามที่แสดงในตาราง</p>
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

#left {

  border-right: 2px solid cornflowerblue;

}

a {
  color: aliceblue;
}

table {
  height: 20rem;
}

input {
  color: black;
}
</style>