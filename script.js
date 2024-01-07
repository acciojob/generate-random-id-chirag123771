function makeid(l) {
  // write your code here 
	if (typeof l !== 'number' || l <= 0 || l > 1000 || !Number.isInteger(l)) {
        console.error("Please enter a valid positive integer for the length.");
        return;
    }

    // Define characters for the random string
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    // Initialize the result string
    let result = '';

    // Generate random string of the specified length
    for (let i = 0; i < l; i++) {
        const randomIndex = Math.floor(Math.random() * characters.l);
        result += characters.charAt(randomIndex);
    }

    return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
