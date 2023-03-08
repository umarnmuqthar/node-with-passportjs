const LocalStrategy = require("passport-local").Strategy;

function initialize(passport) {
  const authenticateUser = (email, password, done) => {
    const user = {
      id: "BCT0196",
      email: "umarnmuqthar@gmail.com",
      password: "qwertyuiop",
    };
    if (email != user.email) {
      return done(null, false, { message: "There is no user with this email" });
    }
    if (password === user.password) {
      return done(null, user);
    } else {
      return done(null, false, { message: "Incorrect password" });
    }
  };
  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((user, done) => done(null, user));
}

module.exports = initialize;
