function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true; // Leap year
    } else {
        return false; // Common year
    }
}

// Test the function
let myYear = 2024;
let isMyYearLeap = isLeapYear(myYear);
console.log(isMyYearLeap); // Output: true



const daysInMonth = {
    "January": 31,
    "February": isLeapYear(myYear) ? 29 : 28,
    "March": 31,
    "April": 30,
    "May": 31,
    "June": 30,
    "July": 31,
    "August": 31,
    "September": 30,
    "October": 31,
    "November": 30,
    "December": 31
};

// Test the object
console.log(daysInMonth["February"]); // Output: 29 (Leap year)


