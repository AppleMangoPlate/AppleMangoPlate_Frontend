import React from "react";

export default function NextButton({ onClick }) {
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
          d="M1 12C1 5.92487 5.92487 1 12 1C18.0752 1 23 5.92487 23 12C23 18.0752 18.0752 23 12 23C5.92487 23 1 18.0752 1 12Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 7L15 12L10 17"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
