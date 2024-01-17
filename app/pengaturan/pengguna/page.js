"use client";

import Link from "next/link";
import axios from "axios";
import assets from "@/assets.json";
import { useEffect, useState } from "react";
import person from "@/public/person.svg";
import Image from "next/image";
import getToken from "@/utils/getToken";

const UserComponnent = ({ userName, email, foto, id, addHandel }) => {
  const urlFotoProfil = foto !== "" ? assets.PUBLIC + foto : person;
  return (
    <div className="flex gap-4 p-4 rounded-md bg-indigo-800 relative items-center">
      <Image
        className="bg-white rounded-md h-12 w-12"
        src={urlFotoProfil}
        loader={() => urlFotoProfil}
        width={48}
        height={48}
        unoptimized
        alt="foto profil"
      />
      <div>
        <span className="text-lg block font-semibold">{userName}</span>
        <span className="text-disable w-full">{email}</span>
      </div>
      <div className="ml-auto md:flex items-center min-h-full gap-2">
        <Link
          href={"/pengaturan/pengguna/edit/" + id}
          className="px-4 py-2 mb-2 md:mb-0 block w-max text-center rounded-md bg-blue-500 text-lg font-semibold hover:bg-blue-800 transition-all duration-300 cursor-pointer"
        >
          Edit
        </Link>
        <Link
          href={"#"}
          onClick={addHandel}
          className="px-4 py-2 block w-max text-center rounded-md bg-red-500 text-lg font-semibold hover:bg-red-800 transition-all duration-300 cursor-pointer"
        >
          Hapus
        </Link>
      </div>
    </div>
  );
};

export default function Pengguna() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const response = await axios.get(assets.API + "/user");
      setUsers(response.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const handelHapus = async (id) => {
    try {
      const token = await getToken();
      await axios.delete(assets.API + "/user/" + id, {
        headers: { Authorization: "Bearer " + token },
      });

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="w-full flex flex-col gap-5">
      <span className="text-lg font-semibold tracking-wide">
        Daftar Pengguna
      </span>
      <div className="w-full flex flex-col gap-4 bg-primery rounded-lg p-6">
        <div className="flex justify-between">
          <span className="block text-lg font-semibold">Pengguna</span>
          <div className="flex flex-col items-end gap-2 md:flex-row">
            <input
              placeholder="Cari"
              className="px-4 py-2 rounded-md md:text-lg text-base w-40 md:w-full text-black"
            />
            <Link
              href="/pengaturan/pengguna/tambah"
              className="px-4 py-2 block w-max text-center rounded-md bg-green-500 text-lg font-semibold hover:bg-green-800 transition-all duration-300 cursor-pointer"
            >
              Tambah
            </Link>
          </div>
        </div>
        {users.map((i) => (
          <UserComponnent
            foto={i.foto}
            userName={i.username}
            email={i.email}
            id={i.id}
            addHandel={() => handelHapus(i.id)}
            key={i.id}
          />
        ))}
      </div>
    </div>
  );
}
