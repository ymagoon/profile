const url = 'https://medium.com/feed/@ymagoon'
feednami.load(url)
.then(feed => {

  // add a new, empty div after the last div
  let body = document.getElementsByClassName('container')[0];
  newDiv = document.createElement('div');
  newDiv.className = 'section-white align-center';
  body.appendChild(newDiv);

  // append H2 header to the div
  let newH2 = document.createElement('h2');
  newDiv.appendChild(newH2);
  mediumText = document.createTextNode('Medium Articles');
  newH2.appendChild(mediumText);

  // append paragraph to the div
  let newP = document.createElement('p');
  newDiv.appendChild(newP);
  pText = document.createTextNode("I like to write about my random travel anecdotes. Those untold funny stories that make travel what it is. Below is my RSS feed I pulled from Medium. I have been told I'm a funny writer!");
  newP.appendChild(pText);

  // add line
  let hr = document.createElement('hr');
  newDiv.appendChild(hr);

  for(let entry of feed.entries){
    if (!(entry.categories === undefined || entry.categories.length == 0)) {

      // find the last div just created
      let div = document.getElementsByClassName('section-white align-center')
      let lastDiv = div[div.length - 1];

      // append an h3 to the div
      newH3 = document.createElement('h3');
      lastDiv.appendChild(newH3);

      // append a link to the h3 with href attribute and target attribute defined
      let newA = document.createElement('a');
      let href = document.createAttribute('href');
      href.value = entry.link
      newA.setAttributeNode(href);
      let target = document.createAttribute('target');
      target.value = '_blank'
      newA.setAttributeNode(target);

      newH3.appendChild(newA);

      // append header image to the link
      let postImg = document.createElement('img')
      let src = document.createAttribute('src')
      src.value =

      // append the title to the link
      title = document.createTextNode(entry.title);
      newA.appendChild(title);
    }
  }
})
