import Image from "next/image";
import React, { useState } from "react";

interface props {
  handleSearch: (keyword: string) => void;
  searchKeyword: string;
}

export default function SearchBar({ handleSearch, searchKeyword }: props) {
  const [input, setInput] = useState(searchKeyword);

  return (
    <div className="searchbar-container">
      <div className="searchbar-image-wrapper">
        <Image src="/logo-right.png" fill alt="search-logo" />
      </div>

      <div className="searchbar-input-container">
        <svg
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex flex-grow pl-2 w-5 h-5 md:w-7 md:h-7"
          onClick={() => handleSearch(input)}
        >
          <g clipPath="url(#clip0_221_846)">
            <path
              d="M27.6574 26.0092L20.6936 19.0454C22.5913 16.7244 23.5244 13.7628 23.2997 10.7732C23.0751 7.78359 21.71 4.99468 19.4868 2.98333C17.2635 0.971984 14.3523 -0.107904 11.3552 -0.0329664C8.35806 0.0419707 5.50441 1.266 3.38447 3.38594C1.26453 5.50588 0.0405059 8.35953 -0.0344312 11.3566C-0.109368 14.3537 0.97052 17.265 2.98186 19.4882C4.99321 21.7115 7.78213 23.0766 10.7717 23.3012C13.7614 23.5258 16.723 22.5928 19.0439 20.6951L26.0078 27.6589C26.2278 27.8714 26.5225 27.989 26.8284 27.9863C27.1343 27.9837 27.4269 27.861 27.6432 27.6447C27.8595 27.4284 27.9822 27.1358 27.9849 26.8299C27.9875 26.524 27.8699 26.2293 27.6574 26.0092ZM11.6659 21.0007C9.81997 21.0007 8.01546 20.4533 6.4806 19.4278C4.94574 18.4022 3.74947 16.9445 3.04305 15.2391C2.33663 13.5337 2.1518 11.657 2.51193 9.84655C2.87206 8.03606 3.76097 6.37302 5.06626 5.06773C6.37155 3.76244 8.03459 2.87352 9.84508 2.51339C11.6556 2.15326 13.5322 2.3381 15.2376 3.04451C16.9431 3.75093 18.4007 4.94721 19.4263 6.48207C20.4519 8.01693 20.9993 9.82143 20.9993 11.6674C20.9965 14.1419 20.0123 16.5142 18.2625 18.264C16.5128 20.0137 14.1404 20.9979 11.6659 21.0007Z"
              fill="#FFFFFF"
            />
          </g>
          <defs>
            <clipPath id="clip0_221_846">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <input
          type="text"
          className="searchbar-input"
          placeholder={searchKeyword}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch(input);
          }}
        />
      </div>
    </div>
  );
}
