const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");

const PORT = process.env.PORT || 8000;
const app = express();
const url = "https://www.theguardian.com/uk";

app.get("", (req, res) => {
  const articles = [];
  axios.get(url).then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    $('.fc-item__title').each(function(){
      const title = $(this).text();
      const href = $(this).find("a").attr("href");
      articles.push({ title, url:href });
    })
    res.status(200).json(articles);
  })
  .catch(err => console.log(err));
})

app.listen(PORT, () => {
  console.log("Server running on PORT: ",PORT);
});