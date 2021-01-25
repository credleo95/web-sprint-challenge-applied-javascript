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
  articleHeadline.textContent = "placeholder"
  articleCard.appendChild(articleHeadline);

  const articleAuthor = document.createElement("div");
  articleAuthor.classList.add("author");
  articleCard.appendChild(articleAuthor);

  const imageContainer = document.createElement("div");
  articleAuthor.appendChild(imageContainer);
  imageContainer.classList.add("img-container");
  const authorImage = document.createElement("img");
  authorImage.src = "##"
  articleAuthor.appendChild(authorImage);

  const nameAuthor = document.createElement("span");
  nameAuthor.textContent = "placeholder"
  articleCard.appendChild(nameAuthor);
  
  
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
     
  const cardURL = axios.get(`https://lambda-times-api.herokuapp.com/articles`)
cardURL
.then( response => {
   const articleObj = response.data.articles ;
   articleObj.forEach((item , index) => {
     console.log(articleObj.item[index]);
   })

  console.log("It's working!")
})
.catch(error => {
  console.log("Error:", err)
})

const err = "It's not working. Try again."
}



export { Card, cardAppender }
