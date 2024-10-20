import { useEffect, useState } from "react";
import { arrayWithoutDuplicates } from "./randomNum";
import { LoseScreen } from "./LoseScreen.jsx";
import { WinScreen } from "./WinScreen.jsx";
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
  let newArray = [];

  useEffect(() => {
    console.log("USE EFFECT HAS RUN");
    newArray = [];
    const pokedex = fetch(` https://pokeapi.co/api/v2/pokedex/4`)
      .then((response) => {
        console.log("RESPONSE", response);
        return response.json();
      })
      .then((json) => {
        const fetchNumbers = arrayWithoutDuplicates(number);

        console.log("JSON", json);
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
        console.log("JSON REQUESTS", jsonRequests);
        return Promise.all(jsonRequests);
      })
      .then((pokemons) => {
        console.log(pokemons);
        newArray = [];
        pokemons.map((current) => {
          newArray.push({
            name: current.name,
            id: crypto.randomUUID(),
            img: current.sprites.front_default,
          });
        });
        console.log(newArray, "newArray before setting");
        setPokemonArray(newArray);
      });

    return () => {
      setPokemonArray([]);
      setClickedPokemon([]);
      console.log("cleaned up the cards container");
    };
  }, [modalIsShown, winScreen]);

  function randomizePokemon(array) {
    const newPokemonArray = [...array];
    newPokemonArray.sort(() => {
      return 0.5 - Math.random();
    });

    setPokemonArray(newPokemonArray);
  }
  console.log(pokemonArray, "pokemonarray before render");

  function cardOnClick(name) {
    if (clickedPokemon.includes(name)) {
      setModalIsShown(true);
      if (bestScore < score) {
        setBestScore(score);
      }
    } else if (clickedPokemon.length === cardNumber - 1) {
      console.log(clickedPokemon, "CLICKED POKEMON");
      console.log(cardNumber, "CAR NUMEBR");
      setScore(score + 1);
      setWinScreen(true);
    } else {
      setScore(score + 1);
      let placeholder = [...clickedPokemon];
      placeholder.push(name);
      setClickedPokemon(placeholder);
      randomizePokemon(pokemonArray);
    }
  }
  if (modalIsShown) {
    return (
      <LoseScreen
        setCardNumber={setCardNumber}
        setModalIsShown={setModalIsShown}
      ></LoseScreen>
    );
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
        {console.log("HEY IM RENDERING FR FR", pokemonArray.length)}
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
