import GeneratedNumber from "./GeneratedNumber";
import Player from "./Player";
function GameGuessNumber() {
  return (
    <div>
      <GeneratedNumber />
      <div>
        <Player playerNumber={1} />
        <Player playerNumber={2} />
      </div>
    </div>
  );
}
