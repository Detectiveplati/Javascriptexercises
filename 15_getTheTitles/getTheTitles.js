const getTheTitles = function(books) {

// Initialize array
const titles = [];
// For books.length(amount of books in class), push each title into titles[].

for (let i = 0; i < books.length; i++) {
    titles.push(books[i].title);
}
return titles;
};

// Do not edit below this line
module.exports = getTheTitles;



// in array : books
// what is the title of the first book? 
// books[0].title is the title of the first book
// books[0].author is the name of the author of the first book

// books[1].title is the title of the second book
// books[1].author is the name of ther author of the second book

// so to get 1 title
//  insert function(books)
// bookOneTitle = books[0].title
// bookTwoTitle = books[1].title

