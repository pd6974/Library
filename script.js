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

//displays books in main section
displayLibrary();

//access and display form
const formButton = document.querySelector('.formButton');
formButton.addEventListener('click', () => {
    displayForm();
})

//process the form
const formDiv = document.querySelector('.form');
const submit = document.querySelector('.submit');
submit.addEventListener('click', processForm);

//delete button
const deleteButton = document.querySelectorAll('.delete');
deleteButton.forEach(deleteButton => deleteButton.addEventListener('click', displayCat(deleteButton)
));

function displayCat(a) {
    console.log(a.dataset.catalogue);
} 


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
        const button = document.createElement('button');
        gridDiv.appendChild(button);
        button.classList.add('delete');
        button.dataset.catalogue = i;
        button.textContent = "Delete";

    }
}

//adds book information to the array
function addBookToLibrary(a) {
    
    myLibrary.push(a)
    console.log(myLibrary)
    const gridDiv = document.createElement('div');
    main.appendChild(gridDiv);
    gridDiv.classList.add('gridDiv');
    gridDiv.dataset.catalogue = myLibrary.length - 1;
    for (const property in a) {
            var p = document.createElement('p');
            gridDiv.appendChild(p);
            if (a[property] == true) {
                p.textContent += "Read"
            } else if (a[property] == false) {
                p.textContent += "Not Read"
            } else {
                p.textContent += `${a[property]}`
                }
        }  
        const button = document.createElement('button');
        gridDiv.appendChild(button);
        button.classList.add('delete');
        button.textContent = "Delete";    
    }
