import React from "react";

const Hobby = (props) => {
  const { paintings,desc } = props;
  return (
    <div className="w-full border-gray-600 ">
    <div className="grid grid-flow-row grid-cols-5">
      {paintings.map((paint,index) => (
        <img src={paint} key={index} className="my-5 w-64 h-56" alt="paint" />
      ))}
    </div>
    <div className="font font-semibold text-lg px-5 py-5">
      {desc}
    </div>
    </div>
  );
};

export default Hobby;
