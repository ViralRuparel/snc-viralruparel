import { useEffect, useContext } from "react";
import { LogContext } from "@/context/LogContext";
import { User } from "@/utils/common/person";

export const useLogPersonDetails = (personData: User | null) => {
  const { enableLogs } = useContext(LogContext);
  const currentTime = new Date().toLocaleTimeString();

  useEffect(() => {
    if (enableLogs && personData) {
      console.log("Logging Person Details:", personData);
      console.log("Current Time:", currentTime);
    }
  }, [personData, enableLogs, currentTime]);
};
