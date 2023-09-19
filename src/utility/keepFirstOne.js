export const keepFirstOne = (data) => {
  let firstOccurenceAddressAmount = "";
  const mergedData = {};
  for (const address in data) {
    if (data.hasOwnProperty(address)) {
      data[address].forEach((transaction) => {
        if (!mergedData[address]) {
          mergedData[address] = [transaction.amount];
        }
      });
    }
  }

  for (const key in mergedData) {
    if (mergedData.hasOwnProperty(key)) {
      const value = mergedData[key];
      firstOccurenceAddressAmount =
        firstOccurenceAddressAmount + `${key} ${value.join("")}${"\r\n"}`;
    }
  }

  return firstOccurenceAddressAmount.toString().replace(/,/g, "");
};
