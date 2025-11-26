import jwt from 'jsonwebtoken';
import dotenv from "dotenv";


dotenv.config();


const authenticateToken = (req, res, nest) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split (' ')[1];

    if(token === null){
        return res.status(401)
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, result) =>{
        if(err){
            return res.status(403)
        }
        req.user = result,
        next()
    })
}

export default authenticateToken;

