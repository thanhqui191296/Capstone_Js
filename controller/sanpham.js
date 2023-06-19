function SanPham(ma,ten,giaSP,mieuTa,hinhAnh,soLuong) {
    this.id = ma;
    this.name = ten;
    this.price =giaSP;
    this.description = mieuTa;
    this.image = hinhAnh;
    this.quantity = soLuong;
    this.size = size;
};
function DangNhap(email,matKhau,tenDangNhap,sdt) {
    this.email = email;
    this.password = matKhau;
    this.name = tenDangNhap;
    this.gender= true;
    this.phone = sdt;
}