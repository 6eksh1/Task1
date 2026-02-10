const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });
  await user.save();
  res.json({ message: "Registered Successfully" });
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json("User not found");

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(400).json("Invalid password");

  res.json({ message: "Login successful" });
});

module.exports = router;
