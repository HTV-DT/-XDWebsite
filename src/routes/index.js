//TongQuan
import ThongKe from '~/page/TongQuan/ThongKe';
import DanhSachNhanVien from '~/page/TongQuan/DanhSachNhanVien';
import DanhSachTaiKhoan from '~/page/TongQuan/DanhSachTaiKhoan';


// DanhSach
import PhongBan from '~/page/DanhSach/PhongBan';
import ChucVu from '~/page/DanhSach/ChucVu';
import LoaiNhanVien from '~/page/DanhSach/LoaiNhanVien';


//Login
import Login from '~/page/Login';
// import Login from '~/components/Login';



// Public thường dùng trước khi đăng nhập
const publicRoutes = [
    // Tong Quan
    { path: '/', component: ThongKe },
    { path: '/danhsachnhanvien', component: DanhSachNhanVien },
    { path: '/danhsachtaikhoan', component: DanhSachTaiKhoan },

    // DanhSach
    { path: '/phongban', component: PhongBan },
    { path: '/chucvu', component: ChucVu },
    { path: '/loainhanvien', component: LoaiNhanVien },

    // Cham Cong

   

];

const privateRoutes = [
];

export { publicRoutes, privateRoutes };
