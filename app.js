const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'https://taniarascia.github.io/sandbox/ghibli/logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

// create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

//open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    //Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            //create a div with a card
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            // create a h1 and set the text content to the flm's title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            //create a p and set the text content to the film's description
            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300); //Limits to 300 chars
            p.textContent = `${movie.description}...`; // End with an ellipses

            //append the card to the container element
            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        });
    } else {
        // console.log('Oops...Something went wrong..');
        // console.log(error);
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
}

//send request
request.send();

//TO DO  Re-write using fetch()

// fetch('https://ghibliapi.herokuapp.com/films').then( response => {
//         return response.json();
// }).then( movie => {}
//     movie.forEach(
//         console.log(movie.title);
//     );
// ).catch(err => {
//     console.log(`Something went wrong... \n ${err}`);
// });