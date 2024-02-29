function fetchData(url, callback) {
    // Simulating asynchronous data fetching
    setTimeout(() => {
        const data = { name: 'Ravi', age: 30 };
        callback(null, data); // Passing null as the first argument to indicate no error
    }, 1000);
}

// Callback function to handle fetched data
function handleData(error, data) {
    if (error) {
        console.error('Error occurred:', error);
    } else {
        console.log('Received data:', data);
    }
}

// Invoking fetchData with a callback function
fetchData('https://example.com/data', handleData);
