import { useState } from "react";
function ExtraScreen({ pokemon }) {
  const [value, setValue] = useState("");
  const [text, setText] = useState(false);
  const [pokemontest, setPokemontest] = useState(pokemon);
  console.log(pokemon, "pokemon");
  if (text === true) {
    return (
      <div className="extra-screen">
        <p>
          You won!{" "}
          <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Heres's a reward...
          </a>
        </p>
      </div>
    );
  }
  return (
    <div className="extra-screen">
      <label htmlFor="pokemonName">What was the name of the last pokemon</label>
      <input
        type="text"
        id="pokemonName"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (pokemontest === value) {
            setText(true);
          }
        }}
      >
        Submit
      </button>
    </div>
  );
}
export { ExtraScreen };
