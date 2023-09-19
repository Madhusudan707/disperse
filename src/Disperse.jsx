import { useState } from "react";
import { ErrorMsg } from "./Error";
import {
  parseAddressAmountWithLineNo,
  parseAmountWithLineNo,
  amountValidation,
  duplicateAddressWithLineNo,
  keepFirstOne,
  combineBalances,
} from "./utility";
export const Disperse = () => {
  const [errorStr, setErrorStr] = useState("");
  const [data, setData] = useState();
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = () => {
    const addressAmountData = parseAddressAmountWithLineNo(text);
    console.log(addressAmountData);
    setData(addressAmountData);

    const amountWithLineNo = parseAmountWithLineNo(addressAmountData);
    console.log(amountWithLineNo);
    const amountValidationOutput = amountValidation(amountWithLineNo);

    amountValidationOutput.length > 0
      ? setErrorStr(`Line ${amountValidationOutput.toString()} wrong amount`)
      : setErrorStr("");

    if (amountValidationOutput.length == 0) {
      const duplicateAddress = duplicateAddressWithLineNo(addressAmountData);

      setErrorStr(duplicateAddress);
    }
  };

  return (
    <div className="flex flex-col px-44 py-8 gap-y-4">
      <span>Addresses with Amounts</span>
      <div className="grow-wrap">
        <textarea
          onChange={(e) => {
            handleTextChange(e);
          }}
          value={text}
          className=""
        ></textarea>
      </div>

      <span className="text-blue-500">Separated by ','or''or'='</span>

      {errorStr === "" || errorStr.length === 0 || (
        <>
          <div
            className={`flex text-red-500 justify-between ${
              typeof errorStr === "string" ? "hidden" : ""
            }`}
          >
            <span>Duplicated</span>
            <div className="flex  gap-x-8">
              <span
                className="cursor-pointer"
                onClick={() => {
                  setText(keepFirstOne(data), setErrorStr(""));
                }}
              >
                Keep the first one
              </span>
              <span> | </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setText(combineBalances(data), setErrorStr(""));
                }}
              >
                Combine Balance
              </span>
            </div>
          </div>
          <ErrorMsg ErrorText={errorStr || ""} />
        </>
      )}

      <button
        className="w-full px-2 py-4 bg-blue-500 text-white"
        onClick={onSubmit}
      >
        NEXT
      </button>
    </div>
  );
};
