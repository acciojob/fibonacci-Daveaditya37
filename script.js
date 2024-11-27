function fibonacci(num) {
    // Base cases
    if (num === 1) {
        return 0; // First Fibonacci number
    }
    if (num === 2) {
        return 1; // Second Fibonacci number
    }
    // Recursive case
    return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;
