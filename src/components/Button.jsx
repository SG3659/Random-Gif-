import React from "react";

const Button = () => {
  return (
    <div>
      <button
        //   onClick={}
        className="bg-[#22223B] text-lg py-2 rounded-lg mb-[20px] w-52 text-gray-100 "
        onClick={() =>
          (window.location.href = "https://content-filter.vercel.app/")
        }
      >
        Content-Filter
      </button>
    </div>
  );
};
export default Button;
