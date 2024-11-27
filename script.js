function fibonacci(num) {
    if (num === 1) {
        return 0; // First Fibonacci number
    }
    if (num === 2) {
        return 1; // Second Fibonacci number
    }

    let a = 0, b = 1, fib;
    for (let i = 3; i <= num; i++) {
        fib = a + b; // Calculate next Fibonacci number
        a = b;       // Update `a` to the previous `b`
        b = fib;     // Update `b` to the current Fibonacci number
    }
    return b;
}

module.exports = fibonacci;
