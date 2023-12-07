// const date = new Date();
// // const options = {
// //   timeZone: 'America/Chicago', // Set the time zone to CST
// //   hour12: false, // Use 24-hour format
// //   weekday: 'long', // Display full weekday
// //   year: 'numeric', // Display full year
// //   month: 'long', // Display full month
// //   day: 'numeric', // Display day of the month
// //   hour: 'numeric', // Display hour
// //   minute: 'numeric', // Display minute
// //   second: 'numeric' // Display second
// // };

// const options = {
//     timeZone: 'America/Chicago', // Set the time zone (adjust as needed)
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//     hour12: false // Use 24-hour format
//   };

// const cstDate = new Intl.DateTimeFormat('en-US', options).format(date);
// console.log(cstDate);

// const currentDate = new Date();

// // Adjust for CST timezone offset (UTC -6 hours for standard time)
// const cstOffset = -6 * 60; // Offset in minutes
// currentDate.setMinutes(currentDate.getMinutes() + cstOffset);

// const year = currentDate.getFullYear();
// const month = String(currentDate.getMonth() + 1).padStart(2, '0');
// const day = String(currentDate.getDate()).padStart(2, '0');
// const hours = String(currentDate.getHours()).padStart(2, '0');
// const minutes = String(currentDate.getMinutes()).padStart(2, '0');
// const seconds = String(currentDate.getSeconds()).padStart(2, '0');

// const formattedDate = `${year}-${month}-${day}:${hours}:${minutes}:${seconds}`;
// console.log(formattedDate);


// function formatDateToCST() {
//     const currentDate = new Date();
//     const cstOffset = -6 * 60; // CST timezone offset in minutes
  
//     // Adjust for CST timezone offset
//     currentDate.setMinutes(currentDate.getMinutes() + cstOffset);
  
//     const year = currentDate.getFullYear();
//     const month = String(currentDate.getMonth() + 1).padStart(2, '0');
//     const day = String(currentDate.getDate()).padStart(2, '0');
//     const hours = String(currentDate.getHours()).padStart(2, '0');
//     const minutes = String(currentDate.getMinutes()).padStart(2, '0');
//     const seconds = String(currentDate.getSeconds()).padStart(2, '0');
  
//     return `${year}-${month}-${day}:${hours}:${minutes}:${seconds}`;
//   }
  
//   // Example usage:
//   const formattedDate2 = formatDateToCST();
//   console.log(formattedDate2);
  
// Your other Node.js file
console.log('using dateCST module');
const { dateCST } = require('./dateCST');
console.log(dateCST());

  
