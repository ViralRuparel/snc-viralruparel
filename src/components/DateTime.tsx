import React, { useState, useEffect } from "react";

export const DateTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const formattedTime = now
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
        .replace(",", "")
        .replace(/(\d+)\/(\d+)\/(\d+), (\d+:\d+:\d+)/, "$3-$1-$2 : $4");
      setCurrentTime(formattedTime);
    };

    tick();

    const intervalId = setInterval(tick, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed top-0 right-0 m-4 bg-white p-3 rounded shadow-lg text-gray-800">
      <p>Current Time: {currentTime}</p>
    </div>
  );
};
