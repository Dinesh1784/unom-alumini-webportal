const { default: axios } = require("axios");
const moment = require("moment");
//home page controller
exports.getHome = (req, res, next) => {
  res.render("common/home", {
    pageTitle: "Home",
  });
};
//news page controller
exports.getNews = (req, res) => {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=5b281bd7dc024223a85e9cbfc7a6f77c"
    )
    .then((result) => {
      res.render("common/news", {
        pageTitle: "Today's News",
        news: result.data.articles,
        moment: moment,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
//covid-19 alert page
exports.getCovidNews = (req, res, next) => {
  axios.get("https://disease.sh/v3/covid-19/countries/india").then((result) => {
    // console.log(result.data);
    res.render("common/covid", {
      pageTitle: "Covid-19 Info",
      data: result.data,
    });
  });
};
