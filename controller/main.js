function layDanhSacSanPham() {
    axios({
      method: 'get',
      url: 'https://shop.cyberlearn.vn/api/Product',
    }).then(function (result) {
      console.log(result.data);
      hienThiTable(result.data)
    }).catch(function (error) {
      console.log(error)
    });
  }
  layDanhSacSanPham()
