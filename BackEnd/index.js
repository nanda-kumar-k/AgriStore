//console.log("hell0")

const { createProxyMiddleware } = require('http-proxy-middleware');

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRouter = require("./routes/user")
const authRouter = require("./routes/auth")
const productRouter = require("./routes/product")
const cartRouter = require("./routes/Cart")
const orderRouter = require("./routes/Order")
const cors = require('cors')

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
)
.then(()=>console.log("Db connection Successfull"))
.catch((err)=>{
    console.log(err);
});

app.use(cors())
app.use(express.json()); // it is imp to add because to send the data in form of json formate we should give json() before the api/users
app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/products", productRouter)
app.use("/api/carts", cartRouter)
app.use("/api/orders", orderRouter)

/*
first test should done
app.get("/pr", ()=>{
    console.log("test is successfull")
})
*/




app.listen(process.env.PORT  || 5000, ()=>{
    console.log("Backend sever is running")
})