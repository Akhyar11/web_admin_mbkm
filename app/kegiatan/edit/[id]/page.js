"use client";

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import assets from "../../../../assets.json";
import Image from "next/image";
import personIcon from "../../../../public/person.svg";
import getToken from "@/utils/getToken";

export default function Edit() {
  const [title, setTitle] = useState(undefined);
  const [description, setDesc] = useState(undefined);
  const [picture, setPicture] = useState(undefined);
  const [urlPicture, setUrlPicture] = useState(undefined);
  const [msg, setMsg] = useState(undefined);
  const url = picture === undefined ? undefined : URL.createObjectURL(picture);
  const params = useParams();
  const router = useRouter();
  const getData = async () => {
    try {
      const response = await axios.get(assets.API + "/kegiatan/" + params.id);
      const data = response.data.kegiatan[0];
      setTitle(data.title);
      setDesc(data.description);
      setUrlPicture(assets.PUBLIC + data.picture);
    } catch (err) {
      console.log(err);
    }
  };
  const handelBtn = async () => {
    try {
      const token = await getToken();
      const formData = new FormData();
      formData.append("kegiatan", picture);
      await axios.put(
        assets.API + "/kegiatan/" + params.id,
        { title, description },
        { headers: { Authorization: "Bearer " + token } },
      );
      picture !== undefined
        ? await axios.put(
          assets.API + `/kegiatan/img/edit/${title}`,
          formData,

          { headers: { Authorization: "Bearer " + token } },
        )
        : null;
      router.push("/kegiatan");
    } catch (err) {
      setMsg(err.response.data.msg);
    }
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <span className="text-lg font-semibold tracking-wide">Kegitan Desa</span>
      <div className="w-full flex flex-col lg:flex-row bg-primery lg:bg-transparent lg:justify-between gap-5 rounded-lg mt-5">
        <div className="flex flex-col gap-5 bg-primery lg:h-max lg:pb-5 lg:rounded-lg lg:w-1/4">
          <span className="block text-lg font-semibold bg-indigo-800 p-4 border-b rounded-t-lg">
            Foto Kegiatan
          </span>
          <div className="px-6 flex justify-center items-center">
            <div className="bg-secondry rounded-md p-4">
              {picture === undefined ? (
                urlPicture === undefined ? (
                  <Image
                    src={personIcon}
                    unoptimized
                    alt="Berita"
                    width={250}
                    height={250}
                  />
                ) : (
                  <Image
                    loader={() => urlPicture}
                    unoptimized
                    src={urlPicture}
                    alt="Berita"
                    width={250}
                    height={250}
                  />
                )
              ) : (
                <Image
                  unoptimized
                  src={url}
                  alt="Berita"
                  width={250}
                  height={250}
                />
              )}
            </div>
          </div>
        </div>
        <div className="bg-primery lg:h-max lg:rounded-lg lg:w-3/4">
          <span className="block lg:rounded-t-lg text-lg font-semibold bg-indigo-800 p-4 border-b">
            Info Kegiatan
          </span>
          <form action={handelBtn} className="p-4 flex flex-col gap-5">
            <div>
              <span className="block px-2 text-lg font-semibold">Nama</span>
              <input
                type="text"
                value={title === undefined ? "" : title}
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
                value={description === undefined ? "" : description}
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
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan kode pos"
              />
            </div>
            <div className="flex justify-between gap-5">
              <div className="flex flex-col md:flex-row gap-2 md:gap-5">
                <button className="bg-green-500 px-4 py-2 h-max w-max rounded-md text-lg font-semibold hover:bg-green-800 transition-all duration-300">
                  Simpan
                </button>
              </div>

              {msg === undefined ? (
                <div className="px-4 py-2 bg-orange-500 rounded-lg">
                  <p>
                    Jangan tekan <span className="font-bold">simpan</span> jika
                    tidak melakukan perubahan
                  </p>
                </div>
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
