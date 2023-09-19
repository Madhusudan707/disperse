export const parseAmountWithLineNo = (addressAmountData) => {
  const AmountWithLineNo = [];

  for (const key in addressAmountData) {
    if (addressAmountData.hasOwnProperty(key)) {
      const entries = addressAmountData[key];
      for (const entry of entries) {
        const { amount } = entry;
        AmountWithLineNo.push(amount);
      }
    }
  }

  return AmountWithLineNo;
};
