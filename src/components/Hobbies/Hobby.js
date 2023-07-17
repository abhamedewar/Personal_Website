import React from "react";

const Hobby = (props) => {
  const { paintings,desc } = props;
  const x = 4;
  return (
    <div className="w-full border-gray-600 ">
    <div className="grid grid-flow-row gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
      {paintings.map((paint,index) => (
        <img src={paint} key={index} className="my-5 h-40 w-48 md:w-64 md:h-56" alt="paint" />
      ))}
    </div>
    <div className="font font-semibold text-lg px-5 py-5">
      {desc}
    </div>
    </div>
  );
};

export default Hobby;
