const path = require('path');
const express = require('express') // nạp thư viện vào : là thư viện nãy vừa cài
const app = express();  // gọi tới express -> trả về 1 đối tượng -> là 1 đối tượng để xây dựng ra website
const port = 3000;     // run trên port nào
const morgan= require('morgan');
const { engine } = require ('express-handlebars');
app.use(express.static(path.join(__dirname, 'public'))); // cấu hình các tệp tĩnh, khi yêu cầu http gửi đến máy chủ express -> nếu đg dẫn trùng thì nó sẽ hiển thị
                                                        // sẽ gửi tập tin đó lên trình duyệt 

const route = require('./routes/index.js');                                                        

app.use(express.urlencoded({
  extended: true
}));


app.engine('handlebars',engine());  // app này sẽ use handlebars, name là handlebars -> thả thư viện vòa 
app.set('view engine','handlebars');  // set app sẽ use view enghine

app.set('views',path.join(__dirname,'resources/views')); //__dirname : nó sẽ lấy đường dẫn file index : đến src

console.log("path:" ,path.join(__dirname,'resources/views') )

route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

