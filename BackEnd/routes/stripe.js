const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPR_KEY)


router.post("/payment", (req, res)=>{
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency:"india"
        },
        (stripeErr, stripeRes)=>{
            if(striprErr){
                res.status(500).json(stripeErr)
            } else{
                res.status(200).json(stripeRes)
            }
        }

    )
});

module.exports = router;