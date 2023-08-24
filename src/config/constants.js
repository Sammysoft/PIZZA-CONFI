import {
  BiCloudUpload,
  BiSolidBell,
  BiSolidColorFill,
  BiSolidShapes,
  BiSolidUser,
} from "react-icons/bi";
import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";
import { BsFillCreditCardFill, BsStars } from "react-icons/bs";
import { IoMdColorPalette } from "react-icons/io";
import { TbHelpCircleFilled } from "react-icons/tb";
import {
  RiLogoutBoxRFill,
  RiSettings4Fill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { HiUser } from "react-icons/hi";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};

export const menu = [
  {
    name: "Packaging",
    icon: <BiSolidUser className="w-5 h-5" />,
  },
  {
    name: "Upload",
    icon: <BiCloudUpload className="w-5 h-5" />,
  },
  {
    name: "Inspiration",
    icon: <BsStars className="w-5 h-5" />,
  },
  {
    name: "Elements",
    icon: <BiSolidShapes className="w-5 h-5" />,
  },
  {
    name: "Background",
    icon: <BiSolidColorFill className="w-5 h-5" />,
  },
  {
    name: "Materials",
    icon: <IoMdColorPalette className="w-5 h-5" />,
  },
];

export const dashMenu = [
  {
    name: "My Account",
    icon: <HiUser className="w-5 h-5" />,
    link: "",
  },
  {
    name: "MY Configuration",
    icon: <RiSettings4Fill className="w-5 h-5" />,
    link: "my-config",
  },
  {
    name: "Notification",
    icon: <BiSolidBell className="w-5 h-5" />,
    link: "notification",
  },
  {
    name: "Payment method",
    icon: <BsFillCreditCardFill className="w-5 h-5" />,
    link: "payment",
  },
  {
    name: "My Orders",
    icon: <RiShoppingBag3Fill className="w-5 h-5" />,
    link: "orders",
  },
];

export const footerMenu = [
  {
    name: "Settings",
    icon: <RiSettings4Fill className="w-5 h-5" />,
  },
  {
    name: "Help",
    icon: <TbHelpCircleFilled className="w-5 h-5" />,
  },
  {
    name: "Logout",
    icon: <RiLogoutBoxRFill className="w-5 h-5" />,
  },
];
