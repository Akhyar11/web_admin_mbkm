import { CiCircleInfo } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { PiHouseLight, PiNewspaperLight } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function NavMobile() {
  const route = useRouter()
  
  const handleClick = (href) => {
    route.push(href)
  }
  return (
    <div
      className="text-lg w-full hidden transition-all duration-300 -z-10 -ml-[1000px]"
      id="navMobile"
    >
      <div
        onClick={() => handleClick("/dashboard")}
        className="flex cursor-pointer items-center px-6 py-4 border-b border-secondry gap-2 bg-primery"
      >
        <PiHouseLight />
        <span>Dashboard</span>
      </div>
      <div
        onClick={() => handleClick("/detail")}
        className="flex cursor-pointer text-disable items-center px-6 py-4 border-b border-secondry gap-2 bg-primery"
      >
        <CiCircleInfo />
        <span>Detail Desa</span>
      </div>
      <div
        onClick={() => handleClick("/penduduk")}
        className="flex cursor-pointer text-disable items-center px-6 py-4 border-b border-secondry gap-2 bg-primery"
      >
        <GoPeople />
        <span>Penduduk</span>
      </div>
      <div
        onClick={() => handleClick("/kegiatan")}
        className="flex cursor-pointer text-disable items-center px-6 py-4 border-b border-secondry gap-2 bg-primery"
      >
        <IoCalendarOutline />
        <span>Kegiatan Desa</span>
      </div>
      <div
        onClick={() => handleClick("/berita")}
        className="flex cursor-pointer text-disable items-center px-6 py-4 border-b border-secondry gap-2 bg-primery"
      >
        <PiNewspaperLight />
        <span>Berita Desa</span>
      </div>
    </div>
  );
}
