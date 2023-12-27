import { useRef, useState } from "react";

import ResultModal from "./ResultModal.jsx";

const challengeClasses =
  "w-80 flex flex-col items-center justify-center p-8 my-8 mx-auto bg-gradient-to-r from-teal-200 to-cyan-200 text-amber-950 shadow-xl shadow-stone-800 rounded-md";
const challengeTimeClasses =
  "border-solid border border-teal-300 rounded py-1 px-2 m-2";
const challengeButtonClasses =
  "mt-4 mb-2 py-2 px-4 border-none rounded bg-teal-900 hover:bg-teal-700 text-teal-100 text-lg cursor-pointer";
const challengeHeaderClasses =
  "text-2xl tracking-widest m-0 text-center uppercase text-amber-900";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // Time runs out
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const resetHandler = () => {
    setTimeRemaining(targetTime * 1000);
  };

  // Start deducting time every 10 milliseconds
  const startHandler = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  // Stop the timer manually
  const stopHandler = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={resetHandler}
      />

      <section className={challengeClasses}>
        <h2 className={challengeHeaderClasses}>{title}</h2>
        <p className={challengeTimeClasses}>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            className={challengeButtonClasses}
            onClick={isTimerActive ? stopHandler : startHandler}
          >
            {isTimerActive ? "Stop" : "Start"} Chanllenge
          </button>
        </p>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Time is running ..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
