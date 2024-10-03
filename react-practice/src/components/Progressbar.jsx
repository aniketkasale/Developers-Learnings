// Build an app where clicking the "Add" button adds progress bars to the page. The progress bars fill up in series, aka the second bar only starts filling up after the first bar is completely filled.

import { useEffect, useState } from 'react';

function ProgressBarQue() {
  const [progressBarCount, setProgressBarCount] = useState([]);
  const [prevBarCompleted, setprevBarCompleted] = useState(true);

  const addProgressBar = () => {
    if (prevBarCompleted) {
      setProgressBarCount([...progressBarCount, progressBarCount.length + 1]);
      setprevBarCompleted(false);
    }
  };

  const onComplete = () => {
    setprevBarCompleted(true);
  };

  return (
    <>
      <button onClick={() => addProgressBar()} disabled={!prevBarCompleted}>
        Add
      </button>
      <br />
      <br />
      {progressBarCount.map(() => {
        return <ProgressBar onComplete={onComplete} />;
      })}
    </>
  );
}

export default ProgressBarQue;

function ProgressBar({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (interval) clearInterval(interval);
    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 10);
    } else {
      onComplete();
    }

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <div
      style={{
        width: `${progress}%`,
        height: '5px',
        background: 'red',
        marginTop: '10px',
      }}
    ></div>
  );
}
