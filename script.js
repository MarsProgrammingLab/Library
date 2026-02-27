// Book Class to represent Book
class Book {
    constructor(title, author, pages, isbn, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isbn = isbn;
        this.status = status;
  }
}

class UserInterface {
    // static because UI class will not be instantiated
    // static displayBooks() {
    //         const booksArr = [
    //             {
    //                 title: "The Hobbit",
    //                 author: "J.R.R. Tolkien",
    //                 pages: 295,
    //                 isbn: 3444,
    //                 status: "Read"
    //             },
    //             {
    //                 title: "The Hobbit 2",
    //                 author: "J.R.R. Tolkien",
    //                 pages: 298,
    //                 isbn: 3444,
    //                 status: "Read"
    //             },
    //             {
    //                 title: "The Hobbit 3",
    //                 author: "J.R.R. Tolkien",
    //                 pages: 340,
    //                 isbn: 3444,
    //                 status: "Read"
    //             }
    //         ];

    //         const books = booksArr;

    //         books.forEach(function(book){
    //             UserInterface.addBookToList(book);
    //         });
    //     }

        static addBookToList(book) {
            const list = document.getElementById("book-entered");

            // insert table row
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.isbn}</td>
            <td><button id="toggleButton" class="toggle-button">${book.status}</button></td>
            <td><button id="deleteButton"class="delete-btn">Delete</i></i></button></td>
            `;

            list.appendChild(row);
        }

        // Toggle delete function
        static deleteBook(element) {
            if (element.classList.contains('delete-btn')) {
                element.parentElement.parentElement.remove();
            }
        }

        // Toggle status function
        static toggleStatus(element){
            if (element.classList.contains('toggle-button')) {
                 if (element.innerText.trim() === "✖") {
                    element.innerText = "✔";
                } else {
                    element.innerText = "✖";
                }
            }
        }

        static updateBookCheckBox(element) {
            if (element.classList.contains('book-checkbox')) {
                if (element.checked) {
                    element.value = "✔"
                } 
            }
        }

        static clearFields() {
            document.getElementById("title").value = "";
            document.getElementById("author").value = "";
            document.getElementById("pages").value = "";
            document.getElementById("isbn").value = "";
            document.getElementById("status").checked = false;
            document.getElementById("status").value = "✖";
        }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UserInterface.displayBooks);

// Add book from book form
document.getElementById("book-form").addEventListener("submit", function(e){
    // prevent actual submit
    e.preventDefault();
    // get form values
    const title = document.getElementById("title").value;
    const author= document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isbn = document.getElementById("isbn").value;
    const status = document.getElementById("status").value;
    
    // instantiate book
    const book = new Book(title, author, pages, isbn, status);

    // Add book to UserInterface
    UserInterface.addBookToList(book);

    // Clear fields
    UserInterface.clearFields();
});

// Event: Update checkbox when checked
document.querySelector('#book-form').addEventListener('change', function(e){
    UserInterface.updateBookCheckBox(e.target);
});

// Event: Update status of book in table when clicked
document.querySelector('#library-list').addEventListener('click', function(e){
    UserInterface.toggleStatus(e.target);
});

// Event: Delete book
document.querySelector('#library-list').addEventListener('click', function(e){
    UserInterface.deleteBook(e.target);
});
