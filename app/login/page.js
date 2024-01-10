"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import assets from "../../assets.json";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Login() {
  const [username, setUserName] = useState(undefined);
  const [pass, setPassword] = useState(undefined);
  const [msg, setMsg] = useState(undefined);
  const router = useRouter();

  const handelBtn = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(assets.API + "/user/login", {
        username,
        pass,
      });
      const user = data.data.user[0];
      const now = new Date().getTime() + 1000 * 60 * 5;
      Cookies.set("token", data.data.refreshToken, { expires: new Date(now) });
      Cookies.set("id", user.id, { expires: new Date(now) });
      window.location.reload();
    } catch (err) {
      setMsg(err.response.data.msg);
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token !== "") router.push("/dashboard");
  });

  return (
    <div className="w-full h-screen md:flex flex-col justify-center md:items-center md:absolute top-0">
      <form action="POST" className="md:w-2/4 p-5 rounded-lg bg-primery">
        <span className="block px-2 text-2xl font-semibold">Sign In</span>
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
          <div className="flex justify-between">
            <div className="flex gap-5">
              <button
                onClick={handelBtn}
                className="bg-green-500 px-4 py-2 h-max w-max rounded-md text-lg font-semibold hover:bg-green-800 transition-all duration-300"
              >
                Sign In
              </button>
            </div>
            {msg === undefined ? null : (
              <p className="block px-4 py-2 bg-red-500 rounded-lg">{msg}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
