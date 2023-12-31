import { useRouter } from "next/router";
import { useState } from "react";

interface props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchInputModal({ setModal }: props) {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (!searchInput || searchInput[0] === " ") return;
    setModal(false);
    router.push(`/search/${searchInput}`);
  };

  return (
    <div
      className="home-search-modal-container"
      onClick={() => setModal(false)}
    >
      <div className="flex w-full h-full justify-center">
        <div
          className="home-search-modal-box"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            className="home-search-modal-input"
            placeholder="지역, 식당 또는 음식"
            autoFocus={true}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-[27%] top-[2%]"
          onClick={handleSearch}
        >
          <g clipPath="url(#clip0_221_1097)">
            <path
              d="M27.6579 26.0093L20.6941 19.0455C22.5918 16.7245 23.5249 13.763 23.3002 10.7733C23.0756 7.78371 21.7105 4.9948 19.4873 2.98345C17.264 0.972107 14.3528 -0.107781 11.3557 -0.0328443C8.35855 0.0420928 5.5049 1.26612 3.38496 3.38606C1.26502 5.506 0.0409942 8.35965 -0.033943 11.3568C-0.10888 14.3539 0.971008 17.2651 2.98235 19.4884C4.9937 21.7116 7.78262 23.0767 10.7722 23.3013C13.7619 23.526 16.7234 22.5929 19.0444 20.6952L26.0082 27.659C26.2283 27.8715 26.523 27.9891 26.8289 27.9865C27.1348 27.9838 27.4274 27.8611 27.6437 27.6448C27.86 27.4285 27.9827 27.1359 27.9854 26.83C27.988 26.5241 27.8704 26.2294 27.6579 26.0093ZM11.6664 21.0008C9.82045 21.0008 8.01595 20.4535 6.48109 19.4279C4.94623 18.4023 3.74995 16.9447 3.04354 15.2392C2.33712 13.5338 2.15229 11.6572 2.51242 9.84667C2.87254 8.03618 3.76146 6.37314 5.06675 5.06785C6.37204 3.76256 8.03508 2.87364 9.84557 2.51351C11.6561 2.15339 13.5327 2.33822 15.2381 3.04464C16.9436 3.75105 18.4012 4.94733 19.4268 6.48219C20.4524 8.01705 20.9997 9.82155 20.9997 11.6675C20.997 14.142 20.0127 16.5144 18.263 18.2641C16.5133 20.0138 14.1409 20.9981 11.6664 21.0008Z"
              fill="#FFF6E9"
            />
          </g>
          <defs>
            <clipPath id="clip0_221_1097">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
