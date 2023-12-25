export default function Dashboard() {
  return (
    <div className="w-full flex flex-col gap-5">
      <span className="text-lg font-semibold tracking-wide">Dashboard</span>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full flex flex-col text-center bg-blue-500 rounded-lg p-6">
          <span className="block text-6xl">55</span>
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
            <div className="flex justify-between w-full py-2">
              <p className="block w-6">1</p>
              <p className="block w-1/4">Boleh Dicoba Tapi Jangan Candu</p>
              <p className="block w-1/4">Muhammad Akhyar</p>
              <p className="block w-1/4 overflow-auto">http://localhost:5000</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 bg-primery rounded-lg p-6">
          <div className="flex justify-between">
            <span className="block text-lg font-semibold">Pengguna</span>
            <input placeholder="Cari" className="w-44 px-2 rounded-md" />
          </div>

          <div className="flex gap-4 p-4 rounded-md bg-indigo-800">
            <img className="p-6 bg-white rounded-md"/>
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
