import React from "react";

const Flowcard = ({ item }) => {
  return (
    <div
      class="relative w-[265px] h-[177px] rounded-[10px] font-[Poppins] mr-[1%]"
      style={{ backgroundImage: `url(${item.backsrc})` }}
    >
      <div class="absolute ml-[7%] mt-[10%] w-[85%] h-[78%]">
        <p class="text-[18px] tracking-normal text-left font-[Inter] font-semibold">
          {item.title}
        </p>
        <div class="flex mt-[15px] mr-[5px]">
          <object
            type="image/svg+xml"
            class="mr-[5px]"
            data={item.iconsrc}
          ></object>
          <p class="text-[28px] tracking-normal text-left font-[Inter] font-semibold -mt-[4px]">
            {item.amount}
          </p>
        </div>
        <div class="absolute flex bottom-0 right-0 ml-auto mt-auto">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-[5px]"
          >
            <path
              d="M0.360201 10.2006C-0.951122 12.8201 1.53464 15.7272 4.3236 14.8358L7.51298 13.8164L10.6729 14.8303C13.4603 15.7245 15.9491 12.8216 14.6421 10.2007L10.4685 1.8318C9.25145 -0.608527 5.77269 -0.611169 4.55197 1.8273L0.360201 10.2006Z"
              fill="#FC9823"
            />
          </svg>
          <p class="text-[18px] tracking-normal text-left font-[Inter] font-semibold -mt-[5px]">
            {item.result}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flowcard;
