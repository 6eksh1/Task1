const router = require("express").Router();
const Order = require("../models/Order");

router.post("/place", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json({ message: "Order placed successfully" });
});

module.exports = router;
