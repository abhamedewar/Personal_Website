import React from "react";

const Work = (props) => {
  const { data } = props;
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-4 shadow-lg pr-6 py-2">
      <div className="flex flex-col items-center justify-center w-3/5 gap-2 m-2 text-center lg:w-2/5 lg:items-start">
        <div className="text-lg font-bold">{data.role}</div>
        <div className="text-lg font-semibold">{data.organisation}</div>
        <div className="text-lg font-normal">{data.year}</div>
      </div>
      <div className="flex-1 text-lg">
        <ul className="flex flex-col gap-2 text-justify list-disc">
          {data.detail.map((point, index) => (
            <li key={index}> {point} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Work;
