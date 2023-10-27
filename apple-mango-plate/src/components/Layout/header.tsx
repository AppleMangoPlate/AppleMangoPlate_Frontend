import Link from "next/link";
import React from "react";
import icons from "@/assets/icons/icon";
import { FaRegUser } from "react-icons/fa";

const UserIcon = icons.userIcons;

const Header = () => {
  return (
    <div className="sticky top-0 w-full h-16 bg-primary-yellow">
      <div className="flex h-16 items-center justify-between  text-[black] mx-10">
        <div>
          <Link href="/">
            <p>이미지 들어갈곳</p>
          </Link>
        </div>
        <div>
          <button>
            <UserIcon color="black" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
