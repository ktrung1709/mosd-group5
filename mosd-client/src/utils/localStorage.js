// Lưu dữ liệu vào localStorage với thời gian hiện tại
export function setItemWithExpiration(key, value, expirationMinutes) {
    const now = new Date();
    const item = {
        value: value,
        expiration: now.getTime() + expirationMinutes * 60 * 1000, // Thời gian hết hạn tính bằng mili giây
    };
    localStorage.setItem(key, JSON.stringify(item));
}

// Lấy dữ liệu từ localStorage và kiểm tra thời gian hết hạn
export function getItemWithExpiration(key) {
    const item = JSON.parse(localStorage.getItem(key));
    if (!item) {
        return null; // Không có dữ liệu cho khóa đã cho
    }
    const now = new Date();
    if (now.getTime() > item.expiration) {
        // Dữ liệu đã hết hạn, xóa nó và trả về null
        localStorage.removeItem(key);
        return null;
    }
    return item.value; // Trả về dữ liệu nếu chưa hết hạn
}

// Lưu ý: Thời gian hết hạn chỉ được tính đúng khi bạn sử dụng cùng một hệ thống múi giờ (timezone).
