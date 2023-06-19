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
function dangNhap(){
  var email = document.getElementById("txtEmail").value;
  var tenDangNhap = document.getElementById("txtName").value;
  var matKhau = document.getElementById("txtPass").value;
  var passCofirm = document.getElementById("txtPassCofirm").value;
  var sdt = document.getElementById("txtPhone").value;
  var signup = new DangNhap(email,matKhau,tenDangNhap,sdt,passCofirm)
  axios({
    method:'POST',
    url:'https://shop.cyberlearn.vn/api/Users/signup',
  }).then(function(result){
    alert("Đăng nhập thành công")
    dangNhap()
  }).catch(function(error){
    
  });
}