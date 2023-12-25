export default function Tambah() {
  return (
    <div>
      <span className="text-lg font-semibold tracking-wide">Berita Desa</span>
      <div className="w-full flex flex-col gap-5 bg-primery rounded-lg mt-5">
        <div className="flex flex-col gap-5">
          <span className="block text-lg font-semibold bg-indigo-800 p-4 border-b rounded-t-lg">
            Foto Berita
          </span>
          <div className="px-6">
            <img src="" alt="" className="w-full bg-white h-72" />
          </div>
        </div>
        <div>
          <span className="block text-lg font-semibold bg-indigo-800 p-4 border-b ">
            Info Berita
          </span>
          <div className="p-4 flex flex-col gap-5">
            <div>
              <span className="block px-2 text-lg font-semibold">Nama</span>
              <input
                type="text"
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan nama berita"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">Penulis</span>
              <input
                type="text"
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
                className="bg-indigo-800 p-4 w-full min-h-52 rounded-md placeholder:text-lg"
                placeholder="Masukan no kk penduduk"
              />
            </div>
            <div>
              <span className="block px-2 text-lg font-semibold">Link</span>
              <input
                type="text"
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
                className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
                placeholder="Masukan kode pos"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-5">
                <button className="bg-green-500 px-4 py-2 h-max w-max rounded-md text-lg font-semibold hover:bg-green-800 transition-all duration-300">
                  Tambah
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
