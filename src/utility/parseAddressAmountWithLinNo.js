export const parseAddressAmountWithLineNo = (text) => {
  const addressAmountPairs = text.split("\n");
  const result = {};

  for (
    let lineNumber = 1;
    lineNumber <= addressAmountPairs.length;
    lineNumber++
  ) {
    const pair = addressAmountPairs[lineNumber - 1];
    const [address, amount] = pair.split(/[,= ]+/).filter(Boolean);
    if (address && amount) {
      if (result.hasOwnProperty(address)) {
        result[address].push({ amount: amount, lineNumber });
      } else {
        result[address] = [{ amount: amount, lineNumber }];
      }
    }
  }

  return result;
};
