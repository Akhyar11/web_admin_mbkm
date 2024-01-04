"use client";

import { useState } from "react";
import personIcon from "../../../public/person.svg";
import Image from "next/image";
import axios from "axios";
import assets from "../../../assets.json";
import getToken from "../../../utils/getToken";
import { useRouter } from "next/navigation";

export default function Tambah() {
  const [title, setTitle] = useState(undefined);
  const [description, setDesc] = useState(undefined);
  const [picture, setPicture] = useState(undefined);
  const [msg, setMsg] = useState(undefined);
  const url = picture === undefined ? undefined : URL.createObjectURL(picture);
  const router = useRouter();

  const handleBtn = async () => {
    try {
      const token = await getToken();
      const formData = new FormData();
      formData.append("kegiatan", picture);
      await axios.post(
        assets.API + "/kegiatan",
        { title, description },
        { headers: { Authorization: "Bearer " + token } }
      );
      await axios.post(assets.API + `/kegiatan/img/${title}`, formData, {
        headers: { Authorization: "Bearer " + token },
      });
      router.push("/kegiatan");
    } catch (err) {
      setMsg(err.response.data.msg);
    }
  };
  return (
    <div>
      <span className="text-lg font-semibold tracking-wide">Kegitan Desa</span>
      <div className="w-full flex flex-col lg:flex-row bg-primery lg:bg-transparent lg:justify-between gap-5 rounded-lg mt-5">
        <div className="flex flex-col gap-5 bg-primery lg:h-max lg:pb-5 lg:rounded-lg lg:w-1/4">
          <span className="block text-lg font-semibold bg-indigo-800 p-4 border-b rounded-t-lg">
            Foto Kegiatan
          </span>
          <div className="px-6 flex w-full justify-center">
            <div className="bg-secondry rounded-md p-4">
              {picture === undefined ? (
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
        <form
          action={handleBtn}
          className="bg-primery lg:h-max lg:rounded-lg lg:w-3/4"
        >
          <span className="block lg:rounded-t-lg text-lg font-semibold bg-indigo-800 p-4 border-b">
            Info Kegiatan
          </span>
          <div className="p-4 flex flex-col gap-5">
            <div>
              <span className="block px-2 text-lg font-semibold">Nama</span>
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                required
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan nama penduduk"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">
                Deskripsi
              </span>
              <textarea
                type=""
                onChange={(e) => setDesc(e.target.value)}
                required
                className="bg-indigo-800 p-4 w-full min-h-52 rounded-md placeholder:text-lg"
                placeholder="Masukan no kk penduduk"
              />
            </div>

            <div>
              <span className="block px-2 text-lg font-semibold">
                Foto Kegiatan
              </span>
              <input
                type="file"
                onChange={(e) => setPicture(e.target.files[0])}
                required
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan kode pos"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-5">
                <button className="bg-green-500 px-4 py-2 h-max w-max rounded-md text-lg font-semibold hover:bg-green-800 transition-all duration-300">
                  Tambah
                </button>
              </div>
              {msg === undefined ? (
                <></>
              ) : (
                <p className="block px-4 py-2 bg-blue-500 rounded-lg">{msg}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
