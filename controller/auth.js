//get register page
exports.getRegister = (req, res, next) => {
  res.render("auth/register", {
    pageTitle: "Register",
  });
};

//get login page
exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
  });
};

//get reset-password page
exports.getResetPassword = (req, res, next) => {
  res.render("auth/resetPassword", {
    pageTitle: "Reset Your Password",
  });
};
