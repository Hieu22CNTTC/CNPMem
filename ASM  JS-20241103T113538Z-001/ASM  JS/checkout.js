// Lấy dữ liệu giỏ hàng từ localStorage
var cart = JSON.parse(localStorage.getItem('cart')) || [];

// Hiển thị giỏ hàng trong trang thanh toán
function displayCheckoutCart() {
    var checkoutCart = document.getElementById("checkoutCart");
    var totalAmount = 0;

    if (cart.length === 0) {
        checkoutCart.innerHTML = "<tr><td colspan='5'>Giỏ hàng của bạn trống.</td></tr>";
        return;
    }

    cart.forEach((item, index) => {
        var total = parseInt(item.gia) * item.soluong;
        totalAmount += total;
        
        checkoutCart.innerHTML += `<tr>
            <td><img src="${item.hinh}" height="80px"></td>
            <td>${item.ten}</td>
            <td>${item.gia}</td>
            <td>${item.soluong}</td>
            <td>${total}</td>
        </tr>`;
    });

    checkoutCart.innerHTML += `<tr>
        <td colspan="4" style="text-align: right; font-weight: bold;">Tổng cộng:</td>
        <td>${totalAmount} đ</td>
    </tr>`;
}

// Xử lý xác nhận thanh toán
document.getElementById("checkoutForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    // Thông tin thanh toán
    var orderDetails = {
        name: name,
        address: address,
        phone: phone,
        paymentMethod: paymentMethod,
        cart: cart,
        totalAmount: cart.reduce((sum, item) => sum + (item.gia * item.soluong), 0)
    };

    // Xóa giỏ hàng sau khi thanh toán
    localStorage.removeItem("cart");
    alert("Đặt hàng thành công! Cảm ơn bạn đã mua hàng.");
    
    // Điều hướng về trang chủ hoặc trang cảm ơn
    window.location.href = "index.html";
});

// Hiển thị giỏ hàng khi tải trang
displayCheckoutCart();
