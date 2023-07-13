class GirlsControllers {

    girl(req,res){
        res.send("This is a Page Girl");
    }

    girls(req,res){
        res.send("Rất nhiều gái");
    }
}

// khởi tạo 1 đối tượng 
module.exports = new GirlsControllers;