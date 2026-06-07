const { v4: uuidv4 } =require("uuid");

const traceMiddleware = (req, res, next) => {

    req.traceId = uuidv4();

    next();
};


module.exports=traceMiddleware