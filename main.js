// Using fetch() API
const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src = "https://taniarascia.github.io/sandbox/ghibli/logo.png";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

async function displayData() {
  const url = "https://ghibliapi.herokuapp.com/films";
  await fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach(movie => {
        //create a div with a card
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        // create a h1 and set the text content to the film's title
        const h1 = document.createElement("h1");
        h1.textContent = movie.title;

        //create a p and set the text content to the film's description
        const p = document.createElement("p");
        movie.description = movie.description.substring(0, 300); //Limits to 300 chars
        p.textContent = `${movie.description}...`; // End with an ellipses

        //append the card to the container element
        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
      });
    })
    .catch(err => {
      console.log(`Something went wrong... \n ${err}`);
    });
}
displayData();
