import React from "react";

import { mockdata } from 'data'

const Padcard = ({ item }) => {
  return (
    <div class="relative w-[220px] mr-[10px]">
        <object
            type="image/svg+xml"
            class="rounded-[25px]"
            data={item.backsrc}
        ></object>
        <object
            type="image/svg+xml"
            class="absolute top-1/2 transform -translate-y-1/2 ml-[8%]"
            data={item.mainsrc}
        ></object>
      <div class="absolute top-1/2 transform -translate-y-1/2 ml-[38%] h-[48px]">
        <p
          class="font-[Inter] text-[16px] font-semibold leading-[19px] tracking-normal text-left"
          style={{ marginBlockStart: "0em", marginBlockEnd: "0em" }}
        >
          {item.title}
        </p>
        <p
          class="font-[Inter] text-[10px] font-normal leading-[12px] tracking-normal text-left"
          style={{ marginBlockStart: "0em", marginBlockEnd: "0em" }}
        >
          {item.description}
        </p>
        <div class="flex h-[Hug (15px)]">
            <object
                type="image/svg+xml"
                data={mockdata.mainsection.padcommonsrc}
            ></object>
          <p
            class="font-[Inter] text-[18px] font-semibold leading-[15px] tracking-normal text-left"
            style={{ marginBlockStart: "0em", marginBlockEnd: "0em" }}
          >
            {item.amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Padcard;
