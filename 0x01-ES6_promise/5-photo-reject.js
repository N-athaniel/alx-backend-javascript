export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    // Simulate processing or validation logic
    // For demonstration purposes, we'll reject the promise immediately
    reject(new Error(`The file ${filename} cannot be processed`));
  });
}
