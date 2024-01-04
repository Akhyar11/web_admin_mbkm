"use client";

import { useState } from "react";
import axios from "axios";
import assets from "../../../assets.json";
import getToken from "../../../utils/getToken";
import beritaIcon from "../../../public/berita.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Tambah() {
  const [picture, setPicture] = useState(undefined);
  const [title, setTitle] = useState(undefined);
  const [author, setAuthor] = useState(undefined);
  const [link, setLink] = useState(undefined);
  const [description, setDesc] = useState(undefined);
  const [msg, setMsg] = useState(undefined);
  const url = picture === undefined ? undefined : URL.createObjectURL(picture);
  const router = useRouter();

  const handelBtn = async () => {
    try {
      const token = await getToken();
      const formData = new FormData();
      formData.append("berita", picture);
      await axios.post(
        assets.API + "/post",
        { title, author, link, description },
        { headers: { Authorization: "Bearer " + token } }
      );
      await axios.post(
        assets.API + `/post/img/${title}/${author}`,
        formData,

        { headers: { Authorization: "Bearer " + token } }
      );

      router.push("/berita");
    } catch (err) {
      setMsg(err.response.data.msg);
    }
  };
  return (
    <div>
      <span className="text-lg font-semibold tracking-wide">Berita Desa</span>
      <div className="w-full flex flex-col lg:flex-row bg-primery lg:bg-transparent lg:justify-between gap-5 rounded-lg mt-5">
        <div className="flex flex-col gap-5 bg-primery lg:h-max lg:pb-5 lg:rounded-lg lg:w-1/4">
          <span className="block text-lg font-semibold bg-indigo-800 p-4 border-b rounded-t-lg">
            Foto Berita
          </span>
          <div className="px-6 flex w-full justify-center">
            <div className="bg-secondry rounded-md p-4">
              {picture === undefined ? (
                <Image src={beritaIcon} alt="Berita" />
              ) : (
                <Image src={url} alt="Berita" width={250} height={250} />
              )}
            </div>
          </div>
        </div>
        <div className="bg-primery lg:h-max lg:rounded-lg lg:w-3/4">
          <span className="block lg:rounded-t-lg text-lg font-semibold bg-indigo-800 p-4 border-b">
            Info Berita
          </span>
          <form action={handelBtn} className="flex flex-col gap-5 p-5">
            <div>
              <span className="block px-2 text-lg font-semibold">Judul</span>
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                required
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan nama judul"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">Penulis</span>
              <input
                onChange={(e) => setAuthor(e.target.value)}
                type="text"
                required
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan nama penulis"
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
              <span className="block px-2 text-lg font-semibold">Link</span>
              <input
                type="text"
                onChange={(e) => setLink(e.target.value)}
                required
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan alamat berita / link"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">
                Foto Berita
              </span>
              <input
                type="file"
                onChange={(e) => {
                  setPicture(e.target.files[0]);
                }}
                required
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                name="berita"
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
          </form>
        </div>
      </div>
    </div>
  );
}
