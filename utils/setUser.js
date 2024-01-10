"use client";

import { userStore } from "@/lib/userStore";
import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";
import assets from "@/assets.json";

const SetUser = () => {
  const store = userStore();
  const id = Cookies.get("id");
  const getUser = async () => {
    const user = await axios.get(assets.API + "/user/" + id);

    store.setUser({
      id: user[0].id,
      userName: user[0].username,
      email: user[0].email,
    });
  };

  useEffect(() => {
    getUser();
  });

  return <></>;
};

export default SetUser;
