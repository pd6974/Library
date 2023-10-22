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
deleteButton.forEach(deleteButton => deleteButton.addEventListener('click', () =>
{
    const divs = document.querySelectorAll('.gridDiv');
    for (i = 0; i < divs.length; i++) {
        if (divs[i].dataset.catalogue == deleteButton.dataset.catalogue){
            divs[i].remove();
            myLibrary.splice(i, 1);

        }
    }

    console.log(myLibrary);
}
)); 


const checkbox = document.querySelectorAll('input[type="checkbox"]')
checkbox.forEach(checkbox => checkbox.addEventListener('click', () =>
{
    if (checkbox.checked) {
        const location = checkbox.parentElement.dataset.catalogue;
        myLibrary[location].read = true;
        console.log(myLibrary);
    } else {
        const location = checkbox.parentElement.dataset.catalogue;
        myLibrary[location].read = false;
        console.log(myLibrary);
    }
}
));

//takes form entries and puts them into the array
 function processForm(event) {
    event.preventDefault();
    const form = document.querySelector('form');
    const data = Object.fromEntries(new FormData(form).entries());
    console.log(data);
    console.log(data.Read);
    if (data.Read == "Read") {
        data.Read = true;
    } else {
        data.Read = false;
    }
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

//change the read status in library
function updateRead(id, update) {
    
}

function changeDesc( value, desc ) {
    for (var i in projects) {
      if (projects[i].value == value) {
         projects[i].desc = desc;
         break; //Stop this loop, we found it!
      }
    }
 }


//brings up the form
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
        gridDiv.dataset.catalogue = i;
        
        for (const property in myLibrary[i]) {

            var p = document.createElement('p');
            gridDiv.appendChild(p);
            const label = document.createElement('label');
            const input = document.createElement('input');

            if (myLibrary[i][property] == true) {
                p.textContent += "Read?"
                label.dataset.catalogue = i;
                p.appendChild(label);
                label.classList.add('switch');
                const newLabel = document.querySelector("label[data-catalogue=" + CSS.escape(i) + "]"); 
                console.log(newLabel);
                newLabel.appendChild(input);
                input.setAttribute('type', 'checkbox');
                input.click();
            } else if (myLibrary[i][property] == false) {
                p.textContent += "Read?"
                label.dataset.catalogue = i;
                p.appendChild(label);
                label.classList.add('switch');
                const newLabel = document.querySelector("label[data-catalogue=" + CSS.escape(i) + "]");
                console.log(newLabel);
                newLabel.appendChild(input);
                input.setAttribute('type', 'checkbox');
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
            const label = document.createElement('label');
            const input = document.createElement('input');

            if (a[property] == true) {
                p.textContent += "Read?"
                label.dataset.catalogue = gridDiv.dataset.catalogue;
                p.appendChild(label);
                label.classList.add('switch');
                const newLabel = document.querySelector("label[data-catalogue=" + CSS.escape(gridDiv.dataset.catalogue) + "]"); 
                console.log(newLabel);
                newLabel.appendChild(input);
                input.setAttribute('type', 'checkbox');
                input.click();

            
            } else if (a[property] == false) {
                p.textContent += "Read?"
                label.dataset.catalogue = gridDiv.dataset.catalogue;
                p.appendChild(label);
                label.classList.add('switch');
                const newLabel = document.querySelector("label[data-catalogue=" + CSS.escape(gridDiv.dataset.catalogue) + "]");
                console.log(newLabel);
                newLabel.appendChild(input);
                input.setAttribute('type', 'checkbox');

            } else {
                p.textContent += `${a[property]}`
                }
        }  
        const button = document.createElement('button');
        gridDiv.appendChild(button);
        button.classList.add('delete');
        gridDiv.dataset.catalogue = myLibrary.length - 1;
        button.textContent = "Delete";    
    }
