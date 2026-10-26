const { checkWinner } = require('./app');

console.log("Running automated tests...");

const testMen = checkWinner("Rodri", "men");
const testWomen = checkWinner("Aitana Bonmati", "women");

if (testMen === true && testWomen === true) {
    console.log("SUCCESS: Tests passed!");
    process.exit(0);
} else {
    console.error("ERROR: Tests failed!");
    process.exit(1);
}
