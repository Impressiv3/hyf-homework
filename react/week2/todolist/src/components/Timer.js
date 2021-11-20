import React, { useState, useEffect } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(0);
  let intervalId;

  const changeTimer = () => {
    setTimer((prev) => prev + 1);
  };

  const startTimer = () => {
    if (!intervalId) {
      intervalId = setInterval(changeTimer, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  });

  return <h3>You have spent {timer} seconds on this webpage.</h3>;
}
