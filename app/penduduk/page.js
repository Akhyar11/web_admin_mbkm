import Link from "next/link";

export default function Penduduk(){
  return (
    <div className="w-full flex flex-col gap-5">
      <span className="text-lg font-semibold tracking-wide">
        Daftar Penduduk
      </span>
      <div className="w-full flex flex-col gap-4 bg-primery rounded-lg p-6">
        <div className="flex justify-between">
          <span className="block text-lg font-semibold">Penduduk</span>
          <input placeholder="Cari" className="w-44 px-2 rounded-md" />
        </div>

        <div>
          <div className="flex justify-between w-full border-b py-2">
            <p className="block w-10">Foto</p>
            <p className="block w-1/4">Nama</p>
            <p className="block w-1/4">Jenis Kelamin</p>
            <p className="block w-1/4">Aksi</p>
          </div>

          <div className="flex justify-between w-full py-2">
            <p className="block w-10 bg-white h-10"></p>
            <p className="block w-1/4">Muhammad Akhyar</p>
            <p className="block w-1/4">Laki Laki</p>
            <div className="w-1/4 overflow-auto">
              <Link href="/penduduk/edit/1" className="px-4 py-2 block w-max text-center rounded-md bg-blue-500 text-lg font-semibold hover:bg-blue-800 transition-all duration-300 cursor-pointer">
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}