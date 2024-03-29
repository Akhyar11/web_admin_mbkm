import Link from "next/link";
import React from "react";

const NacIcon = () => {
  return (
    <div
      className="flex flex-col text-lg bg-primery w-max rounded-b-lg -right-48 absolute transition-all"
      id="navIcon"
    >
      <Link
        href={"#"}
        className="border-b px-6 py-4 hover:bg-indigo-800 transition-all"
      >
        Pengaturan
      </Link>
      <Link
        href={"/pengaturan/pengguna"}
        className="px-6 py-4 hover:bg-indigo-800 transition-all rounded-b-lg"
      >
        Atur Pengguna
      </Link>
    </div>
  );
};

export default NacIcon;
