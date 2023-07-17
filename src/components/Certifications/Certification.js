import React from "react";
const Certification = (props) => {
  const { cert } = props;
  const handleView = () => {
    // Create a temporary <a> element to trigger the download
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/IJSDR191108.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.type = "application/pdf";
    link.click();
  };
  return (
    <div className="flex justify-center items-center px-10 py-7 border border-gray-200 bg-white shadow-xl sm:w-5/6 md:w-4/5 lg:w-1/2">
      <img src={cert.image} alt={cert.title} className="w-14 h-14" />
      <div className="flex flex-col text-xl flex-1 font-bold items-center">
        {/* <div className="text-center px-5">{cert.title}</div> */}
        <div className="px-6 pt-4 text-lg font-normal">
        {cert.title}{" "}
        <a href={cert.link} className="font-bold underline text-blue-700 ">
          [Paper link]
        </a>
      </div>
      </div>
    </div>
  );
};

export default Certification;
