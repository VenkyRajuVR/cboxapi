const mongoose = require("./index");

const User = mongoose.model("User", {
  displayName: String,
  firstName: String,
  lastName: String,
  email: String
});

module.exports = {
  User
};
