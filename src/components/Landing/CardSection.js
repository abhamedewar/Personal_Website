import React, { useEffect, useState, useRef, useContext } from "react";
import Desc from "./Desc";
import BasicButtons from "./BasicButtons";
import { GlobalDataContext } from "../../provider/GlobalDataProvider";

const CardSection = ({ setCardSectionHeight, scaleFactor }) => {
  const about = useContext(GlobalDataContext).about;
  const description = about.bio.description;
  const cardsection = about.cardsection;
  const childRef = useRef(null);

  useEffect(() => {
    const childObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const childHeight = entry.contentRect.height;
        setCardSectionHeight(childHeight);
      }
    });

    if (childRef.current) {
      childObserver.observe(childRef.current);
    }

    return () => {
      childObserver.disconnect();
    };
  }, []);

  return (
    <div ref={childRef} className={`flex flex-1 justify-end `}>
      <div className="flex flex-col justify-center  border border-gray-300 md:w-auto md:border-gray-300 h-max md:min-w-max">
        <div className="order-1 items-center flex flex-col md:py-4 px-10">
          <img
            className="object-center w-56 h-56 md:w-80 md:h-80 rounded-full lg:overflow-hidden"
            src={cardsection.pfp}
            alt="pfp"
          />
          <div className="flex flex-col items-center pt-6 font-sans text-2xl font-bold">
            <div className="flex flex-col items-center pt-5 text-lg font-semibold w-max">
              <span>{cardsection.degreeShort}</span>
              <span>{cardsection.date}</span>
            </div>
            <span className="block md:hidden">
              <BasicButtons />
            </span>
          </div>
        </div>
        <div className="flex flex-col order-3 py-4 md:hidden">
          <Desc description={description} />
        </div>
        <div className="flex order-2 w-full gap-2 pt-8 py-2 md:py-2 justify-evenly">
          {cardsection.socialMediaURLs.map((platform, index) => (
            <a key={index} href={platform.url}>
              <img
                className="w-8 hover:scale-125"
                src={platform.icon}
                alt="Icon"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
