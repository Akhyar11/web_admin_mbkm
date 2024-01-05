"use client";

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import assets from "../../../../assets.json";
import Image from "next/image";
import personIcon from "../../../../public/person.svg";
import getToken from "@/utils/getToken";

export default function Edit() {
  const [name, setName] = useState("");
  const [no_kk, setKK] = useState("");
  const [no_induk, setInduk] = useState("");
  const [nama_ibu, setIbu] = useState("");
  const [jk, setJk] = useState("");
  const [urlFoto, setUrlFoto] = useState(undefined);
  const [foto, setFoto] = useState(undefined);
  const [msg, setMsg] = useState(undefined);
  const url = foto === undefined ? undefined : URL.createObjectURL(foto);
  const params = useParams();
  const router = useRouter();
  const getData = async () => {
    try {
      const response = await axios.get(assets.API + "/penduduk/" + params.id);
      const data = response.data.penduduk[0];
      setName(data.name);
      setKK(data.no_kk);
      setInduk(data.no_induk);
      setIbu(data.nama_ibu);
      setJk(data.jk);
      setUrlFoto(assets.PUBLIC + response.data.penduduk[0].foto);
    } catch (err) { }
  };
  const handelBtn = async () => {
    try {
      const token = await getToken();
      const formData = new FormData();
      formData.append("penduduk", foto);
      await axios.put(
        assets.API + "/penduduk/" + params.id,
        { name, no_kk, no_induk, nama_ibu, jk },
        { headers: { Authorization: "Bearer " + token } },
      );
      foto !== undefined
        ? await axios.put(
          assets.API + `/penduduk/img/edit/${no_kk}/${no_induk}`,
          formData,

          { headers: { Authorization: "Bearer " + token } },
        )
        : null;
      router.push("/penduduk");
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
      <span className="text-lg font-semibold tracking-wide">
        Detail Penduduk
      </span>
      <div className="w-full flex flex-col lg:flex-row bg-primery lg:bg-transparent lg:justify-between gap-5 rounded-lg mt-5">
        <div className="flex flex-col gap-5 bg-primery lg:h-max lg:pb-5 lg:rounded-lg lg:w-1/4">
          <span className="block text-lg font-semibold bg-indigo-800 p-4 border-b rounded-t-lg">
            Foto Penduduk
          </span>
          <div className="px-6 flex justify-center items-center">
            <div className="bg-secondry rounded-md p-4">
              {foto === undefined ? (
                urlFoto === undefined ? (
                  <Image
                    src={personIcon}
                    unoptimized
                    alt="Berita"
                    width={250}
                    height={250}
                  />
                ) : (
                  <Image
                    loader={() => urlFoto}
                    unoptimized
                    src={urlFoto}
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
            Info Penduduk
          </span>
          <form action={handelBtn} className="p-4 flex flex-col gap-5">
            <div>
              <span className="block px-2 text-lg font-semibold">Nama</span>
              <input
                type="text"
                value={name === undefined ? "" : name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan nama penduduk"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">No KK</span>
              <input
                type="text"
                value={no_kk === undefined ? "" : no_kk}
                required
                onChange={(e) => setKK(e.target.value)}
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan no kk penduduk"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">No Induk</span>
              <input
                type="text"
                value={no_induk === undefined ? "" : no_induk}
                required
                onChange={(e) => setInduk(e.target.value)}
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan no induk penduduk"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">Nama Ibu</span>
              <input
                type="text"
                value={nama_ibu === undefined ? "" : nama_ibu}
                required
                onChange={(e) => setIbu(e.target.value)}
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan nama ibu penduduk"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">
                Jenis Kelamin
              </span>
              <input
                type="text"
                value={jk === undefined ? "" : jk}
                required
                onChange={(e) => setJk(e.target.value)}
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan jenis kelamin penduduk"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">
                Foto Penduduk
              </span>
              <input
                type="file"
                onChange={(e) => setFoto(e.target.files[0])}
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan kode pos"
              />
            </div>
            <div className="flex justify-between">
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
