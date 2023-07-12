// data center : nơi đặt máy chủ vật lý 
// Gửi 1 yêu cầu thì nó sẽ chạy lên data center, dựa vào urlr để bt nên trả về cái gì
// nó sẽ trả về 1 đoạn mã source code và browser sẽ đọc mà render ra 

// sử dụng phương thức để gửi yêu cầu lên server

// request url : yêu câuf
// request method  : phuong thức : get , post : gửi dữ liệu đi 
// state code : 200
// remote address : .172..:443 ( cổng )


// response header : phản hồi : sau khi máy chủ trả về dữ liệu 
// request header : thông tin yêu cầu gửi đi 

// bên ngoài phòng bì thôi ( meta )


// reponse : nhận mã html ( raw - dạng chuỗi )
// tình duyệt đọc và render ra màn hình 

// http response nhận được : 

/*
    HTTP/1.1 200 OK  // gioa thức : http , version : 1.1 , mã phản hồi : 200, statas : oke ( ổn cho mã 200)
    Date: Mon, ngày 23 tháng 5 năm 2005 22:38:34 GMT
    Content-Type: text/html; charset=UTF-8
    Content-Encoding: UTF-8
    Content-Length: 138
    Last-Modified: Wed, 08 Jan 2003 23:11:55 GMT
    Server: Apache/1.3.3.7 (Unix) (Red-Hat/Linux)
    ETag: "3f80f-1b6-3e1cb03b"
    Accept-Ranges: bytes
    Connection: close

    <html>
    <head>
    <title>An Example Page</title>
    </head>
    <body>
    Hello World, this is a very simple HTML document.
    </body>
    </html>

*/

// mã : 
// 100 : infor
// 200 : thành công
// : 300 đầu điều hướng 
// 304 : not modified 
// 400 : lỗi client 
// 500 : lỗi server 
