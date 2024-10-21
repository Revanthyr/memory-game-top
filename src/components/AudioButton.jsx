import { useState } from "react";
import Sound from "../assets/main.mp3";
const happyMusic = new Audio(Sound);
happyMusic.volume = 0.1;
function AudioButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  happyMusic.pause();
  if (isPlaying) {
    happyMusic.play();
  } else {
    happyMusic.pause();
  }
  return (
    <button
      onClick={() => (isPlaying ? setIsPlaying(false) : setIsPlaying(true))}
      className="audio"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>music-note</title>
        <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z" />
      </svg>
    </button>
  );
}
export { AudioButton };
