import { useState, useRef } from "react";

const h2Classes = "text-teal-300 my-2.5 text-xl";
const inputClasses =
  "border-solid border rounded-l border-lime-900 bg-emerald-900 p-1 text-teal-100";
const buttonClasses =
  "cursor-pointer bg-lime-900 hover:bg-lime-700 border-solid border rounded-r border-lime-900 hover:border-lime-700 py-1.5 px-4";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  const clickHandler = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  };

  return (
    <section className="text-center">
      <h2 className={h2Classes}>
        Welcome {enteredPlayerName ?? "unkown entity"}
      </h2>
      <p className="flex justify-center">
        <input ref={playerName} className={inputClasses} type="text" />
        <button className={buttonClasses} onClick={clickHandler}>
          Set Name
        </button>
      </p>
    </section>
  );
}
