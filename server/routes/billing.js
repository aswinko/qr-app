const router = require("express").Router()
const Billing = require("../modals/billing.modal")


router.route('/login').get((req,res) => {
Billing.findOne({email:req.body.email})
.then((billingUser ) => {
    if(billingUser){
        return res.status(400).json({email:"Email already exists"})
    }else{
        return res.status(200).json({message:"Welcome"})
    }
})
})


router.route('/add').post((req,res) => {
    Billing.findOne({email:req.body.email})
    .then((billingUser) => {
        if(billingUser){
            return res.send(400).json({email:"Email already exists"})

        }else{
            const newBillingUser = new Billing({
                username:req.body.username,
                email:req.body.email,
                password:req.body.password
            })
            newBillingUser.save()
            return res.status(200).json({message:"User added"})
        }
    })
})

module.exports = router