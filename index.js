
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PyVKVD85sh1xAUWjmsTO6DvJKZceVKwSO89ayCE0dlX1e1NJKqXTMqVZPgPE6LL6tN6aawUSSW5dFrfHHQ6aHRW00EQIbgpOh");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Yonas --yonitessu82@gmail.com");
});
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(3000, () => {
    console.log('runnig on server 3000')
})
