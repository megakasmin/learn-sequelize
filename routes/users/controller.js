const { User } = require("../../models");

module.exports = {
  userRegistration: (req, re) => {
    userData = {
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_password: req.body.user_password
    };

    User.create(useData).then(user => {
      res.send("Registration success");
    });
  }
};
