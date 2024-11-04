// load du lieu

// add to cart
var cart = JSON.parse(localStorage.getItem('cart'));
if (cart != null) {
    var giohang = cart;
}
else {
    var giohang = [];
}
var btn = document.getElementsByTagName("button");
for (let i = 1; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        var hinh = btn[i].parentElement.childNodes[1].src;
        var ten = btn[i].parentElement.childNodes[3].text;
        var gia = btn[i].parentElement.childNodes[7].value;
        // alert(gia);
        var soluong = 1;
        
        var sp = {
            "hinh": hinh,
            "ten": ten,
            "soluong": soluong,
            "gia": gia,
            "soluong": soluong
        }
        giohang.push(sp);
        // lưu trình duyệt
        localStorage.setItem("cart", JSON.stringify(giohang));
        var cart = JSON.parse(localStorage.getItem("cart"));
        if (cart != null) {
            document.getElementById("slsp").innerHTML = cart.length;
        }
        loadslsp();
    });
}
function loadcart() {
    // lấy về
    var cart = JSON.parse(localStrorage.getItem("cart"));
    if (cart != null) {
        document.getElementById("slsp").innerHTML = " ";
    }
}
function loaddatacart() {
    loadslsp();
    showcart();
}
function showcart() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart != null) {
        var kq = "";
        for (let i = 0; i < cart.length; i++) {
            var total = parseInt(cart[i]["gia"] * cart[i]["soluong"]);
            kq += `<tr>
                        <td><img src="`+ cart[i]["hinh"] + `" height="80px">
                        <td>`+ cart[i]["ten"] + `</td>
                        </td>
                        <td>`+ cart[i]["gia"] + `</td>
                        <td>`+ cart[i]["soluong"] + `</td>
                        <td>`+ total + `</td>
                        <td><button onclick= "xoa(this)">Xóa</button></td>
                    </tr>`;
        }
        document.getElementById("thongtingiohang").innerHTML = kq;
    }
}
function xoa(x) {
    var xoa=x.parentElement.parentElement;
    xoa.remove();
}
function loadslsp() {
    //load sp
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart != null) {
        document.getElementById("slsp").innerHTML = "(" + cart.length + ")";
    }
}
function delcart() {
    localStorage.removeItem("cart");
    window.location="cart.html";
}
function tang(){

}

