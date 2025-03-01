// Task 1 - Creating Book Class
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }

    updateCopies(quantity) {
        this.copies += quantity;
    }
}
//Test Task 1
console.log("Task 1 Tests:");
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); // Expected output: Book details
book1.updateCopies(-1);
console.log(book1.getDetails()); // Expected output: Copies reduced by 1
console.log("\n");

// Task 2 - Creating Borrower Class
class Borrower {
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        this.borrowedBooks.push(book);
    }

    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index > -1) {
            this.borrowedBooks.splice(index, 1);
        } else {
            console.log("This book is not currently being borrowed.");
        }
    }
}

//Test Task 2
console.log("Task 2 Tests:");
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Expected output: []
console.log("\n");

// Task 3 - Creating Library Class
class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    addBorrower(borrower) {
        this.borrowers.push(borrower);
    }

    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }
}

// Test Task 3
console.log("Task 3 Tests:");
const library = new Library();
library.addBook(book1);
library.listBooks(); // Expected output: Details of "The Great Gatsby"
console.log("\n");