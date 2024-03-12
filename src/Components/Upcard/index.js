import React from "react";

const Upcard = ({ item }) => {
  return (
    <div
      class="relative w-[265px] h-[177px] rounded-[10px] font-[Poppins] mr-[1%]"
      style={{ backgroundImage: `url(${item.backsrc})` }}
    >
      <div class="absolute ml-[7%] mt-[3%] w-[70%] h-[85%]">
        <p class="text-[18px] tracking-normal text-left font-[Inter] font-semibold">
          {item.title}
        </p>
        <p class="text-[14px] tracking-normal text-left opacity-80 font-[Inter]">
          {item.description}
        </p>
        {item.submenu.map((sub) => (
          <div class={`absolute flex bottom-0 left-0 mb-[${25*(sub.id-1)}px]`} key={sub.id}>
            <p class={`text-[14px] tracking-normal text-left text-[${sub.color}] mt-[2px]`}>
              {sub.title}
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.96967 17.5303C8.67678 17.2374 8.67678 16.7626 8.96967 16.4697L13.4393 12L8.96967 7.53033C8.67678 7.23744 8.67678 6.76256 8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967L15.0303 11.4697C15.171 11.6103 15.25 11.8011 15.25 12C15.25 12.1989 15.171 12.3897 15.0303 12.5303L10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303Z"
                fill={sub.color}
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcard;
