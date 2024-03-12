import React from "react";

import tinaImage from "images/tina.png";
import Sideitem from "Components/SideItem";

import { mockdata } from "data";

const Sidesection = () => {
  return (
    <div class="text-[#FFFFFF] font-[Poppins] w-[185px] h-[854px] mt-[55px] ml-[25px] pl-[10px] pr-[0px,] py-[0px,] [box-shadow:0px_4px_4px_0px_#00000040] hidden lg:block">
      <div class="flex w-[165px] h-[48px] ml-[10px]">
        <img class="w-[40px] h-[27px]" src={tinaImage}></img>
        <div class="ml-[9px] -mt-[8px]">
          <p class="text-[24px] font-semibold leading-[26px] tracking-normal text-left">
            Tina
          </p>
          <p class="text-[16px] font-semibold leading-[18px] tracking-normal text-left">
            LaunchPad
          </p>
        </div>
      </div>

      <nav class="relative w-[175px] h-[768px] mt-[46px]">
        <div class="flex w-[175px] h-[40px] mb-[40px]">
          <button
            type="button"
            class="w-[40px] h-[40px] rounded-[15px] opacity-[0.9px] bg-[#F20CEC]"
          >
            <svg
              class="w-[24px] h-[24px] ml-[8px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.29 14.6374V9.71903V9.50753L14.8284 5.01423L14.8284 5.01422C13.4951 3.67141 12.8284 3 12 3C11.1716 3 10.5049 3.67141 9.17157 5.01423L4.70999 9.50755V9.71903V14.6374C4.70999 17.5321 6.68841 20.046 9.48673 20.7071C11.1398 21.0976 12.8602 21.0976 14.5132 20.7071C17.3116 20.046 19.29 17.5321 19.29 14.6374Z"
                fill="white"
                fillOpacity="0.15"
              />
              <path
                d="M14.5132 20.7071L14.3408 19.9772H14.3408L14.5132 20.7071ZM9.48673 20.7071L9.65916 19.9772H9.65916L9.48673 20.7071ZM14.8284 5.01423L15.3606 4.48578L15.3421 4.46712L15.3223 4.4498L14.8284 5.01423ZM14.8284 5.01422L14.2962 5.54267L14.3147 5.56133L14.3345 5.57866L14.8284 5.01422ZM9.17157 5.01423L9.70378 5.54267L9.17157 5.01423ZM9.71842 18.3203L8.9813 18.1819L8.9813 18.1819L9.71842 18.3203ZM9.73776 18.2173L10.4749 18.3556L10.4749 18.3556L9.73776 18.2173ZM14.2622 18.2173L13.5251 18.3556V18.3556L14.2622 18.2173ZM14.2816 18.3203L15.0187 18.1819V18.1819L14.2816 18.3203ZM13.9918 20.5519L14.669 20.8742L13.9918 20.5519ZM13.1978 20.475C13.0198 20.849 13.1787 21.2965 13.5527 21.4745C13.9267 21.6525 14.3742 21.4936 14.5522 21.1196L13.1978 20.475ZM10.0082 20.5519L9.331 20.8742L9.331 20.8742L10.0082 20.5519ZM9.44778 21.1196C9.62577 21.4936 10.0733 21.6525 10.4473 21.4745C10.8213 21.2965 10.9802 20.849 10.8022 20.475L9.44778 21.1196ZM11.3611 16.4426L11.1605 15.7199H11.1605L11.3611 16.4426ZM12.6389 16.4426L12.8395 15.7199H12.8395L12.6389 16.4426ZM2.46779 10.7013C2.17594 10.9952 2.17762 11.4701 2.47155 11.7619C2.76548 12.0538 3.24035 12.0521 3.53221 11.7582L2.46779 10.7013ZM20.4678 11.7582C20.7596 12.0521 21.2345 12.0538 21.5284 11.7619C21.8224 11.4701 21.8241 10.9952 21.5322 10.7013L20.4678 11.7582ZM18.54 9.71903V14.6374H20.04V9.71903H18.54ZM5.45999 14.6374V9.71903H3.95999V14.6374H5.45999ZM14.3408 19.9772C12.8011 20.3409 11.1988 20.3409 9.65916 19.9772L9.3143 21.437C11.0808 21.8543 12.9192 21.8543 14.6857 21.437L14.3408 19.9772ZM9.65916 19.9772C7.2026 19.3969 5.45999 17.1877 5.45999 14.6374H3.95999C3.95999 17.8765 6.17421 20.6952 9.3143 21.437L9.65916 19.9772ZM14.6857 21.437C17.8258 20.6952 20.04 17.8765 20.04 14.6374H18.54C18.54 17.1877 16.7974 19.3969 14.3408 19.9772L14.6857 21.437ZM15.3223 4.4498L15.3223 4.44979L14.3345 5.57866L14.3345 5.57866L15.3223 4.4498ZM15.3606 4.48578C14.7089 3.82945 14.1681 3.28246 13.6818 2.90885C13.1785 2.52211 12.6458 2.25 12 2.25V3.75C12.1827 3.75 12.3974 3.81359 12.7679 4.09826C13.1555 4.39606 13.6146 4.85618 14.2962 5.54267L15.3606 4.48578ZM9.70378 5.54267C10.3854 4.85618 10.8445 4.39606 11.2321 4.09826C11.6026 3.81359 11.8173 3.75 12 3.75V2.25C11.3542 2.25 10.8215 2.52211 10.3182 2.90885C9.83194 3.28246 9.29106 3.82945 8.63937 4.48578L9.70378 5.54267ZM10.4555 18.4587L10.4749 18.3556L9.00064 18.0789L8.9813 18.1819L10.4555 18.4587ZM13.5251 18.3556L13.5445 18.4587L15.0187 18.1819L14.9994 18.0789L13.5251 18.3556ZM13.3146 20.2296L13.1978 20.475L14.5522 21.1196L14.669 20.8742L13.3146 20.2296ZM9.331 20.8742L9.44778 21.1196L10.8022 20.475L10.6854 20.2296L9.331 20.8742ZM13.5445 18.4587C13.6571 19.0588 13.5764 19.6793 13.3146 20.2296L14.669 20.8742C15.0675 20.0369 15.1899 19.0937 15.0187 18.1819L13.5445 18.4587ZM8.9813 18.1819C8.81015 19.0937 8.93254 20.0369 9.331 20.8742L10.6854 20.2296C10.4236 19.6793 10.3429 19.0588 10.4556 18.4587L8.9813 18.1819ZM11.5616 17.1652C11.8485 17.0856 12.1515 17.0856 12.4384 17.1652L12.8395 15.7199C12.2901 15.5674 11.7099 15.5674 11.1605 15.7199L11.5616 17.1652ZM14.9994 18.0789C14.7865 16.9449 13.9504 16.0281 12.8395 15.7199L12.4384 17.1652C12.9935 17.3193 13.417 17.7794 13.5251 18.3556L14.9994 18.0789ZM10.4749 18.3556C10.583 17.7794 11.0065 17.3193 11.5616 17.1652L11.1605 15.7199C10.0496 16.0281 9.21349 16.9449 9.00064 18.0789L10.4749 18.3556ZM8.63937 4.48578L4.17779 8.9791L5.2422 10.036L9.70378 5.54267L8.63937 4.48578ZM4.17779 8.9791L2.46779 10.7013L3.53221 11.7582L5.2422 10.036L4.17779 8.9791ZM5.45999 9.71903V9.50755H3.95999V9.71903H5.45999ZM14.2962 5.54267L18.7578 10.036L19.8222 8.97908L15.3606 4.48578L14.2962 5.54267ZM18.7578 10.036L20.4678 11.7582L21.5322 10.7013L19.8222 8.97908L18.7578 10.036ZM20.04 9.71903V9.50753H18.54V9.71903H20.04Z"
                fill="white"
              />
            </svg>
          </button>

          <button
            type="button"
            class="w-[125px] h-[40px] rounded-[15px] opacity-[0.9px] bg-[#F20CEC]"
          >
            <p class="text-[12px] font-semibold leading-[26px] tracking-normal text-left ml-[10px]">
              Home
            </p>
          </button>
        </div>

        {mockdata.sidesection.sideitemdata.map((item) => (
          <Sideitem key={item.id} item={item} />
        ))}

        <div class="absolute inset-x-0 bottom-0">
          {mockdata.sidesection.sideicondata.map((icon) => (
            <button
                key={icon.id}
              type="button"
              class={`w-[40px] h-[40px] rounded-[15px] border-opacity-30 border-[1px] border-solid border-[#FFFFFF] ${icon.id !== 4 ? 'mr-[5px]' : ''}`}
            >
                <object
                    type="image/svg+xml"
                    class="w-[24px] h-[24px] ml-[8px]"
                    data={icon.svgsrc}
                ></object>
                
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidesection;
