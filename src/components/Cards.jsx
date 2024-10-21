import { useEffect, useState } from "react";
import { arrayWithoutDuplicates } from "./randomNum";
import { LoseScreen } from "./LoseScreen.jsx";
import { WinScreen } from "./WinScreen.jsx";
import { ExtraScreen } from "./ExtraScreen.jsx";
function Cards({
  number,
  score,
  setScore,
  setCardNumber,
  cardNumber,
  bestScore,
  setBestScore,
}) {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [modalIsShown, setModalIsShown] = useState(false);
  const [winScreen, setWinScreen] = useState(false);
  const [extraScreen, setExtraScreen] = useState(false);
  let newArray = [];

  useEffect(() => {
    newArray = [];
    const pokedex = fetch(` https://pokeapi.co/api/v2/pokedex/4`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const fetchNumbers = arrayWithoutDuplicates(number);

        const fetchPromises = [];
        fetchNumbers.map((current) => {
          fetchPromises.push(
            fetch(
              json.pokemon_entries[current].pokemon_species.url.replace(
                "-species",
                ""
              )
            )
          );
        });

        return Promise.all(fetchPromises);
      })
      .then((responses) => {
        const jsonRequests = [];
        responses.map((current) => {
          jsonRequests.push(current.json());
        });

        return Promise.all(jsonRequests);
      })
      .then((pokemons) => {
        newArray = [];
        pokemons.map((current) => {
          newArray.push({
            name: current.name,
            id: crypto.randomUUID(),
            img: current.sprites.front_default,
          });
        });

        setPokemonArray(newArray);
      });

    return () => {
      setPokemonArray([]);
      setClickedPokemon([]);
    };
  }, [modalIsShown, winScreen]);

  function randomizePokemon(array) {
    const newPokemonArray = [...array];
    newPokemonArray.sort(() => {
      return 0.5 - Math.random();
    });

    setPokemonArray(newPokemonArray);
  }

  function cardOnClick(name) {
    if (clickedPokemon.includes(name)) {
      setModalIsShown(true);
      if (bestScore < score) {
        setBestScore(score);
      }
    } else if (clickedPokemon.length === cardNumber - 1 && cardNumber === 17) {
      console.log("about to do extra screen");
      setExtraScreen(true);
    } else if (clickedPokemon.length === cardNumber - 1) {
      console.log("about to do win screnen");
      setScore(score + 1);
      setWinScreen(true);
    } else {
      console.log("about to push into array");
      setScore(score + 1);
      let placeholder = [...clickedPokemon];
      placeholder.push(name);
      setClickedPokemon(placeholder);
      randomizePokemon(pokemonArray);
    }
  }
  console.log("clicked", clickedPokemon);
  if (modalIsShown) {
    return (
      <LoseScreen
        setCardNumber={setCardNumber}
        setModalIsShown={setModalIsShown}
      ></LoseScreen>
    );
  }
  if (extraScreen) {
    console.log("clicked-1", clickedPokemon);
    let pokemontest = clickedPokemon[15];
    return <ExtraScreen pokemon={pokemontest}></ExtraScreen>;
  }
  if (winScreen) {
    return (
      <WinScreen
        setCardNumber={setCardNumber}
        setWinScreen={setWinScreen}
        cardNumber={cardNumber}
      ></WinScreen>
    );
  }

  return (
    <div>
      <button onClick={() => randomizePokemon(pokemonArray)}>Randomize</button>
      <div className="cards-container">
        {pokemonArray.map((curr) => {
          console.log("hey im rendering");
          return (
            <Card
              text={curr.name}
              key={curr.id}
              imgSource={curr.img}
              onClickHandle={cardOnClick}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

function Card({ text, imgSource, onClickHandle }) {
  return (
    <div className="card" onClick={() => onClickHandle(text)}>
      <img src={imgSource} alt="pokemon" />
      <p>{text}</p>
    </div>
  );
}
export { Cards };
