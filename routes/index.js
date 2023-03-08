const express = require("express");
const router = express.Router();
const passport = require("passport");

// data import
const data = require("../data/data");

/* login */
router.get("/", checkAuth, (req, res) => {
  res.render("index", { data: data.data });
});

router.get("/login", checkNotAuth, (req, res) => {
  res.render("login");
});
router.post(
  "/login",
  checkNotAuth,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

router.delete("/logout", (req, res) => {
  req.logOut((e) => {
    console.log(e);
  });
  res.redirect("/");
});

function checkAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}
function checkNotAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}
module.exports = router;
