const main = {
    index:(req,res)=>{
        res.render('index');
    },
    about:(req,res)=>{
        res.render('about');
    },
    contact:(req,res)=>{
        res.render('contact-us');
    },
    shop:(req,res)=>{
        res.render('shop');
    },
    recentproducts:(req,res)=>{
        res.render('recentproducts');
    },
    trendy:(req,res)=>{
        res.render('trendy');
    },
    photos:(req,res)=>{
        res.render('photos');
    },
    availableflowers:(req,res)=>{
        res.render('availableflowers');
    },
    productdetails:(req,res)=>{
        res.render('productdetails');
    },
    examples:(req,res)=>{
        res.render('examples');
    }
};

module.exports = main;