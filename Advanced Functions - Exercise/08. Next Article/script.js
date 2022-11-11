function getArticleGenerator(articles) {
  return () => {
    if (articles.length > 0) {
      let container = document.getElementById("content");
      let articleElement = document.createElement("article");
      let articleText = articles.shift();
      articleElement.innerText = articleText;
      container.appendChild(articleElement);
    }
  };
}
