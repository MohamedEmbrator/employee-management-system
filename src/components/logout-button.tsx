"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { DOMAIN } from "@/utils/constants";

const LogoutButton = () => {
  const router = useRouter();
  const logoutHandler = async () => {
    try {
      await axios.get(`${DOMAIN}/api/auth/logout`);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={logoutHandler} className="text-destructive p-1.5">
      تسجيل الخروج
    </button>
  );
};

export default LogoutButton;
