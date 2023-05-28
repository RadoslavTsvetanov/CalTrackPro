import { type NextPage } from "next";
import Link from "next/link";

import { api, type RouterOutputs } from "../utils/api";
import { useCookies } from "react-cookie";
const Home: NextPage = () => {
  const [cookies,setCookie] = useCookies(['name']);
  const test = api.user.getUserStats.useQuery(
    {
      name:"Radoslav"
    },
    {
      enabled:true,
      onSuccess: (data) => {
        console.log(data);
      },
    }
  )
  return (
    <div className = "flex items-center justify-center">
      <div className = "">
        <p>Welcome to CalTrackPro</p>
        <div className="flex gap-9">
          <div >
            <p>Welcome back</p>
            <Link href = {"/login"} className="text-blue-700">login1</Link>  
          </div>
          <div>
            <p>New here</p>
            <Link href = {"/signup"} className="text-blue-700">signup</Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
