const Author = require("../models/author.model");

const addAuthor = (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => {
      console.log(newAuthor);
      res.json(newAuthor);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

const getAllAuthor = (req, res) => {
  Author.find()
    .then((allAuthor) => res.json(allAuthor))
    .catch((err) => console.log(err));
};

const getAuthorById = (req, res) => {
  Author.findOne({ _id: req.params._id })
    .then((oneAuthor) => res.json(oneAuthor))
    .catch((err) => console.log(err));
};

const updateAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params._id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedAuthor) => res.json(updatedAuthor))
    .catch((err) => res.status(400).json(err));
};

const deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params._id })
    .then((result) => res.json(result))
    .catch((err) => res.json({ message: "delete not success", error: err }));
};
module.exports = {
  addAuthor,
  getAllAuthor,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
};
