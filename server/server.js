const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const connection = mongoose.connection
connection.once("open",() => {
    console.log("MongoDB Connection established successfully");
})
  

const kitchenRouter = require("./routes/kitchen")
const billingRouter = require("./routes/billing")

app.use("/kitchen",kitchenRouter)
app.use("/billing",billingRouter)


app.listen(port,() => {
    console.log(`Server started on port: ${port}`);
})

