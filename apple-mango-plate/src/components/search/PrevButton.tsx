import React from "react";

export default function PrevButton({ onClick }) {
  return (
    <div className="px-4">
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
        className="stroke-main_color hover:stroke-signature_orange hover:w-[35px] hover:h-[35px]"
      >
        <path
          d="M23 12C23 18.0751 18.0751 23 12 23C5.92482 23 1 18.0751 1 12C1 5.92482 5.92482 0.999999 12 0.999999C18.0751 1 23 5.92482 23 12Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 17L9 12L14 7"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
