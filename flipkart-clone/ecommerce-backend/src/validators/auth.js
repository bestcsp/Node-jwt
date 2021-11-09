const {validationResult}=require('express-validator')
const { check } = require('express-validator')


exports.validateSignupRequest = [
    check('firstname').notEmpty().withMessage('first name required'),
    check('lastname').notEmpty().withMessage('last name required'),
    check('email').isEmail().withMessage('email required'),
    check('password').isLength({ min: 8 }).withMessage('Password length should be more than 8'),
];
exports.validateSigninRequest = [
    check('email').isEmail().withMessage('email required'),
    check('password').isLength({ min: 8 }).withMessage('Password length should be more than 8'),
];

exports.isRequestValidate=(req,res,next)=>{
    const errors=validationResult(req)
    if(errors.array().length>0){
        return res.status(400).json({error:errors.array()[0].msg})
    }
    next();
}