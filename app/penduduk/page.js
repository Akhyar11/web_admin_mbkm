"use client";

import Link from "next/link";
import axios from "axios";
import assets from "../../assets.json";
import { useEffect, useState } from "react";
import Image from "next/image";
import getToken from "../../utils/getToken";

export default function Penduduk() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(assets.API + "/penduduk");
      setData(response.data.penduduk);
    } catch (err) {
      console.log(err);
    }
  };

  const handleHapus = async (id) => {
    try {
      const token = await getToken();
      await axios.delete(assets.API + "/penduduk/" + id, {
        headers: { Authorization: "Bearer " + token },
      });
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-full flex flex-col gap-5">
      <span className="text-lg font-semibold tracking-wide">
        Daftar Penduduk
      </span>
      <div className="w-full flex flex-col gap-4 bg-primery rounded-lg p-6">
        <div className="flex justify-between">
          <span className="block text-lg font-semibold">Penduduk</span>
          <div className="flex flex-col items-end gap-2 md:flex-row">
            <input
              placeholder="Cari"
              className="px-4 py-2 rounded-md text-lg max-w-60"
            />
            <Link
              href="/penduduk/tambah"
              className="px-4 py-2 block w-max text-center rounded-md bg-green-500 text-lg font-semibold hover:bg-green-800 transition-all duration-300 cursor-pointer"
            >
              Tambah
            </Link>
          </div>
        </div>

        <div>
          <div className="flex justify-between w-full border-b py-2">
            <p className="block w-10">Foto</p>
            <p className="block w-1/4">Nama</p>
            <p className="block w-1/4">Jenis Kelamin</p>
            <p className="block w-1/4">Aksi</p>
          </div>

          {data.map((i) => {
            return (
              <div
                className="flex items-center justify-between w-full py-2"
                key={i.id}
              >
                <Image
                  loader={() => assets.PUBLIC + i.foto}
                  alt="Penduduk"
                  src={assets.PUBLIC + i.foto}
                  width={40}
                  height={40}
                  unoptimized
                  className="block h-10 bg-white rounded-full"
                />
                <p className="block w-1/4">{i.name}</p>
                <p className="block w-1/4">{i.jk}</p>
                <div className="w-1/4 overflow-auto flex lg:flex-row flex-col gap-2 lg:gap-5">
                  <Link
                    href={"/penduduk/edit/" + i.id}
                    className="px-4 py-2 block w-max text-center rounded-md bg-blue-500 text-lg font-semibold hover:bg-blue-800 transition-all duration-300 cursor-pointer"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      handleHapus(i.id)
                      window.location.reload()
                    }}
                    className="bg-red-500 px-4 py-2 h-max w-max rounded-md text-lg font-semibold hover:bg-red-800 transition-all duration-300"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
