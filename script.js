//variale to access form button
const formButton = document.querySelector('.formButton');
formButton.addEventListener('click', () => {
    displayForm();
})


const myLibrary = [
    {
    title: "The Hobbit",
    author: "JRR Tolkein",
    genre: "Fantasy",
    pages: "310",
    read: false
    },

    {
    title: "Tiny, Beautiful Things",
    author: "Cheryl Strayed",
    genre: "Memoir",
    pages: "368",
    read: true
    }
];

//library length and main section to display books
const libLength = myLibrary.length;
const main = document.querySelector('.main');
const formDiv = document.querySelector('.form')



displayLibrary();


function Book(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;

}

function displayForm() {
    formDiv.removeAttribute("hidden");
}


//function to display library
function displayLibrary() {
    for (let i = 0; i < libLength; i++) {
        const gridDiv = document.createElement('div');
        main.appendChild(gridDiv);
        gridDiv.classList.add('gridDiv');
        for (const property in myLibrary[i]) {
            var p = document.createElement('p');
            gridDiv.appendChild(p);
            p.textContent += `${myLibrary[i][property]}`

        }
            
    }

}

function addBookToLibrary() {

}
