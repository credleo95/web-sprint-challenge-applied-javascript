import axios from "axios"
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const articleCard = document.createElement("div");
  articleCard.classList.add("card");
  const articleHeadline = document.createElement("div");
  articleHeadline.classList.add("headline");
  articleHeadline.textContent = article.headline
  articleCard.appendChild(articleHeadline);
  articleCard.addEventListener("click", () => {console.log(article.headline)})

  const articleAuthor = document.createElement("div");
  articleAuthor.classList.add("author");
  articleCard.appendChild(articleAuthor);

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");
  articleAuthor.appendChild(imageContainer);
  const authorImage = document.createElement("img");
  authorImage.src = article.authorPhoto
  imageContainer.appendChild(authorImage);

  const nameAuthor = document.createElement("span");
  nameAuthor.textContent = article.authorName
  articleAuthor.appendChild(nameAuthor);
  
  
  return articleCard

}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardContainer = document.querySelector(selector);
     

  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
    .then( response => {
      const articleObj = response.data.articles ; 
      const articleInfo = Object.values(articleObj)
      for(let i = 0; i <= articleInfo.length; i++){
        const array = articleInfo[i];
        array.forEach((item) => {
          cardContainer.appendChild(Card(item));
        })
      }
    })
    .catch( error => {
      console.log("Error:", error);
    })
}


// const error = "Something's not working"


export { Card, cardAppender }
