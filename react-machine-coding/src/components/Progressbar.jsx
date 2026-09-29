// Build an app where clicking the "Add" button adds progress bars to the page. The progress bars fill up in series, aka the second bar only starts filling up after the first bar is completely filled.

import { useEffect, useState } from "react";

function ProgressBarQue() {
  const [progressBarCount, setProgressBarCount] = useState([]);
  const [prevBarCompleted, setPrevBarCompleted] = useState(true);

  const addProgressBar = () => {
    if (!prevBarCompleted) return;

    setProgressBarCount((prev) => [...prev, prev.length + 1]);

    setPrevBarCompleted(false);
  };

  const onComplete = () => {
    setPrevBarCompleted(true);
  };

  return (
    <>
      <button onClick={addProgressBar} disabled={!prevBarCompleted}>
        Add
      </button>

      {progressBarCount.map((id) => (
        <ProgressBar key={id} onComplete={onComplete} />
      ))}
    </>
  );
}

export default ProgressBarQue;

function ProgressBar({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }

        return prev + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: `${progress}%`,
        height: "5px",
        background: "red",
        marginTop: "10px",
      }}
    />
  );
}
