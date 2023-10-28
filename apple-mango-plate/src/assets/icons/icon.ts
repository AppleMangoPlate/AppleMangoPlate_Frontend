import { FaRegUser } from "react-icons/fa";
import { BiUserPlus, BiLockAlt } from "react-icons/bi";
import { BsArrowRightCircle } from "react-icons/bs";
import { PiAddressBook } from "react-icons/pi";

type IconType = React.ElementType;

const icons: Record<string, IconType> = {
  userIcons: FaRegUser,
  userplusIcons: BiUserPlus,
  arrowRight: BsArrowRightCircle,
  lockIcons: BiLockAlt,
  addressBook: PiAddressBook,
};

export default icons;
