import axios from "axios"
const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const topicsContainer = document.createElement("div");
  topicsContainer.classList.add("topics")
  const tabs = document.createElement("div");
  tabs.classList.add("tab");
  topicsContainer.appendChild(tabs);
  tabs.textContent = topics 
  
   
  return topicsContainer
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const tabsContainer = document.querySelector(selector)
  URL
.then( response => {
  const topicsArray = response.data.topics
  topicsArray.forEach(item => { 
     let tab = Tabs(item)
     tabsContainer.appendChild(tab)
  })
  
      console.log("It's working");
  })
.catch( error => {
  console.log("Error:", err);
})
console.log(tabsContainer);
return tabsAppender ;
}
const URL = axios.get(`https://lambda-times-api.herokuapp.com/topics`)



const err = "Something is wrong. Try again."


export { Tabs, tabsAppender }
