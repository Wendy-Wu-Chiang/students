const AuthorController = require("../controllers/author.controllers");

module.exports = (app) => {
  app.post("/api/author", AuthorController.addAuthor);
  app.get("/api/author", AuthorController.getAllAuthor);
  app.get("/api/author/:_id", AuthorController.getAuthorById);
  app.put("/api/author/:_id", AuthorController.updateAuthor);
  app.delete("/api/author/:_id", AuthorController.deleteAuthor);
};
