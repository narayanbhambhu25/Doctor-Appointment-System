const JWT = require("jsonwebtoken");

module.exports = async (req,res,next) => {
    const token = req.headers["authorization"].split(" ")[1]     // token exp: Bearer "ffgvhbjnjhg" here second item is token so we use arr[1]                                          this is normal function which go further "next" compaer to normal callback function
    
    JWT.verify(token,process.env.JWT_SECRET,(err,decode) => {   // for token verification 
        
        try {
            
            if(err){
                return res.status(200).send({
                    message: "Auth Failed",
                    succes: false
                });
            } else{
                req.body.userId = decode.id;
                next();
            }

        } catch (error) {
            console.log(error);
            res.status(401).send({
                message: "Auth Failed",
                success: false,
            });
        }
        
        
    })
}