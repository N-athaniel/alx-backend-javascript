function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // Resolve with success response
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // Reject with error message
      reject(new Error('The fake API is not working currently'));
    }
  });
}
