class NewsController {
    // [GET]/news
    
    index(req,res){ // function 
        res.render('news');
    }

    //[GET]/show/:slug: biến động   : views/show 
                                    // view/course
    show(req,res){ // function
        res.render('shows');
    }


}

// khởi tạo 1 đối tượng 
module.exports = new NewsController;