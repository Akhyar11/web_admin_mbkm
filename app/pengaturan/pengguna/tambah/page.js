"use client";

import { useState } from "react";
import axios from "axios";
import assets from "@/assets.json";
import getToken from "@/utils/getToken";
import personIcon from "@/public/person.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Tambah() {
  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(undefined);
  const [foto, setFoto] = useState(undefined);
  const url = foto === undefined ? undefined : URL.createObjectURL(foto);
  const router = useRouter();
  const handelBtn = async () => {
    try {
      const token = await getToken();
      const p = await axios.post(
        assets.API + "/user/register",
        { username, pass, email },
        { headers: { Authorization: "Bearer " + token } }
      );
      router.push("/pengaturan/pengguna");
    } catch (err) {
      setMsg(err.response.data.msg);
    }
  };
  return (
    <div>
      <span className="text-lg font-semibold tracking-wide">
        Tambah Pengguna
      </span>
      <div className="w-full flex flex-col lg:flex-row bg-primery lg:bg-transparent lg:justify-between gap-5 rounded-lg mt-5">
        <div className="flex flex-col gap-5 bg-primery lg:h-max lg:pb-5 lg:rounded-lg lg:w-1/4">
          <span className="block text-lg font-semibold bg-indigo-800 p-4 border-b rounded-t-lg">
            Foto Pengguna
          </span>
          <div className="px-6 flex w-full justify-center">
            <div className="bg-secondry rounded-md p-4">
              {foto === undefined ? (
                <Image
                  src={personIcon}
                  priority
                  alt="Berita"
                  width={250}
                  height={250}
                />
              ) : (
                <Image
                  src={url}
                  alt="Berita"
                  unoptimized
                  width={250}
                  height={250}
                />
              )}
            </div>
          </div>
        </div>
        <div className="bg-primery lg:h-max lg:rounded-lg lg:w-3/4">
          <span className="block lg:rounded-t-lg text-lg font-semibold bg-indigo-800 p-4 border-b">
            Info Pengguna
          </span>
          <form action={handelBtn}>
            <div className="p-4 flex flex-col gap-5">
              <div>
                <span className="block px-2 text-lg font-semibold">
                  User Name
                </span>
                <input
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                  placeholder="Masukan user name Pengguna"
                />
              </div>
              <div>
                <span className="block px-2 text-lg font-semibold">
                  Password
                </span>
                <input
                  type="text"
                  onChange={(e) => setPass(e.target.value)}
                  required
                  className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                  placeholder="Masukan password Pengguna"
                />
              </div>
              <div>
                <span className="block px-2 text-lg font-semibold">Emial</span>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                  placeholder="Masukan emial Pengguna"
                />
              </div>
              <div>
                <span className="block px-2 text-lg font-semibold">
                  Foto Pengguna
                </span>
                <input
                  type="file"
                  onChange={(e) => setFoto(e.target.files[0])}
                  className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                  disabled
                  placeholder="Masukan kode pos"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-5">
                  <button
                    type="save"
                    className="bg-green-500 px-4 py-2 h-max w-max rounded-md text-lg font-semibold hover:bg-green-800 transition-all duration-300"
                  >
                    Tambah
                  </button>
                </div>
                {msg === undefined ? (
                  <></>
                ) : (
                  <p className="block px-4 py-2 bg-blue-500 rounded-lg">
                    {msg}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
