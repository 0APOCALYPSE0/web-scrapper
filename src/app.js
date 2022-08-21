const feedDisplay = document.querySelector("#feed");

fetch("http://localhost:8000/results")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((article) => {
      const articleItem =
        `<div><h3>` + article.title + `</h3><a href=${article.url} target="__blank">` + article.url + `</a></div>`;
      feedDisplay.insertAdjacentHTML("beforeend", articleItem);
    });
  })
  .catch((err) => console.log(err));
