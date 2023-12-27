import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChanllenge.jsx";

const challengesClasses = "max-w-3xl my-12 mx-auto flex flex-wrap gap-8";

function App() {
  return (
    <>
      <Player />
      <div id="challenges" className={challengesClasses}>
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
