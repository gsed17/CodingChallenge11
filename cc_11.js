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
//Test for Task 1
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

//Test for Task 2
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

// Test for Task 3
const library = new Library();
library.addBook(book1);
library.listBooks(); // Expected output: Details of "The Great Gatsby"
console.log("\n");

    // Task 4 - Implementing Book Borrowing

    // Method to lend a book to a borrower
    lendBook(borrowerId, isbn) {
        // Finds the book by ISBN
        let book = this.books.find(book => book.isbn === isbn);
        
        // Finds the borrower by ID
        let borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId); 
        
        // Decreases the number of available copies
        if (book && book.copies > 0 && borrower) {
            book.updateCopies(-1);
            
            // Adds the book to the borrower's borrowed books list
            borrower.borrowBook(book.title);
        } else {
            console.log("Book not available");
        }
    }
    // Test for Task 4
library.addBorrower(borrower1);
library.lendBook(201, 123456);
console.log(book1.getDetails()); // Expected output: Copies reduced
console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]
console.log("\n");

    // Task 5 - Implementing Book Returns

    // Method to return a book to the library
    returnBook(borrowerId, isbn) {
        // Finds the book by ISBN
        let book = this.books.find(book => book.isbn === isbn);
        
        // Finds the borrower by ID
        let borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId);
        
        if (book && borrower && borrower.borrowedBooks.includes(book.title)) {
            // Increases the number of available copies
            book.updateCopies(1);
            
            // Removes the book from the borrower's borrowed books list
            borrower.returnBook(book.title);
        } else {
            console.log("Book not found in the borrower's records.");
        }
    }
// Test for Task 5
library.returnBook(201, 123456);
console.log(book1.getDetails()); // Expected output: Copies restored
console.log(borrower1.borrowedBooks); // Expected output: []
console.log("\n");