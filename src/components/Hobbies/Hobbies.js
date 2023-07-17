import React, { useContext } from "react";
import Hobby from "./Hobby";
import { GlobalDataContext } from "../../provider/GlobalDataProvider";

const Hobbies = () => {
  var count = 0;
  const hobbyData = useContext(GlobalDataContext).hobbies.hobbyData;
  const g1 = require("../../imgs/hobby/g1.jpg");
  const g2 = require("../../imgs/hobby/g2.jpg");
  const s1 = require("../../imgs/hobby/Schools/aps_kirkee (2).jpg");
  const s2 = require("../../imgs/hobby/Schools/aps_tezpur (2).jpg");
  const s3 = require("../../imgs/hobby/Schools/asu (2).jpg");
  const s4 = require("../../imgs/hobby/Schools/bhutan (2).jpg");
  const s5 = require("../../imgs/hobby/Schools/christ_school (2).jpg");
  const s6 = require("../../imgs/hobby/Schools/leh (2).jpg");
  const s7 = require("../../imgs/hobby/Schools/pune.jpg");
  const s8 = require("../../imgs/hobby/Schools/viit.jpg");
  const s9 = require("../../imgs/hobby/Schools/vps_daporijo.jpg");
  const s10 = require("../../imgs/hobby/Schools/vps_itanagar (2).jpg");
  const t1 = require("../../imgs/hobby/t7.jpg");
  const t2 = require("../../imgs/hobby/t2.jpg");
  const t3 = require("../../imgs/hobby/t3.jpg");
  const t4 = require("../../imgs/hobby/t4.PNG");
  const t5 = require("../../imgs/hobby/t5.jpg");
  const p1 = require("../../imgs/hobby/p1.jpg");
  const p2 = require("../../imgs/hobby/p2.jpg");
  const p3 = require("../../imgs/hobby/p3.jpg");
  const p4 = require("../../imgs/hobby/p4.png"); 

const graduation = [
  g1,
  g2,
]
const schools = [
  s3,
  s8,
  s1,
  s2,
  s6,
  s7,
  s9,
  s4,
  s10,
  s5,
]
const paint = [
  p1,
  p2,
  p3,
  p4,
]

const travel = [
  t4,
  t5,
  t3,
  t1,
  t2
]

  return (
    <div className="flex flex-1 flex-col items-center sm:overflow-y-scroll md:overflow-x-hidden scrollbar-hide mb-8 ">
      <div className="text-4xl md:text-5xl font-normal p-4 md:mt-6 text-left w-full md:px-10">Paintings</div>
      <div className="flex flex-col md:m-5 gap-10 px-10 items-center w-full">
        <Hobby paintings={paint} desc=""/>
      </div>
      <div className="text-4xl md:text-5xl font-normal p-4 md:mt-6 text-left w-full md:px-10">My Graduation Day</div>
      <div className="flex flex-col md:m-5 gap-10 px-10 items-center w-full">
        <Hobby paintings={graduation} desc=""/>
      </div>
      <div className="text-4xl md:text-5xl font-normal p-4 md:mt-6 text-left w-full md:px-10">Schools Attended</div>
      <div className="flex flex-col md:m-5 gap-10 px-10 items-center w-full">
        <Hobby paintings={schools} desc=""/>
      </div>
      <div className="text-4xl md:text-5xl font-normal p-4 md:mt-6 text-left w-full md:px-10">Travel</div>
      <div className="flex flex-col md:m-5 gap-10 px-10 items-center w-full">
        <Hobby paintings={travel} desc=""/>
      </div>
    </div>
  );
};

export default Hobbies;
