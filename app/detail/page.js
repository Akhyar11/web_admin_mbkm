"use client";

import getToken from "../../utils/getToken";
import axios from "axios";
import assets from "../../assets.json";
import personIcon from "../../public/person.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Detail() {
  const [name, setName] = useState("");
  const [alamat, setAlamat] = useState("");
  const [provensi, setProvensi] = useState("");
  const [kota, setKota] = useState("");
  const [kode_pos, setPos] = useState("");
  const [foto, setFoto] = useState(undefined);
  const [urlFoto, setUrlFoto] = useState(undefined);
  const [msg, setMsg] = useState(undefined);
  const url = foto === undefined ? undefined : URL.createObjectURL(foto);
  const handelBtn = async () => {
    try {
      const token = await getToken();
      const formData = new FormData();
      formData.append("detail", foto);
      await axios.put(
        assets.API + "/detail/1",
        { name, alamat, provensi, kota, kode_pos },
        { headers: { Authorization: "Bearer " + token } }
      );
      foto !== undefined
        ? await axios.post(
            assets.API + `/detail/img/${kode_pos}/${name}`,
            formData,

            { headers: { Authorization: "Bearer " + token } }
          )
        : null;
      setMsg("Berhasil Menyimpan Perubahan");
      // window.location.reload();
    } catch (err) {
      setMsg(err.response.data.msg);
    }
  };

  const getDetail = async () => {
    try {
      const response = await axios.get(assets.API + "/detail");
      const data = response.data.detail[0];
      setName(data.name);
      setAlamat(data.alamat);
      setPos(data.kode_pos);
      setProvensi(data.provensi);
      setKota(data.kota);
      setUrlFoto(assets.PUBLIC + data.foto);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div>
      <span className="text-lg font-semibold tracking-wide">Detail Desa</span>
      <div className="w-full flex flex-col lg:flex-row bg-primery lg:bg-transparent lg:justify-between gap-5 rounded-lg mt-5">
        <div className="flex flex-col gap-5 bg-primery lg:h-max lg:pb-5 lg:rounded-lg lg:w-1/4">
          <span className="block text-lg font-semibold bg-indigo-800 p-4 border-b rounded-t-lg">
            Foto Desa
          </span>
          <div className="px-6 flex w-full justify-center">
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
            Info Desa
          </span>
          <form action={handelBtn} className="p-4 flex flex-col gap-5">
            <div>
              <span className="block px-2 text-lg font-semibold">Nama</span>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name === "" ? "" : name}
                required
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan nama desa"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">Alamat</span>
              <input
                type="text"
                onChange={(e) => setAlamat(e.target.value)}
                required
                value={alamat === "" ? "" : alamat}
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan alamat desa"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">Provensi</span>
              <input
                type="text"
                onChange={(e) => setProvensi(e.target.value)}
                required
                value={provensi === "" ? "" : provensi}
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan provensi"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">Kota</span>
              <input
                type="text"
                onChange={(e) => setKota(e.target.value)}
                required
                value={kota === "" ? "" : kota}
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan kota"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">Kode Pos</span>
              <input
                type="text"
                onChange={(e) => setPos(e.target.value)}
                required
                value={kode_pos === "" ? "" : kode_pos}
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan kode pos"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">
                Foto Desa
              </span>
              <input
                type="file"
                onChange={(e) => setFoto(e.target.files[0])}
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan kode pos"
              />
            </div>
            <div className="flex gap-5">
              <button className="bg-green-500 px-4 py-2 h-max rounded-md text-lg font-semibold hover:bg-green-800 transition-all duration-300">
                Simpan
              </button>

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
