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
}