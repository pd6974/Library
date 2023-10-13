//variale to access form dislpay button
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
const main = document.querySelector('.main');

//access and display form
const formDiv = document.querySelector('.form');
const submit = document.querySelector('.submit');
submit.addEventListener('click', processForm);

//displays books in main section
displayLibrary();


//takes form entries and puts them into the array
 function processForm(event) {
    event.preventDefault();
    const form = document.querySelector('form');
    const data = Object.fromEntries(new FormData(form).entries());
    addBookToLibrary(new Book(data.Title, data.Author, data.Genre, data.Pages, data.Read));    
} 

function Book(title, author, genre, pages, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
    return {title, author, genre, pages, read};
}

function displayForm() {
    formDiv.removeAttribute("hidden");
}


//function to display library
function displayLibrary() {
    const libLength = myLibrary.length;
    for (let i = 0; i < libLength; i++) {
        const gridDiv = document.createElement('div');
        main.appendChild(gridDiv);
        gridDiv.classList.add('gridDiv');
        for (const property in myLibrary[i]) {
            var p = document.createElement('p');
            gridDiv.appendChild(p);
            if (myLibrary[i][property] == true) {
                p.textContent += "Read"
            } else if (myLibrary[i][property] == false) {
                p.textContent += "Not Read"
            } else {
                p.textContent += `${myLibrary[i][property]}`
                }
        }      
    }
}

//adds book information to the array
function addBookToLibrary(a) {
    
    myLibrary.push(a)
    console.log(myLibrary)
    displayLibrary();

}
