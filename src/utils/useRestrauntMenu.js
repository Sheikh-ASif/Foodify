import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestrauntMenu = (resId) => {
  const [resinfo, setresinfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setresinfo(json.data);

    // console.log(json.data);
    // console.log("Restaurant Info:", resinfo);

  };
  return resinfo;
};
export default useRestrauntMenu;
