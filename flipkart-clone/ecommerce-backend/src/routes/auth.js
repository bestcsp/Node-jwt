const express = require('express')
const router = express.Router()
const { signup, signin, requireSignin } = require('../controller/auth')
const { check } = require('express-validator')
const {validateSignupRequest,isRequestValidate,validateSigninRequest}=require('../validators/auth')

router.post('/signup',validateSignupRequest,isRequestValidate, signup)
router.post('/signin',validateSigninRequest,isRequestValidate, signin)
router.get('/profile', requireSignin, (req, res) => {
    res.status(200).json({ user: "welcome to user profile" })
})




module.exports = router