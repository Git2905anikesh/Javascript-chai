// ********************DATES********************
// Dates are used to work with dates and times in JavaScript.
// You can create a new date object using the Date constructor.

let myDate = new Date(); // This creates a new date object with the current date and time
console.log("Current Date and Time:", myDate.toString()); // toString method converts the date to a string
console.log("Current Date and Time:", myDate.toISOString()); // toISOString method converts the date to a string in ISO format
console.log("Current Date and Time:", myDate.toLocaleString()); // toLocaleString method converts the date to a string in a locale-specific format
console.log("Current Date and Time:", myDate.toJSON()); // toJSON method converts the date to a JSON string
console.log(typeof myDate); // The type of a date object is 'object'

// You can also create a date object with a specific date and time
let specificDate = new Date('2023-01-01T10:00:00'); // This creates a date object for January 1, 2023 at 10:00 AM
console.log("Specific Date and Time:", specificDate.toString());

// You can get various components of the date using methods like getFullYear, getMonth, getDate, getHours, getMinutes, getSeconds, etc.
console.log("Year:", myDate.getFullYear()); // Gets the year
console.log("Month:", myDate.getMonth() + 1); // Gets the month (0-11, so we add 1)
console.log("Date:", myDate.getDate()); // Gets the day of the month
console.log("Hours:", myDate.getHours()); // Gets the hours
console.log("Minutes:", myDate.getMinutes()); // Gets the minutes
console.log("Seconds:", myDate.getSeconds()); // Gets the seconds

// You can also set various components of the date using methods like setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, etc.
myDate.setFullYear(2024); // Sets the year to 2024
myDate.setMonth(11); // Sets the month to December (0-11)
myDate.setDate(25); // Sets the day of the month to 25
console.log("Updated Date and Time:", myDate.toString());

// There are many more methods available for working with dates. You can check them out in the MDN documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date 