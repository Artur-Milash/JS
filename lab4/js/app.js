let array;


// Task 1

const task1 = (array) => { 
    console.log(array.toString().concat(' - Start'));

    array.pop()
    console.log(array.toString().concat(' - No last'));

    array.unshift("Test6");
    console.log(array.toString().concat(' - New first'));

    array.sort().reverse();
    console.log(array.toString().concat(' - Reversed'));

    console.log(array.indexOf("test1").toString().concat(' - Test1 index'));
}

console.log('Task - 1\n\n');
task1(array = ["test1", "test2", "test3", "test4", "test5"]);


// Task 2

const task2 = (array) => { 
    console.log(array.toString().concat(' - Start'));

    let longest = array.reduce((a, b) => a.length > b.length ? a : b);
    let shortest = array.reduce((a, b) => a.length < b.length ? a : b);
    console.log(longest.concat(' - Longest'));
    console.log(shortest.concat(' - Shortest'));

    let array1 = array.filter(item => item.includes("Blue"));
    console.log(array1.toString().concat(' - Blue elements'));

    let joinedString = array.join(', ');
    console.log(joinedString.concat(' - Joined'));
}

console.log('\nTask - 2\n\n');
task2(array = ["Red", "Blue", "Green", "Yellow", "Orange", "White", "Blue"]);


// Task 3

const task3 = () => {
    let employees = [
        { name: "Name1", age: 30, position: "Dev" },
        { name: "Name2", age: 25, position: "Pos2" },
        { name: "Name3", age: 35, position: "Pos3" },
        { name: "Name4", age: 28, position: "Pos1" },
        { name: "Name5", age: 40, position: "Dev" }
    ];

    console.log(employees.map(e => e.name).toString().concat(' - Start'));

    employees.sort((a, b) => a.name.localeCompare(b.name));
    console.log(employees.map(e => e.name).toString().concat(' - Sorted'));

    let developers = employees.filter(employee => employee.position === "Dev");
    console.log(developers.map(e => e.name).toString().concat(' - Dev'));

    employees = employees.filter(employee => employee.age < 40);
    console.log(employees.map(e => e.name).toString().concat(' - No 40'));

    employees.push({ name: "Name6", age: 22, position: "Pos5" });
    console.log(employees.map(e => e.name).toString().concat(' - Updated'));
}

console.log('\nTask - 3\n\n');
task3();


// Task 4

const task4 = () => { 
    let students = [
        { name: "Name1", age: 24, course: 6 },
        { name: "Name2", age: 19, course: 2 },
        { name: "Name3", age: 17, course: 1 },
        { name: "Name4", age: 20, course: 3 },
        { name: "Name5", age: 19, course: 2 },
        { name: "Олексій", age: 21, course: 4 }
    ];

    console.log(students.map(e => e.name).toString().concat(' - Start'));

    students = students.filter(student => student.name !== "Олексій");
    console.log(students.map(e => e.name).toString().concat(' - No "Олексій"'));

    students.push({ name: "Name6", age: 21, course: 4 });
    console.log(students.map(e => e.name).toString().concat(' - Updated'));

    students.sort((a, b) => b.age - a.age);
    console.log(students.map(e => e.name).toString().concat(' - Sorted'));

    let filtOfThriedCourse = students.filter(student => student.course === 3);
    console.log(filtOfThriedCourse.map(e => e.name).toString().concat(' - 3d year'));
}

console.log('\nTask - 4\n\n');
task4();


// Task 5

const task5 = () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(numbers.toString().concat(' - Start'));

    let squaredNumbers = numbers.map(num => num * num);
    console.log(squaredNumbers.toString().concat(' - Square'));

    let evenNumbers = squaredNumbers.filter(num => num % 2 === 0);
    console.log(evenNumbers.toString().concat(' - Even'));

    let sumOfNumbers = evenNumbers.reduce((acc, num) => acc + num, 0);
    console.log(sumOfNumbers.toString().concat(' - Even sum'));

    let additionalNumbers = [11, 12, 13, 14, 15];
    numbers = numbers.concat(additionalNumbers);
    console.log(numbers.toString().concat(' - Updated'));

    numbers.splice(0, 3);
    console.log(numbers.toString().concat(' - No first 3'));
}

console.log('\nTask - 5\n\n');
task5();


// Task 6

const libraryManagement = () => {
    let books = [
        { title: "Book1", author: "Author1", genre: "Genre1", pages: 200, isAvailable: true },
        { title: "Book3", author: "Author2", genre: "Genre2", pages: 150, isAvailable: false },
        { title: "Book3", author: "Author1", genre: "Genre3", pages: 300, isAvailable: true }
    ];

    const addBook = (title, author, genre, pages) => {
        books.push({ title, author, genre, pages, isAvailable: true });
    };

    const removeBook = (title) => {
        books = books.filter(book => book.title !== title);
    };

    const findBooksByAuthor = (author) => {
        return books.filter(book => book.author === author);
    };

    const toggleBookAvailability = (title, isBorrowed) => {
        let book = books.find(book => book.title === title);
        if (book) {
            book.isAvailable = !isBorrowed;
        }
    };

    const sortBooksByPages = () => {
        books.sort((a, b) => a.pages - b.pages);
    };

    const getBooksStatistics = () => {
        let totalBooks = books.length;
        let availableBooks = books.filter(book => book.isAvailable).length;
        let borrowedBooks = totalBooks - availableBooks;
        let averagePages = books.reduce((acc, book) => acc + book.pages, 0) / totalBooks;

        return `Books amount: ${totalBooks}\nAvailable: ${availableBooks}\nBorrowed: ${borrowedBooks}\n
        AVG pages in books: ${averagePages.toFixed(2)}`;
    };

    return {
        addBook,
        removeBook,
        findBooksByAuthor,
        toggleBookAvailability,
        sortBooksByPages,
        getBooksStatistics
    };
};

console.log('\nTask - 6\n\n');
const library = libraryManagement();

library.addBook("Book4", "Author3", "Genre4", 250);
library.removeBook("Book2");
console.log(library.findBooksByAuthor("Author1").map(book => book.title).toString().concat(' - Author1\'s books'));

library.toggleBookAvailability("Book1", true);
library.sortBooksByPages();
console.log(library.getBooksStatistics());


// Task 7

const task7 = () => {
    let student = {
        name: "Nam1",
        age: 20,
        course: 3
    };

    student.subjects = ["s1", "s2", "s3"];
    delete student.age;

    console.log(`${student.name}, ${student.age}, ${student.course}\n${student.subjects}`);
};

console.log('\nTask - 7\n\n');
task7();