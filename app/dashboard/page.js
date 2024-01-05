"use client";

import axios from "axios";
import assets from "@/assets.json";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [berita, setBerita] = useState([]);
  const [penduduk, setPenduduk] = useState([]);

  let indexBerita = 0;

  const getData = async () => {
    const dataPenduduk = await axios.get(assets.API + "/penduduk");
    const dataBerita = await axios.get(assets.API + "/post");
    setBerita(dataBerita.data.post);
    setPenduduk(dataPenduduk.data.penduduk);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-full flex flex-col gap-5">
      <span className="text-lg font-semibold tracking-wide">Dashboard</span>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full flex flex-col text-center bg-blue-500 rounded-lg p-6">
          <span className="block text-6xl">{penduduk.length}</span>
          <span className="text-2xl font-semibold">Penduduk</span>
        </div>
        <div className="w-full flex flex-col text-center bg-orange-500 rounded-lg p-6">
          <span className="block text-6xl">55</span>
          <span className="text-2xl font-semibold">Anggota</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full flex flex-col gap-4 bg-primery rounded-lg p-6">
          <div className="flex justify-between">
            <span className="block text-lg font-semibold">Berita Terkini</span>
            <input placeholder="Cari" className="w-44 px-2 rounded-md" />
          </div>

          <div>
            <div className="flex justify-between w-full border-b py-2">
              <p className="block w-6">No</p>
              <p className="block w-1/4">Title</p>
              <p className="block w-1/4">Author</p>
              <p className="block w-1/4">Link</p>
            </div>
            {berita.map((i) => {
              return (
                <div className="flex justify-between w-full py-2" key={i.id}>
                  <p className="block w-6">{++indexBerita}</p>
                  <p className="block w-1/4">{i.title}</p>
                  <p className="block w-1/4">{i.author}</p>
                  <p className="block w-1/4 overflow-auto">{i.link}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 bg-primery rounded-lg p-6 h-max">
          <div className="flex justify-between">
            <span className="block text-lg font-semibold">Pengguna</span>
            <input placeholder="Cari" className="w-44 px-2 rounded-md" />
          </div>

          <div className="flex gap-4 p-4 rounded-md bg-indigo-800">
            <div className="p-6 bg-white rounded-md"></div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold">Muhammad Akhyar</span>
              <span className="text-disable w-full">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
