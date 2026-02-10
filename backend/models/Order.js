const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userEmail: String,
  items: Array,
  totalAmount: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);
