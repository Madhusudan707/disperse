export const combineBalances = (data) => {
  let result = [];
  const mergedData = {};
  for (const address in data) {
    if (data.hasOwnProperty(address)) {
      data[address].forEach((transaction) => {
        if (mergedData[address]) {
          mergedData[address].push(parseInt(transaction.amount));
        } else {
          mergedData[address] = [parseInt(transaction.amount)];
        }
      });
    }
  }

  for (const key in mergedData) {
    let amount = 0;
    if (mergedData.hasOwnProperty(key)) {
      const value = mergedData[key];
      for (const val of value) {
        amount += val;
      }

      result.push(`${key}  ${amount}${"\r\n"}`);
    }
  }

  return result.toString().replace(/,/g, "");
};
