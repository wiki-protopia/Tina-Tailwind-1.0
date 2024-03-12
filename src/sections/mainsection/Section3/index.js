import React from "react";

import { mockdata } from "data";
import tokero_icon from "images/tokero_icon.svg"


const Section3 = () => {
  return (
    <div class="mt-[80px] font-[Poppins]">
      <p class="text-[52px] font-semibold tracking-normal text-left">
        Partners
      </p>
      <p class="text-[18px] font-normal tracking-normal text-left w-[30%]">
        Tinapad is honored and thrilled to be backed by leading Venture Capitals
        in blockchain industry.
      </p>
      <div class="flex mt-[50px] mb-[55px]">
        {mockdata.mainsection.partnerdata.map((item) => (
          <object
            type="image/svg+xml"
            class="mr-[10%]"
            data={item.imgsrc}
            id={item.id}
          ></object>
        ))}
      </div>
    </div>
  );
};

export default Section3;
