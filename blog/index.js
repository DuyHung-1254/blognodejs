const express = require('express') // nạp thư viện vào : là thư viện nãy vừa cài
// npm install express -> lưu về node_modules -> gồm các thư viện phục thuộc
const app = express()  // gọi tới express -> trả về 1 đối tượng -> là 1 đối tượng để xây dựng ra website
const port = 3000     // run trên port nào

// / : router  : arrow function : 

// : function(req, rest) {
//     return res.send("hello")
// }

// / : định nghĩa tuyến đường: ra browser thì phải ghi là : localhost:3000/trangchu
// Khi có yêu cầu get gửi đến đường dẫn kia -> hàm callback đc gọi -> sẽ response lại "hello" cho người dùng
app.get('/loi-roi', (req, res) => {
  var x = 1;
  var y = 1 + x;
  var z = "test";

  res.send('Hello World!')

})


// khởi tạo từ express, nghe cổng 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//nodemon : khi mà thay đổi source code thì phải dừng server lại rồi load lại thì mới update
// nodemon cho phép không cần stop server 
