import { forwardRef, useImperativeHandle, useRef } from "react";

const resultModalClasses =
  "border-none rounded-lg p-8 bg-cyan-50/40 backdrop-blur";
const resultModalHeaderClasses = "font-handjet mb-1 text-5xl uppercase";
const resultModalParagraphClasses = "my-2 text-xl";
const resultModalStrongClasses = "text-emerald-800";
const resultModalButtonClasses =
  "mt-4 py-2 px-4 border-none rounded bg-emerald-800 hover:bg-emerald-600 text-emerald-100 text-xl cursor-pointer";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} id="result-modal" className={resultModalClasses} onClose={onReset}>
      {userLost && <h2 className={resultModalHeaderClasses}>You lost</h2>}
      {!userLost && (
        <h2 className={resultModalHeaderClasses}>Your score: {score} / 100</h2>
      )}
      <p className={resultModalParagraphClasses}>
        The target time was{" "}
        <strong className={resultModalStrongClasses}>
          {targetTime} seconds.
        </strong>
      </p>
      <p className={resultModalParagraphClasses}>
        You stopped the timer with{" "}
        <strong className={resultModalStrongClasses}>
          {formattedRemainingTime} seconds left.
        </strong>
      </p>
      <form method="dialog" className="text-right" onSubmit={onReset}>
        <button className={resultModalButtonClasses}>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
