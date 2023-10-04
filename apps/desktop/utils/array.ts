export function shuffleArray(array: Array<any>) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at randomIndex and i
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
}
