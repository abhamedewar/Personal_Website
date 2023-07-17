import React, { useEffect, useState, useRef, useContext } from "react";
import Desc from "./Desc";
import BasicButtons from "./BasicButtons";
import { GlobalDataContext } from "../../provider/GlobalDataProvider";

const Bio = ({ setBioSectionHeight, scaleFactor }) => {
  const bio = useContext(GlobalDataContext).about.bio;
  const childRef = useRef(null);
  useEffect(() => {
    const childObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const childHeight = entry.contentRect.height;
        setBioSectionHeight(childHeight);
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
    <div
      ref={childRef}
      className="hidden md:block lg:w-[58%] px-12 overflow-visible"
    >
      <div className="font-normal text-5xl ">{bio.bigGreet}</div>
      <div className="my-2 text-2xl">{bio.intro}</div>
      <Desc description={bio.description} />
      <BasicButtons />
    </div>
  );
};

export default Bio;
