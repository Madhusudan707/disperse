export const duplicateAddressWithLineNo = (data) => {
  let result = [];
  const mergedData = {};
  for (const address in data) {
    if (data.hasOwnProperty(address)) {
      data[address].forEach((transaction) => {
        if (mergedData[address]) {
          mergedData[address].push(transaction.lineNumber);
        } else {
          mergedData[address] = [transaction.lineNumber];
        }
      });
    }
  }

  for (const key in mergedData) {
    if (mergedData.hasOwnProperty(key)) {
      const value = mergedData[key];
      if (value.length > 1) {
        result.push(
          `Address ${key} encountered duplicate in Line: ${value.join(", ")}`
        );
      }
    }
  }

  return result;
};
