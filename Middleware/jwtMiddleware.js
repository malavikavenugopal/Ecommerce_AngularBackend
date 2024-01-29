const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next) => {
    try {

        const token = req.headers['authorization'].split(" ")[1]
        console.log(token);

        const jwtResponse = jwt.verify(token, "supersecretkey1234")
        console.log(jwtResponse);

        req.payload = jwtResponse.userId
        next()
    }
    catch (err) {
        res.status(408).json('Authorization Failed.. Please Login')
    }


}
module.exports = jwtMiddleware