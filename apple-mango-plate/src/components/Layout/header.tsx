import Link from "next/link";
import React from "react";
import icons from "@/assets/icons/icon";
import { useRecoilState } from "recoil";
import { userModalToggle } from "@/atoms/users";
import UserModal from "../User/userModal";
import Image from "next/image";
import LogoImg from "@/assets/images/Logo.png";

const UserIcon = icons.userIcons;

const Header = () => {
  const [modalOpen, setModalOpen] = useRecoilState(userModalToggle);
  const handleLoginClick = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 w-full h-16 bg-primary-yellow z-50">
      <div className="flex h-16 items-center justify-between  text-[black] mx-10 relative">
        <div>
          <Link href="/">
            <Image src={LogoImg} alt="Logo" width={80} height={80} />
          </Link>
        </div>
        <div>
          <button onClick={handleLoginClick}>
            <UserIcon color="black" size={18} />
          </button>
          <UserModal />
        </div>
      </div>
    </div>
  );
};

export default Header;
