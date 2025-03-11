// Define num1 and num2 for multiplication
const num1 = 2;
const num2 = 31;
const multiply = num1 * num2; // Should equal 62

// Generate a random integer greater than 0
const random = Math.floor(Math.random() * 100) + 1; // Ensures it's always > 0

// Define num3 and num4 for modulus calculation
const num3 = 20;
const num4 = 8;
const mod = num3 % num4; // Should be 4

// Find the max value in a set
const max = Math.max(10, 5, 20, 15); // Should return 20

// Export variables if needed
module.exports = { multiply, random, mod, max };
