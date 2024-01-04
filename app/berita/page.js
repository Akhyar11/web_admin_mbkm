"use client"

import Link from "next/link";
import axios from "axios";
import assets from "../../assets.json";
import { useEffect, useState } from "react";
import Image from "next/image";
import getToken from "@/utils/getToken";

export default function Berita() {
  const [data, setData] = useState([]);
  const handleHapus = async (id) => {
    try {
      const token = await getToken();
      await axios.delete(assets.API + "/post/" + id, {
        headers: { Authorization: "Bearer " + token },
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getData = async () => {
    try {
      const response = await axios.get(assets.API + "/post");
      setData(response.data.post);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="flex justify-between">
        <span className="text-lg font-semibold tracking-wide">Berita Desa</span>

        <Link
          href="/berita/tambah"
          className="px-4 py-2 block w-max text-center rounded-md bg-green-500
          text-lg font-semibold hover:bg-green-800 transition-all duration-300
          cursor-pointer"
        >
          Tambah
        </Link>
      </div>

      {data.map((i) => {
        return (
          <div
            key={i.id}
            className="w-full group block hover:ring hover:ring-primery transition-all duration-300 bg-primery rounded-lg mt-5"
          >
            <div className="flex flex-col relative">
              <div>
                <Image
                  loader={() => assets.PUBLIC + i.picture}
                  src={assets.PUBLIC + i.picture}
                  alt="Kegiatan"
                  width={288}
                  height={288}
                  unoptimized
                  className="w-full bg-white h-72 rounded-lg"
                />
              </div>

              <Link
                href={"/berita/edit/" + i.id}
                className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-lg"
              ></Link>

              <div className="px-4">
                <p className="text-2xl font-semibold absolute bottom-4 text-black">
                  {i.title}
                </p>
              </div>
              <button
                onClick={() => {
                  handleHapus(i.id);
                  window.location.reload();
                }}
                className="bg-red-500 absolute top-2 left-2 opacity-0 group-hover:opacity-100 px-4 py-2 h-max w-max rounded-md text-lg font-semibold hover:bg-red-800 transition-all duration-300"
              >
                Hapus
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
