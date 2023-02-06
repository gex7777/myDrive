const mongoose = require("mongoose");
const { Schema } = mongoose.model;
const UserSchema = new Schema({
  google: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
  },
});
module.exports = mongoose.model("user", userSchema);
