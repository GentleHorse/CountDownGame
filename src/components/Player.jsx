import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const nameChangeHandler = (event) => {
    setEnteredPlayerName(event.target.value);
  }

  const clickHandler = () => {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : 'unkown entity'}</h2>
      <p>
        <input type="text" onChange={nameChangeHandler} value={enteredPlayerName} />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
