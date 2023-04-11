const router = require("express").Router()
const Kitchen = require("../modals/kitchen.modal")

const bcrypt = require("bcrypt")
const rounds = 10
const jwt = require("jsonwebtoken")
const tokenSecret = "my-token-secret"



// router.route('/').get((req,res)=> {
//     Kitchen.find()
//     .then(kitchenUsers => res.json(kitchenUsers)) 
//     .catch(err => res.status(400).json('Error:' + err))
// })


// router.route('/add').post((req,res) => {
//     Kitchen.findOne({email:req.body.email})
//     .then ((kitchenUser) => {

//         if(kitchenUser){
//             return res.status(400).json({ email:"Email already exist"})
//         }else {
//             const newKitchenUser = new Kitchen({
//                 username:req.body.username,
//                 email:req.body.email,
//                 password:req.body.password,
//             })
//             newKitchenUser.save()
//             return res.status(200).json({ message:"User added"})
//         }
//     })
// })



router.route('/login').get((req,res) => {
    Kitchen.findOne({
        email:req.body.email
    })
    .then((kitchenUser) => {
        if(kitchenUser){
            return res.status(400).json({email:"Email alredy exists"})
        }else {
            return res.status(200).json({message:"Welcome"})
        }
    })
})

// router.route('/log').get((req,res) => {

//     //res.send("hellojjjj")
//     Kitchen.find( {username:req.body.username,email:req.body.email})
//     .then((kitchenUser) => {
//         if (!kitchenUser) res.status(404).json({error:"no user with this email found"})
//         else {
//             bcrypt.compare(req.body.password,kitchenUser.password,(error,match) => {
//                 if(error) res.status(500).json(error)
//                 else if (match) res.status(200).json({token:generateToken(kitchenUser)})
//                 else res.status(403).json({error:"Passwords do not match"})
//             })
//         }
//     })
    
// })

// router.route('signup').post((req,res) => {
//     bcrypt.hash(req.body.password,rounds,(error,hash) => {
//         if(error) res.status(500).json(error)
//         else{
//             const newKitchenUser = Kitchen({email:req.body.email,password:hash})
//             newKitchenUser.save()
//             .then(user => {
//                 res.status(200).json({token:generateToken(user)})
//             })
//             .catch(error => {
//                 res.status(500).json(error)
//             })
//         }
//     })
    
// })


// function generateToken(user){
//     return jwt.sign({data:user},tokenSecret,{expiresIn:"24h"})
// }



module.exports = router