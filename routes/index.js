const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get('/signup',(req,res)=>{
  res.render('register')
})

router.get("/change-password", (req, res) => {
  res.render("change-password");
});

module.exports = router;