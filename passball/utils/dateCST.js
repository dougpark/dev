// dateCST.js
// return a formated date string for Central Time Zone -6

function dateCST() {
    const currentDate = new Date();
    const cstOffset = -6 * 60; // CST timezone offset in minutes
  
    // Adjust for CST timezone offset
    currentDate.setMinutes(currentDate.getMinutes() + cstOffset);
  
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
  
    return `${year}-${month}-${day}:${hours}:${minutes}:${seconds}`;
  }
  
  module.exports = { dateCST };
  
// Usage:
// in your server.js file

// const { dateCST } = require('./dateCST');
// console.log(dateCST());

  