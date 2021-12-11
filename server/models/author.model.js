const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema(
  {
    authorName: {
      type: String,
      required: [true, "Name is required!"],
      minlength: [2, "Name has to be at least 2 characters long!"],
    },
  },
  { timestamps: true }
);
const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;
