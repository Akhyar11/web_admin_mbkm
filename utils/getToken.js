import Cookies from "js-cookie"
import assets from "../assets.json";
import axios from "axios";

const getToken = async () => {
  try {
      const cookieToken = Cookies.get("token")
      const token = await axios.post(assets.API + "/user/token", {token: cookieToken})
      return token.data.accessToken;
    } catch (err) {
      console.log(err)      
    }
}

export default getToken