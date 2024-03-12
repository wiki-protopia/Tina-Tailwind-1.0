import React from "react";

import Padcard from "Components/Padcard";
import { mockdata } from "data";

const Section1 = () => {
  return (
    <div>
      <div>
        <div class="flex">
          <p class="text-[18px] font-semibold tracking-normal text-left">
            Launchpad Record
          </p>
          <div class="flex ml-auto">
            <p class="text-[14px] font-normal tracking-normal text-right ">
              View All
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml-[5px]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.96967 17.5303C8.67678 17.2374 8.67678 16.7626 8.96967 16.4697L13.4393 12L8.96967 7.53033C8.67678 7.23744 8.67678 6.76256 8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967L15.0303 11.4697C15.171 11.6103 15.25 11.8011 15.25 12C15.25 12.1989 15.171 12.3897 15.0303 12.5303L10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <p class="text-[12px] font-normal tracking-normal text-left">
          Projects All Time High on our Platform
        </p>
      </div>
      <div class="flex mt-[20px]">
        { mockdata.mainsection.padcarddata.map( item => (
            <Padcard key={item.id} item={item}></Padcard>
        ))}
      </div>
    </div>
  );
};

export default Section1;
