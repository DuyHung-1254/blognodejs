const newsRouter = require('./news.js');
const girlsRouter = require("./girls.js");
const sitesRouter = require("./sites.js");
function route(app){

  // sử dụng cái path này và truyền vào cái newRouter
  app.use('/news',newsRouter); // mỗi khi truy cập vào cái path news thì sẽ chạy cái newsRouter


  // sử dụng thằng girlsRouter : nếu mà nó match url có /girls
  app.use("/girls",girlsRouter); 


  app.use('/',sitesRouter);


  
}

module.exports = route;


