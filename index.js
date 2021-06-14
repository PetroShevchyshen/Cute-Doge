const URL = "https://dog.ceo/api/breed/hound/images/random/12"

fetch(URL)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    let imageArray = data.message;
    imageArray.forEach(element => {
      createElement(element);
    });
  })


function createElement(dataArray) {
  let fatherElement = document.querySelector('.dog-collection')
  let image = document.createElement('img');
  let div = document.createElement('div');

  image.setAttribute("src", dataArray);
  div.className = "dog-collection__item";
  div.append(image);
  fatherElement.append(div);
}