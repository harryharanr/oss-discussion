const User = require('../models/user');

module.exports = (router) => {

    router.post('/register',(req,res)=>{
        if(!req.body.email){
            res.json({success:false,message:'Email was not provided'});
        } else {
            if(!req.body.username){
                res.json({success:false,message:'Username was not provided'});
            } else {
                if(!req.body.password){
                    res.json({success:false,message:'Password was not provided'});
                } else {
                    let user = new User({
                        email : req.body.email,
                        username : req.body.username,
                        password : req.body.password
                    });

                    user.save((err)=>{
                        if(err){
                            res.json({ success:false , message:err});
                        } else {
                            res.json({ success:true , message:'Succcessfully saved!'});
                        }
                    });
                }
            }
        }
    });

   router.get('/getUsers',(req,res)=>{
   User.find((err,users)=>{
       if(err){
           res.json({ success : false,message : err });
       } else {
           res.json({success : true, message:users});
       }
   });
   });

    return router;
}