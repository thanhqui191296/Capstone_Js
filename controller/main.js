function layDanhSachSanPham() {
    axios({
      method: 'get',
      url: 'https://shop.cyberlearn.vn/api/Product',
    }).then(function (result) {
      var data = result.data.content
      hienThiTable(data)
    }).catch(function (error) {
      console.log(error)
    });
}
layDanhSachSanPham() 
function hienThiTable(data){
  var listSP = document.getElementById("shoe-product-Q");
  listSP.innerHTML= '';
  data.forEach(function (product) {
    var productHTML = `
    <div class="col-4 mt-4">
      <div class="shoe-product">
        <div class="shoe-card">
          <div id="product-img">
            <a href="#">
              <img class ="shoes-img" src="${product.image}" alt="">
            </a>
          </div>
          <div class="product-infor">
            <h5>${product.name}</h5>
            
          </div>
          <div class="shoe-price">
            <p>$${product.price}</p>
      
            <button class="btn shoebtn-button">Thông Tin</button>
            <button class="btn shoebtn-button">Mua ngay <span class="fa-solid fa-cart-shopping"></span></button>
          </div>
        </div>
      </div>
    </div>
    `;
    listSP.innerHTML += productHTML
  })
};
function xemSanPham(ma){
  axios({
    method: 'get',
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${ma}`,
  }).then(function (result) {
    document.getElementById("txtTenSanPham").value = result.data.name;
    document.getElementById("txtThongTin").value = result.data.description;
    document.getElementById("txtSize").value = result.data.size;
    document.getElementById("txtPrice").value = result.data.price;
  }).catch(function (error) {
    console.log(error)
  });
}
function setGender() {
  var ele = document.getElementsByName("gender");
  for (i = 0; i < ele.length; i++){
    if (ele[i].checked){
      if(ele[i].value === "male"){
        gender = true;
      }else if (ele[i].value === "female"){
        gender = false;
      }
    }
  }
}
function dangKy(){
  var email = document.getElementById("txtEmail").value;
  var tenDangNhap = document.getElementById("txtName").value;
  var matKhau = document.getElementById("txtPass").value;
  var passCofirm = document.getElementById("txtPassCofirm").value;
  var sdt = document.getElementById("txtPhone").value;
  var gender;
  setGender()
  var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (!emailPattern.test(email)) {
    alert("Email không hợp lệ.");
    return false;
  }
  
  if (matKhau !== passCofirm) {
    alert("Mật khẩu không khớp.");
    return false;
  }
  var dangKy = {
    email: email,
    name: tenDangNhap,
    password: matKhau,
    phone: sdt,
    gender: gender,
    password_confirm: passCofirm
  };
  axios({
    method:'POST',
    url:'https://shop.cyberlearn.vn/api/Users/signup',
    data: dangKy
  }).then(function(response){
    var result = response.data.content;
    localStorage.setItem('accessToken', data.accessToken);
  }).catch(function(error){
    alert(error.response.data.message);
  });
}
function dangNhap(){
  var email = document.getElementById("txtEmail").value;
  var matKhau = document.getElementById("txtPass").value;
  var dangNhap = {
    email: email,
    password: matKhau,
  };
  axios({
    method:'POST',
    url:'https://shop.cyberlearn.vn/api/Users/signin',
    data: dangNhap
  }).then(function(response){
    window.location.href="http://127.0.0.1:5501/index.html"
    localStorage.setItem("tenDangNhap",response.data.userName)
  }).catch(function(error){
    console.error(error)
  });
}
var tenDangNhap = localStorage.getItem("tenDangNhap");
if (tenDangNhap) {
  document.getElementById("dangNhapMessage").innerHTML = "Đang nhập: " + tenDangNhap;
}