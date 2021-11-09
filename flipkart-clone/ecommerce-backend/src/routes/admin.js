const express = require('express')
const router = express.Router()
const { signup,signin } = require('../controller/admin/admin_auth')
const {requireSignin}=require('../common-middleware.js/index')
router.post('/admin/signup', signup)
router.post('/admin/signin', signin)
router.get('/admin/profile',requireSignin, (req,res)=>{
res.status(200).json({user:"welcome to Admin profile"})
})




module.exports = router