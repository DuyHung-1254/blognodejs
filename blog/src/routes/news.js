// sử lý route về tin tức đưa vô 1 file riêng 

const express = require('express'); 
const router = express.Router();

const newController = require("../app/controllers/NewsControllers.js");


// để cái này chạy trc, nếu cái này k có thì sẽ chạy về trang news
// nếu để /:plug: thì để tên :news/[cái gì nó cũng chạy vào trang show]
router.use('/show',newController.show); // / là path tý truyền vào, index là cái function(req,res) => render('') đấy 

// đến đây sẽ chạy để render ra trang news, express sẽ kiểm tra bên ngoài kia và biết là đang truyền 1 route
// / trống là do bên ngoài truyền vào r ồi 
router.use('/',newController.index); // / là path tý truyền vào, index là cái function(req,res) => render('') đấy 





module.exports = router;