export const amountValidation = (arr) => {
  const index = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "string" || isNaN(arr[i])) {
      index.push(i + 1);
    }
  }
  return index;
};
