//bài tập 1:
function tinhTien() {
    //input:
    var soTien1Ngay = +'100000';
    var soNgayLam = +document.getElementById('soNgay').value;
    //output:
    var soTienLuong = 0;
    //process:
    soTienLuong = soNgayLam * soTien1Ngay;
    document.getElementById('soTienLuongNhanDuoc').innerHTML = soTienLuong;
}


//bài tập 2:
function giaTriTrungBinh() {
    //input:
    var soThu1 = +document.getElementById('soThuNhat').value;
    var soThu2 = +document.getElementById('soThuHai').value;
    var soThu3 = +document.getElementById('soThuBa').value;
    var soThu4 = +document.getElementById('soThuTu').value;
    var soThu5 = +document.getElementById('soThuNam').value;
    //output:
    var soTrungBinh = 0;
    //process:
    soTrungBinh = (soThu1 + soThu2 + soThu3 + soThu4 +soThu5) / 5;
    document.getElementById('giaTriTrungBinh').innerHTML = soTrungBinh;
}

//bài tập 3:
function doiTienVND() {
    //input:
    var tienQuyDoiVND = +'23500';
    var soTienUSD = +document.getElementById('soTienUSD').value;
    //output:
    var soTienVND = 0;
    //process:
    soTienVND = soTienUSD * tienQuyDoiVND;
    document.getElementById('soTienVND').innerHTML = soTienVND;
}

//bài tập 4:
//Chu vi:
function chuViHCN() {
    //input:
    var chieuDaiHCN = +document.getElementById('chieuDai').value;
    var chieuRongHCN = +document.getElementById('chieuRong').value;
    //output:
    var chuViHCN = 0;
    //process:
    chuViHCN = (chieuDaiHCN + chieuRongHCN) *2;
    document.getElementById('chuVi').innerHTML = chuViHCN;
}

//Diện tích:
function dienTichHCN() {
    //input:
    var chieuDaiHCN = +document.getElementById('chieuDai').value;
    var chieuRongHCN = +document.getElementById('chieuRong').value;
    //output:
    var dienTichHCN = 0;
    //process:
    dienTichHCN = chieuDaiHCN * chieuRongHCN;
    document.getElementById('dienTich').innerHTML = dienTichHCN;
}

//bài 5:
function tongKySo() {
    //input:
    var inputNumber = +document.getElementById('so2ChuSo').value;
    //output:
    var ketQua = 0;
    //process:
    var phanChuc = Math.floor(inputNumber / 10);
    var phanDonVi = Math.floor(inputNumber % 10);
    ketQua = phanChuc + phanDonVi;

    document.getElementById('tongKySo').innerHTML = ketQua;

}