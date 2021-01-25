const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const articleHeader = document.createElement("div");
  articleHeader.classList.add("header");
  const articleDate = document.createElement("span");
  articleDate.classList.add("date");
  articleDate.textContent = date
  articleHeader.appendChild(articleDate);
  const articleTitle = document.createElement("h1");
  articleTitle.textContent = title 
  articleHeader.appendChild(articleTitle);
  const articleTemp = document.createElement("span");
  articleTemp.textContent = temp
  articleHeader.appendChild(articleTemp);
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  selector.appendChild(Header);
}

export { Header, headerAppender }
