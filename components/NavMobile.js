import { CiCircleInfo } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { PiHouseLight, PiNewspaperLight } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import Link from "next/link";

export default function NavMobile() {
  return (
    <div
      className="text-lg w-full z-10 transition-all absolute -left-full"
      id="navMobile"
    >
      <Link
        href="/dashboard"
        className="flex cursor-pointer items-center px-6 py-4 border-b border-secondry gap-2 bg-primery"
      >
        <PiHouseLight />
        <span>Dashboard</span>
      </Link>
      <Link
        href="/detail"
        className="flex cursor-pointer text-disable items-center px-6 py-4 border-b border-secondry gap-2 bg-primery"
      >
        <CiCircleInfo />
        <span>Detail Desa</span>
      </Link>
      <Link
        href="/penduduk"
        className="flex cursor-pointer text-disable items-center px-6 py-4 border-b border-secondry gap-2 bg-primery"
      >
        <GoPeople />
        <span>Penduduk</span>
      </Link>
      <Link
        href="/pengurus"
        className="flex cursor-pointer text-disable items-center px-6 py-4 border-b border-secondry gap-2 bg-primery"
      >
        <GoPeople />
        <span>Pengurus</span>
      </Link>
      <Link
        href="/kegiatan"
        className="flex cursor-pointer text-disable items-center px-6 py-4 border-b border-secondry gap-2 bg-primery"
      >
        <IoCalendarOutline />
        <span>Kegiatan Desa</span>
      </Link>
      <Link
        href="/berita"
        className="flex cursor-pointer text-disable items-center px-6 py-4 border-b border-secondry gap-2 bg-primery"
      >
        <PiNewspaperLight />
        <span>Berita Desa</span>
      </Link>
    </div>
  );
}
