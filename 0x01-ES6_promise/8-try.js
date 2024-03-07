export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Cannot divide by 0');
  }
  return numerator / denominator;
}

// Usage example:
try {
  const result = divideFunction(10, 2); // Example: 10 divided by 2
  console.log('Result:', result); // Should print 5
} catch (error) {
  console.error('Error:', error.message);
}
