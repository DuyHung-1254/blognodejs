const path = require('path');
const express = require('express') // nạp thư viện vào : là thư viện nãy vừa cài
// npm install express -> lưu về node_modules -> gồm các thư viện phục thuộc
const app = express();  // gọi tới express -> trả về 1 đối tượng -> là 1 đối tượng để xây dựng ra website
const port = 3000;     // run trên port nào
const morgan= require('morgan');
const { engine } = require ('express-handlebars');
app.use(express.static(path.join(__dirname, 'public'))); // cấu hình các tệp tĩnh, khi yêu cầu http gửi đến máy chủ express -> nếu đg dẫn trùng thì nó sẽ hiển thị
                                                        // sẽ gửi tập tin đó lên trình duyệt 


// http logger : show http
app.use(morgan("combined"));

// template engine:
app.engine('handlebars',engine());  // app này sẽ use handlebars, name là handlebars -> thả thư viện vòa 
app.set('view engine','handlebars');  // set app sẽ use view enghine

app.set('views',path.join(__dirname,'resources/views')); //__dirname : nó sẽ lấy đường dẫn file index : đến src

console.log("path:" ,path.join(__dirname,'resources/views') )

// / : router  : arrow function : 

// : function(req, rest) {
//     return res.send("hello")
// }

// / : định nghĩa tuyến đường: ra browser thì phải ghi là : localhost:3000/trangchu
// Khi có yêu cầu get gửi đến đường dẫn kia -> hàm callback đc gọi -> sẽ response lại "hello" cho người dùng
app.get('/view', (req, res) => {

  // khi user ấn vào đường link // trang chủ thì sẽ gửi yêu cầu lên server và gửi về đoạn send kia
  // viết cả 1 web vô đây - như thế khó lắng nhằng -> sử dụng template engines(handlebars) 
  res.render("views")

})


app.get('/home', (req, res) => {

  // khi user ấn vào đường link // trang chủ thì sẽ gửi yêu cầu lên server và gửi về đoạn send kia
  // viết cả 1 web vô đây - như thế khó lắng nhằng -> sử dụng template engines(handlebars) 
  res.render("home")

})



// khởi tạo từ express, nghe cổng 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//nodemon : khi mà thay đổi source code thì phải dừng server lại rồi load lại thì mới update
// nodemon cho phép không cần stop server 
