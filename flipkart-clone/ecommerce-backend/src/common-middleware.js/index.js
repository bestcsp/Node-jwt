

exports.requireSignin = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    const user = jsonwebtoken.verify(token, process.env.jwt_secret)
    req.user = user
    next()

}