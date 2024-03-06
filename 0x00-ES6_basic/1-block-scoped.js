export default function taskBlock(trueOrFalse) {
  const task = false; // Use 'const' instead of 'let'
  const task2 = true; // Use 'const' instead of 'let'

  if (trueOrFalse) {
    // No need to reassign, as 'const' variables cannot be reassigned
  }

  return [task, task2];
}
