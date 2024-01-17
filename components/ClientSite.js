"use client";

import { MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
import NavMobile from "./NavMobile";
import Image from "next/image";
import person from "@/public/person.svg";
import assets from "@/assets.json";
import NacIcon from "./NacIcon";
import Cookies from "js-cookie";
import axios from "axios";
import { userStore } from "@/lib/userStore";

export default function ClientSite({ children }) {
  const store = userStore();
  const [userName, setUserName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [foto, setFoto] = useState("");
  const urlFotoProfil = foto !== "" ? assets.PUBLIC + foto : person;
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

  const getUser = async () => {
    try {
      const id = Cookies.get("id");
      const user = await axios.get(assets.API + "/user/" + id);

      setUserName(user[0].username);
      setEmail(user[0].email);
      setFoto(user[0].foto);

      store.setUser({ id, userName, email });
    } catch (err) { }
  };

  useEffect(() => {
    try {
      getUser();
    } catch (err) {
      console.log({ err });
    }
  }, []);

  return (
    <>
      <div className="fixed w-full text-active z-10">
        <div className="flex bg-primery items-center text-5xl p-6 justify-between border-b border-secondry">
          <MdMenu
            onClick={navActive}
            className="cursor-pointer hover:border hover:border-secondry hover:ring hover:ring-secondry rounded-lg transition-all"
          />
          <Image
            src={urlFotoProfil}
            alt="foto user"
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
