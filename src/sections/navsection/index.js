import React from "react";

import { useMediaQuery } from "react-responsive";

const Navsection = () => {
  const ismaxlg = useMediaQuery({ query: '(min-width: 1224px)' })

  return (
    <header class="bg-[#111317] shadow">
      <div class="overflow-hidden w-[100%] flex justify-between items-center font-[Poppins] lg:mr-[50px]">
        <form class="max-w-md w-[400px] h-[46px] object-left-top">
          <label
            htmlFor="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative bg-opacity-5 bg-white rounded-[15px]">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.31573 13.7811L4.04591 13.6098L3.31573 13.7811ZM3.31573 8.324L4.04591 8.49528L3.31573 8.324ZM18.7893 8.324L19.5195 8.15273L18.7893 8.324ZM18.7893 13.781L19.5195 13.9523L18.7893 13.781ZM13.781 18.7893L13.6098 18.0591L13.781 18.7893ZM8.324 18.7893L8.15273 19.5195L8.324 18.7893ZM8.324 3.31573L8.15272 2.58555L8.324 3.31573ZM13.781 3.31573L13.9523 2.58555L13.781 3.31573ZM20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L20.4697 21.5303ZM4.04591 13.6098C3.65136 11.9278 3.65136 10.1773 4.04591 8.49528L2.58555 8.15272C2.13815 10.06 2.13815 12.045 2.58555 13.9523L4.04591 13.6098ZM18.0591 8.49528C18.4537 10.1773 18.4537 11.9278 18.0591 13.6098L19.5195 13.9523C19.9669 12.045 19.9669 10.06 19.5195 8.15273L18.0591 8.49528ZM13.6098 18.0591C11.9278 18.4537 10.1773 18.4537 8.49528 18.0591L8.15273 19.5195C10.06 19.9669 12.045 19.9669 13.9523 19.5195L13.6098 18.0591ZM8.49528 4.04591C10.1773 3.65136 11.9278 3.65136 13.6098 4.04591L13.9523 2.58555C12.045 2.13815 10.06 2.13815 8.15272 2.58555L8.49528 4.04591ZM8.49528 18.0591C6.28757 17.5413 4.56377 15.8175 4.04591 13.6098L2.58555 13.9523C3.23351 16.7147 5.39038 18.8715 8.15273 19.5195L8.49528 18.0591ZM13.9523 19.5195C16.7147 18.8715 18.8715 16.7147 19.5195 13.9523L18.0591 13.6098C17.5413 15.8175 15.8175 17.5413 13.6098 18.0591L13.9523 19.5195ZM13.6098 4.04591C15.8175 4.56377 17.5413 6.28757 18.0591 8.49528L19.5195 8.15273C18.8715 5.39037 16.7147 3.23351 13.9523 2.58555L13.6098 4.04591ZM8.15272 2.58555C5.39037 3.23351 3.23351 5.39037 2.58555 8.15272L4.04591 8.49528C4.56377 6.28756 6.28757 4.56377 8.49528 4.04591L8.15272 2.58555ZM16.8048 17.8655L20.4697 21.5303L21.5303 20.4697L17.8655 16.8048L16.8048 17.8655Z"
                  fill="white"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-[12px] text-white focus:ring-blue-500 focus:border-blue-500 placeholder-white placeholder-opacity-50 bg-opacity-5 bg-white rounded-[15px]"
              placeholder="Search"
              required
            />
          </div>
        </form>

        <div class="flex object-right-top">
            <button class="w-[120px] h-[46px] rounded-[25px] bg-opacity-15 bg-[#F20CEC] hidden lg:flex">
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.0298 7.3437C14.9834 6.88543 17.0166 6.88543 18.9703 7.3437C21.7916 8.0055 23.9946 10.2084 24.6564 13.0298C25.1146 14.9834 25.1146 17.0166 24.6564 18.9703C23.9946 21.7916 21.7916 23.9946 18.9703 24.6564C17.0166 25.1146 14.9834 25.1146 13.0298 24.6564C10.2084 23.9946 8.0055 21.7916 7.3437 18.9703C6.88543 17.0166 6.88543 14.9834 7.3437 13.0298C8.0055 10.2084 10.2084 8.0055 13.0298 7.3437ZM16.6 13.6068C16.6 13.2754 16.3314 13.0068 16 13.0068C15.6686 13.0068 15.4 13.2754 15.4 13.6068V15.4H13.6068C13.2754 15.4 13.0068 15.6686 13.0068 16C13.0068 16.3314 13.2754 16.6 13.6068 16.6H15.4V18.3932C15.4 18.7246 15.6686 18.9932 16 18.9932C16.3314 18.9932 16.6 18.7246 16.6 18.3932V16.6H18.3932C18.7246 16.6 18.9932 16.3314 18.9932 16C18.9932 15.6686 18.7246 15.4 18.3932 15.4H16.6V13.6068Z"
                fill="white"
                />
            </svg>
            <p class="text-[12px] font-medium leading-[18px] tracking-normal text-center ml-[7px] mt-[14px]">
                Create
            </p>
            </button>

            <button class="flex h-[46px] rounded-[25px] bg-opacity-15 bg-[#F20CEC] lg:ml-[20px]">
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.0298 7.3437C14.9834 6.88543 17.0166 6.88543 18.9703 7.3437C21.7916 8.0055 23.9946 10.2084 24.6564 13.0298C25.1146 14.9834 25.1146 17.0166 24.6564 18.9703C23.9946 21.7916 21.7916 23.9946 18.9703 24.6564C17.0166 25.1146 14.9834 25.1146 13.0298 24.6564C10.2084 23.9946 8.0055 21.7916 7.3437 18.9703C6.88543 17.0166 6.88543 14.9834 7.3437 13.0298C8.0055 10.2084 10.2084 8.0055 13.0298 7.3437ZM16.6 13.6068C16.6 13.2754 16.3314 13.0068 16 13.0068C15.6686 13.0068 15.4 13.2754 15.4 13.6068V15.4H13.6068C13.2754 15.4 13.0068 15.6686 13.0068 16C13.0068 16.3314 13.2754 16.6 13.6068 16.6H15.4V18.3932C15.4 18.7246 15.6686 18.9932 16 18.9932C16.3314 18.9932 16.6 18.7246 16.6 18.3932V16.6H18.3932C18.7246 16.6 18.9932 16.3314 18.9932 16C18.9932 15.6686 18.7246 15.4 18.3932 15.4H16.6V13.6068Z"
                fill="white"
                />
            </svg>
            {ismaxlg && <p class="text-[12px] font-medium leading-[18px] tracking-normal text-center ml-[7px] mt-[14px]">Ethereum Chain</p>}
            {!ismaxlg && <p class="text-[12px] font-medium leading-[18px] tracking-normal text-center ml-[7px] mt-[14px]">ETH</p>}
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ml-auto mr-[12px] mt-[11px]"
            >
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.46967 8.96967C6.76256 8.67678 7.23744 8.67678 7.53033 8.96967L12 13.4393L16.4697 8.96967C16.7626 8.67678 17.2374 8.67678 17.5303 8.96967C17.8232 9.26256 17.8232 9.73744 17.5303 10.0303L12.5303 15.0303C12.3897 15.171 12.1989 15.25 12 15.25C11.8011 15.25 11.6103 15.171 11.4697 15.0303L6.46967 10.0303C6.17678 9.73744 6.17678 9.26256 6.46967 8.96967Z"
                fill="white"
                />
            </svg>
            </button>

            <button class="flex h-[46px] rounded-[25px] bg-opacity-15 bg-[#F20CEC] mr-[15px] lg:ml-[20px]">
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.0308 7.3303C17.0345 6.8899 14.9655 6.8899 12.9692 7.3303L12.5516 7.42243C9.76343 8.03749 7.56534 10.1714 6.87698 12.9312C6.37434 14.9465 6.37434 17.0536 6.87698 19.0688C7.56534 21.8286 9.76343 23.9625 12.5515 24.5776L12.9692 24.6697C14.9655 25.1101 17.0345 25.1101 19.0308 24.6697L19.4484 24.5776C22.2366 23.9625 24.4347 21.8286 25.123 19.0688C25.6257 17.0535 25.6257 14.9465 25.123 12.9312C24.4347 10.1714 22.2366 8.03749 19.4484 7.42243L19.0308 7.3303ZM21.9433 13.8078C22.3203 13.7439 22.702 13.7211 23.0807 13.7387C23.4968 13.758 23.8243 14.0825 23.8802 14.4936C24.0163 15.4933 24.0163 16.5067 23.8802 17.5064C23.8243 17.9175 23.4968 18.242 23.0807 18.2613C22.702 18.2789 22.3203 18.2561 21.9433 18.1922L21.8694 18.1797C20.8874 18.0133 20.1287 17.3507 19.8722 16.5159C19.7684 16.1783 19.7684 15.8217 19.8722 15.4841C20.1287 14.6493 20.8874 13.9867 21.8694 13.8203L21.9433 13.8078ZM11.3456 12.9773C11.3456 12.6434 11.6174 12.3728 11.9527 12.3728L16 12.3728C16.3353 12.3728 16.6071 12.6434 16.6071 12.9773C16.6071 13.3112 16.3353 13.5819 16 13.5819H11.9527C11.6174 13.5819 11.3456 13.3112 11.3456 12.9773Z"
                fill="white"
                />
            </svg>
            {ismaxlg && <p class="text-[12px] font-medium leading-[18px] tracking-normal text-center ml-[7px] mt-[14px]">Connect Wallet</p>}
            {!ismaxlg && <p class="text-[12px] font-medium leading-[18px] tracking-normal text-center ml-[7px] mt-[14px]">Connect</p>}
            </button>
        </div>

      </div>
    </header>
  );
};

export default Navsection;
