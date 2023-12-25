export default function Detail() {
  return (
    <div>
      <span className="text-lg font-semibold tracking-wide">Detail Desa</span>
      <div className="w-full flex flex-col gap-5 bg-primery rounded-lg mt-5">
        <div className="flex flex-col gap-5">
          <span className="block text-lg font-semibold bg-indigo-800 p-4 border-b rounded-t-lg">
            Foto Desa
          </span>
          <div className="px-6">
            <img src="" alt="" className="w-full bg-white h-72" />
          </div>
        </div>
        <div>
          <span className="block text-lg font-semibold bg-indigo-800 p-4 border-b ">
            Info Desa
          </span>
          <div className="p-4 flex flex-col gap-5">
            <div>
              <span className="block px-2 text-lg font-semibold">Nama</span>
              <input
                type="text"
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan nama desa"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">Alamat</span>
              <input
                type="text"
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan alamat desa"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">Provensi</span>
              <input
                type="text"
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan provensi"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">Kota</span>
              <input
                type="text"
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan kota"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">Kode Pos</span>
              <input
                type="text"
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan kode pos"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">Foto Desa</span>
              <input
                type="file"
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan kode pos"
              />
            </div>
            <div className="flex gap-5">
              <button className="bg-green-500 px-4 py-2 rounded-md text-lg font-semibold hover:bg-green-800 transition-all duration-300">
                Simpan
              </button>

              <div className="px-4 py-2 bg-orange-500 rounded-lg">
                <p>
                  Jangan tekan <span className="font-bold">simpan</span> jika
                  tidak melakukan perubahan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
