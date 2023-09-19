export const parseAmountWithLineNo = (addressAmountData) => {
  const AmountWithLineNo = [];

  for (const key in addressAmountData) {
    if (addressAmountData.hasOwnProperty(key)) {
      const entries = addressAmountData[key];
      for (const entry of entries) {
        const { amount, lineNumber } = entry;
        AmountWithLineNo.push({ amount, lineNumber });
      }
    }
  }

  AmountWithLineNo.sort((a, b) => a.lineNumber - b.lineNumber);

  const sortedAmounts = AmountWithLineNo.map((entry) => entry.amount);

  return sortedAmounts;
};
