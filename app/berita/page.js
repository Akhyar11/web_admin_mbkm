import Link from "next/link";

export default function Berita() {
  return (
    <div>
      <div className="flex justify-between">
        <span className="text-lg font-semibold tracking-wide">
          Kegiatan Desa
        </span>

        <Link
          href="/berita/tambah"
          className="px-4 py-2 block w-max text-center rounded-md bg-green-500
          text-lg font-semibold hover:bg-green-800 transition-all duration-300
          cursor-pointer"
        >Tambah</Link>
      </div>

      <Link href="/berita/edit/1" className="w-full group block hover:ring hover:ring-primery transition-all duration-300 relative bg-primery rounded-lg mt-5">
        <div className="flex flex-col">
          <div className="">
            <img src="" alt="" className="w-full bg-white h-72 rounded-lg" />
          </div>

          <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-lg"></div>

          <div className="px-4">
            <p className="text-2xl font-semibold absolute bottom-4 z-20 text-black">
              Bersih Desa Bersama Aparat Kepolisian
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
