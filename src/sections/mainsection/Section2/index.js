import React from "react";

import { mockdata } from "data";
import Upcard from "Components/Upcard";
import Flowcard from "Components/Flowcard";

const Section2 = () => {
  return (
    <div class="mt-[80px]">
      <div class="flex">
        <p class="text-[52px]  font-bold tracking-normal text-left bg-gradient-to-r from-[#715DEC] to-[#521BBA] text-transparent bg-clip-text">
          The Launchpad
        </p>
        <button class="flex w-[190px] h-[46px] rounded-[25px] bg-opacity-15 bg-[#F20CEC] object-right-top ml-auto">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mt-[7px] ml-[7px]"
          >
            <rect width="32" height="32" rx="16" fill="#F20CEC" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.0298 7.3437C14.9834 6.88543 17.0166 6.88543 18.9703 7.3437C21.7916 8.0055 23.9946 10.2084 24.6564 13.0298C25.1146 14.9834 25.1146 17.0166 24.6564 18.9703C23.9946 21.7916 21.7916 23.9946 18.9703 24.6564C17.0166 25.1146 14.9834 25.1146 13.0298 24.6564C10.2084 23.9946 8.0055 21.7916 7.3437 18.9703C6.88543 17.0166 6.88543 14.9834 7.3437 13.0298C8.0055 10.2084 10.2084 8.0055 13.0298 7.3437ZM16.6 13.6068C16.6 13.2754 16.3314 13.0068 16 13.0068C15.6686 13.0068 15.4 13.2754 15.4 13.6068V15.4H13.6068C13.2754 15.4 13.0068 15.6686 13.0068 16C13.0068 16.3314 13.2754 16.6 13.6068 16.6H15.4V18.3932C15.4 18.7246 15.6686 18.9932 16 18.9932C16.3314 18.9932 16.6 18.7246 16.6 18.3932V16.6H18.3932C18.7246 16.6 18.9932 16.3314 18.9932 16C18.9932 15.6686 18.7246 15.4 18.3932 15.4H16.6V13.6068Z"
              fill="white"
            />
          </svg>
          <p class="text-[12px] font-medium leading-[18px] tracking-normal text-center ml-[7px] mt-[14px]">
            Create Launchpad
          </p>
        </button>
      </div>
      <div class="flex">
        <p class="text-[52px]  font-normal tracking-normal text-left">
            Protocol for Everyone!
        </p>
        <p class="text-[18px] font-normal tracking-normal text-left leading-[27px] w-[440px] object-right-top ml-auto">
            Tinapad Helps everyone to create their own tokens and token sales in few seconds. Tokens Created on Pinksale will be varified and published on explorer websties.
        </p>
      </div>
      <div class="mt-[20px] flex">
        {mockdata.mainsection.upcarddata.map( item => (
            <Upcard key={item.id} item = {item}></Upcard>
        ))}
      </div>
      <div class="mt-[50px] flex">
        {mockdata.mainsection.flowcarddata.map( item => (
            <Flowcard key={item.id} item = {item}></Flowcard>
        ))}
      </div>
    </div>
  );
};

export default Section2;
