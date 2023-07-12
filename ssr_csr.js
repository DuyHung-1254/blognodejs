// server side redering : Lấy thẳng từ database -> trả về html ... -> chạy SEO -> reload lại trang ( đẩy lại từ db lên ) 
// ssr trả về html đọc và browser render ra 
// bot GG đọc text -> làm SEO -> biết web đấy đang làm gì nên làm SEO đc -> 



// client side redering : đọc file js để render ra html -> chỉ trả về thẻ main or div trống( 1 chút ssr thôi ) -> 
// -> từ file js -> append vào thẻ div, main 
// render phía client : nhẹ, mượt -> chỉ tỉa thêm phần nó cần -> k có reload lại
// csr : Nó không có text ở sẵn source nên nó không làm SEO được 


// : lần truy caapjd đầu tiên ssr nhanh hơn csr : ssr trả về html -> brwoser đọc và render ra ( first time -> fast)
//                                                csr : phải đọc file js -> js thực thi xong mới append vào file main ( first time : slow)   

// Lần thứ 2 : ssr : thì vẫn reload lại từ đầu-> gửi request -> nhận html -> render ( load lại tất cả)
//             csr : load cái nào rồi thì giữ nguyên nếu nó không thay đổi -> load header thì sang trang khác có header thì header vẫn thế, khôngload