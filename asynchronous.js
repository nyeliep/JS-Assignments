// Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time.
async function myMessage(message, delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
  console.log(message);
}
myMessage('I love vanilla ice cream',5000)


// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. 
// Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
async function getUserData(ids) {
  if (!Array.isArray(ids)) {
    ids = Array.of(); // Create a new array with a single ID
  }
  const promises = ids.map(id => getUserData(id));
  const userDataArray = await Promise.all(promises);

  userDataArray.forEach((userData, index) => {
    console.log(`User data for ID ${ids[index]}:`, userData);
  });
}
getUserData(34)
getUserData([34,23,83,55,12])


// You have an asynchronous function performTask() that returns a Promise. 
// The Promise resolves if the task is successful and rejects if there's an error. 
// Write a function that calls performTask() and logs a custom success message if the task is successful, 
// and a custom error message if there's an error





