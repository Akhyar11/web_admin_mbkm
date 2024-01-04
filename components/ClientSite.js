"use client";

import { MdMenu } from "react-icons/md";
import { CiBellOn} from "react-icons/ci";
import {
  PiMessengerLogoLight,
} from "react-icons/pi";
import NavMobile from "./NavMobile";

export default function ClientSite({children}) {
  const navActive = () => {
    const nav = document.getElementById("navMobile");
    const list = nav.classList;

    list.toggle("hidden")
    list.toggle("-ml-[1000px]")
  };

  return (
    <>
      <div className="fixed w-full text-active z-10">
        <div className="flex bg-primery text-4xl p-6 justify-between border-b border-secondry">
          <MdMenu onClick={navActive} className="cursor-pointer" />
          <div className="flex gap-6">
            <PiMessengerLogoLight />
            <CiBellOn />
            <div className="p-4 bg-white rounded-md"></div>
          </div>
        </div>
        <NavMobile />
      </div>
      <div className="pt-28 px-6">
        {children}
      </div>
    </>
  );
}
