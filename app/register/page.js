"use client";

import axios from "axios";
import { useState } from "react";
import assets from "../../assets.json";
import { useRouter } from "next/navigation";

export default function Register() {
  const [username, setUserName] = useState(undefined);
  const [pass, setPassword] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [msg, setMsg] = useState(undefined);
  const [msgSucsess, setMsgSucsess] = useState(undefined);

  const handelBtn = async (e) => {
    e.preventDefault();
    try {
      await axios.post(assets.API + "/user/register/admin", {
        username,
        pass,
        email,
      });

      setMsgSucsess("Berhasil membuat akun masuk ke halaman login");
    } catch (err) {
      setMsg(err.response.data.msg);
    }
  };

  return (
    <div className="w-full h-screen md:flex flex-col justify-center md:items-center md:absolute top-0">
      <form action="POST" className="md:w-2/4 p-5 rounded-lg bg-primery">
        <span className="block px-2 text-2xl font-semibold">Sign Up</span>
        <div className="p-4 flex flex-col gap-5">
          <div>
            <span className="block px-2 text-lg font-semibold">Username</span>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
              placeholder="Masukan nama username"
            />
          </div>
          <div>
            <span className="block px-2 text-lg font-semibold">Password</span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
              placeholder="Masukan nama password"
            />
          </div>
          <div>
            <span className="block px-2 text-lg font-semibold">Email</span>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-indigo-800 p-4 w-full rounded-md placeholder:text-lg"
              placeholder="Masukan email password"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-5">
              <button
                onClick={handelBtn}
                className="bg-green-500 px-4 py-2 h-max w-max rounded-md text-lg font-semibold hover:bg-green-800 transition-all duration-300"
              >
                Sign Up
              </button>
            </div>
            {msg === undefined ? null : (
              <p className="block px-4 py-2 bg-red-500 rounded-lg">{msg}</p>
            )}
            {msgSucsess === undefined ? null : (
              <p className="block px-4 py-2 bg-blue-500 rounded-lg">
                {msgSucsess}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
