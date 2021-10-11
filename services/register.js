const bcrypt = require("bcryptjs");
const User = require("../model/User");

module.exports = async (req, res) => {
  const { username, password: plainTextPassword } = req.body;

  if (!username || typeof username !== "string") {
    return res.json({ status: "error", error: "Invalid Username" });
  }
  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.json({ status: "error", error: "Invalid password" });
  }
  if (plainTextPassword.length < 5) {
    return res.json({
      status: "error",
      error: "Password too small. Should be atleast 6 characters",
    });
  }
  const password = await bcrypt.hash(plainTextPassword, 10);
  try {
    // const response =await User.create({
    //   username,password
    // })
    const user = new User({
      username,
      password,
    });
    const response = await user.save();
    res.json({ status: "ok" });
  } catch (error) {
    if (error.code === 11000) {
      return res.json({ status: "error", error: "User already exists" });
    }
    throw error;
  }
};
