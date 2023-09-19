import React from "react";

export const ErrorMsg = ({ ErrorText }) => {
  return (
    <div className="flex items-center  px-4 py-2 border-red-500 border-2 rounded-md space-x-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#EF77B1"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>

      {typeof ErrorText === "string" ? (
        <span>
          <p className="text-red-500">{ErrorText}</p>
        </span>
      ) : (
        <span>
          {ErrorText?.map((item) => {
            return (
              <p className="text-red-500" key={item}>
                {item}
              </p>
            );
          })}
        </span>
      )}
    </div>
  );
};
