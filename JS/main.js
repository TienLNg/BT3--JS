var arrList = [];

//nhập số n
function addNum() {
    var soNhap = document.getElementById("inputNum").value;

    // console.log(soNhap);

    arrList.push(soNhap);
    // console.log(arrList);

    document.getElementById("txtNotify1").innerHTML = arrList;
}
document.getElementById("btnaddNum").onclick = addNum;

//tính tổng số dương

function sumSoDuong() {
    var sum = 0;
    for (var i = 0; i < arrList.length; i++) {
        sum += arrList[i]; 
    }
    // console.log(sumSoDuong);
    document.getElementById("txtNotify2").innerHTML = "Tổng số dương =  " + sum + ".";
    return sum;
}
document.getElementById("btncalc2").onclick = sumSoDuong;


//đếm số dương


//tìm số nhỏ nhất


//tìm số dương nhỏ nhất
var arrSoDuong = [];
for (let i = 0; i < arrSoDuong.length; i++) {
    if (arrSoDuong[i] > 0) {
        arrSoDuong.push(arrSoDuong[i]);
    }
    
}
function timMin() {
    if (arrSoDuong) {
        
    }
}
//tìm số chẵn cuối cùng 


//đổi chỗ


//sắp xếp tăng dần


//tìm số nguyên tố đầu tiên


//đếm số nguyên


//so sánh số lượng số âm và dương