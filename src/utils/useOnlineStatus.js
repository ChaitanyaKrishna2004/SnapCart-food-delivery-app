import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // check the online status
  const [OnlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  //return the bool value
  return OnlineStatus;
};

export default useOnlineStatus;
