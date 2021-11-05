exports.getHomepage = (req, res, next) => {
  res.render("private/main", {
    pageTitle: "UNOM Home",
  });
};
