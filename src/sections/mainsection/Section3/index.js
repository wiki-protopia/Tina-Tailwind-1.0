import React from "react";

import { mockdata } from "data"
import tokero_icon from "images/tokero_icon.svg"
import rikkei_icon from "images/rikkei_icon.svg"
import tokero_img from "images/tokero_test.png"
import rekkei_img from "images/rikkei_test.png"
import elrond_img from "images/elrond_test.png"
import codevix_img from "images/codevix_test.png"
import copper_img from "images/copper_test.png"

const Section3 = () => {
  return (
    <div class="mt-[80px] font-[Poppins] overflow-hidden">
      <p class="text-[52px] font-semibold tracking-normal text-left">
        Partners
      </p>
      <p class="text-[18px] font-normal tracking-normal text-left lg:w-[30%]">
        Tinapad is honored and thrilled to be backed by leading Venture Capitals
        in blockchain industry.
      </p>
      <div class="lg:flex mt-[50px] mb-[55px] grid grid-cols-2 gap-x-4 gap-y-4">
        {mockdata.mainsection.partnerdata.map((item) => (
          <img key={item.id} class="w-[121px] h-[33px] mr-[10%]" src={item.imgsrc}></img>
        ))}
        {/* <object
          type="image/svg+xml"
          class="mr-[5px]"
          data={tokero_icon}
        ></object>
        <object
          type="image/svg+xml"
          class="mr-[5px]"
          data={rikkei_icon}
        ></object> */}
        {/* <img class="w-[121px] h-[33px] mr-[10%]" src={tokero_img}></img>
        <img class="w-[129px] h-[53px] mr-[10%]" src={rekkei_img}></img>
        <img class="w-[121px] h-[36px] mr-[10%]" src={elrond_img}></img>
        <img class="w-[118px] h-[22px] mr-[10%]" src={codevix_img}></img>
        <img class="w-[128px] h-[36px]" src={copper_img}></img> */}
        
      </div>
    </div>
  );
};

export default Section3;
