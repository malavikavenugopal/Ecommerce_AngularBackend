const users = require('../Model/userModel')

//to ensure proper login  and gave secret code to user
const jwt = require("jsonwebtoken")
//register -post

exports.registerController = async (req, res) => {

    const { username, email, password } = req.body

    try {

        const existingUser = await users.findOne({ email })
        if (existingUser) {

       
            res.status(406).json('Account already exists')
        }
        else {
         const newUser = new users({
            username,email,password
         })
         await newUser.save()
         res.status(200).json(newUser)
        }
    }
    catch (err) {
        console.log(err);
    }
}

exports.loginController= async(req,res)=>{

    const{email,password} = req.body
    try{
        const existingUser = await users.findOne({ email ,password})
        
        if(existingUser){


              const token =  jwt.sign({userId:existingUser._id},"supersecretkey1234")
               res.status(200).json({existingUser,token})
        }
        else{
            res.status(406).json('Incorrect Email or Password')
        }
    }
    catch (err) {
        console.log(err);
    }
}