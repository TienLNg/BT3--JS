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
    document.getElementById("txtNotify2").innerHTML = "Tổng số dương =  " + sum + ".";
    // return sum;
}
document.getElementById("btncalc2").onclick = sumSoDuong;


//đếm số dương
function countPosNumbers() {
    var count = 0;
    for (var i = 0; i < arrList.length; i++) {
        if (arrList[i] > 0) {
            count++;
        }
    }
    document.getElementById("txtNotify3").innerHTML = "Số dương =  " + count + ".";
    return count;

}
document.getElementById("btncalc3").onclick = countPosNumbers;


//tìm số nhỏ nhất
function timMin() {
    var minDuong = arrList[0];
    for (var i = 0; i < arrList.length; i++) {
        if (arrList[i] < minDuong) {
            minDuong = arrList[i];
        }
    }
    document.getElementById("txtNotify4").innerHTML = "Số nhỏ nhất = " + minDuong;
}
document.getElementById("btncalc4").onclick = timMin;



//tìm số dương nhỏ nhất
function timMinDuong() {
    if (arrList == 0) {
        document.getElementById("txtNotify5").innerHTML = "Mảng không có số dương."

    } else {
        var minDuong = arrList[0];
        for (var i = 0; i < arrList.length; i++) {
            if (arrList[i] > 0 && arrList[i] < minDuong) {
                minDuong = arrList[i];
            }

        }
        document.getElementById("txtNotify5").innerHTML = "Số dương nhỏ nhất = " + minDuong;

    }
}
document.getElementById("btncalc5").onclick = timMinDuong;

//tìm số chẵn cuối cùng 


//đổi chỗ


//sắp xếp tăng dần
function xepTang() {
    var max = arrList[i];
    for (var i = 0; i < arrList.length; i++) {
        
        arrList.sort((a, b) => a - b);
    }

    document.getElementById("txtNotify8").innerHTML = "Mảng sau khi sắp xếp =  " +  + ".";
    // return countt;

}
document.getElementById("btncalc8").onclick = xepTang;

//tìm số nguyên tố đầu tiên


//đếm số nguyên
function countNumbers() {
    var count = 0;
    for (var i = 0; i < arrList.length; i++) {
        
            count++;
        
    }
    document.getElementById("txtNotify10").innerHTML = "Số nguyên =  " + count + ".";
}
document.getElementById("btncalc10").onclick = countNumbers;

//so sánh số lượng số âm và dương