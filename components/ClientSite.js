"use client";

import { MdMenu } from "react-icons/md";
import NavMobile from "./NavMobile";
import Image from "next/image";
import person from "@/public/person.svg";
import NacIcon from "./NacIcon";

export default function ClientSite({ children }) {
  const navActive = () => {
    const nav = document.getElementById("navMobile");
    const list = nav.classList;

    list.toggle("-left-full");
    list.toggle("left-0");
  };

  const iconActive = () => {
    const nav = document.getElementById("navIcon");
    const list = nav.classList;

    list.toggle("-right-48");
    list.toggle("right-0");
  };

  return (
    <>
      <div className="fixed w-full text-active z-10">
        <div className="flex bg-primery items-center text-5xl p-6 justify-between border-b border-secondry">
          <MdMenu
            onClick={navActive}
            className="cursor-pointer hover:border hover:border-secondry hover:ring hover:ring-secondry rounded-lg transition-all"
          />
          <Image
            src={person}
            onClick={iconActive}
            className="bg-white rounded-full h-10 w-10 cursor-pointer hover:border hover:border-secondry hover:ring hover:ring-secondry  transition-all"
          />
        </div>
        <NavMobile />
        <NacIcon />
      </div>
      <div className="pt-28 px-6">{children}</div>
    </>
  );
}
