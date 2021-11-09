const jsonwebtoken = require('jsonwebtoken')
exports.signup = (req, res) => {
    console.info("Signup Module")
    db.User.findOne({ email: req.body.email })
        .exec((err, user) => {
            if (user) return res.status(400).json({
                message: "User Already exists with email"
            })
            const { firstname, lastname, email, password } = req.body;
            const _user = new db.User({ firstname, lastname, email, password, username: Math.random().toString() ,role:"admin"})
            _user.save((err, data) => {
                if (err) return res.status(400).json({ message: err })
                else res.status(200).json({ message: "User Created Succesfully" })
            })
        })
}

exports.signin = (req, res) => {
    console.info("inside signin function")
    db.User.findOne({ email: req.body.email }, (err, user) => {
        if (err) res.status(400).json({ message: err })
        else if (user) {
            console.log("authentication match", user.authenticate(req.body.password))
            if (user.authenticate(req.body.password)&& user.role==='admin') {
                const token = jsonwebtoken.sign({ _id: user._id }, process.env.jwt_secret, { expiresIn: '1h' })
                const { _id, firstname, lastname, fullName, email,role } = user;
                res.status(200).json({
                    token: token,
                    user: { _id, firstname, lastname, fullName, email,role },
                    message: "Admin sign in Successfully"
                })
            }
            else {
                console.log(req.body)
                res.status(400).json({ message: "Password didn't match try again" })
            }
        }
        else {
            res.status(400).json({ message: "Something went Wrong" })
        }
    })
}
