import React, { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  });

  return <h3>You have spent {time} seconds on this webpage</h3>;
}
