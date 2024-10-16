import { useEffect, useState } from "react";
import { getRandomNumber } from "./randomNum";
function Cards({ number }) {
  const [pokemonArray, setPokemonArray] = useState([]);
  let newArray = [];
  useEffect(() => {
    let randomNum = getRandomNumber(1, 150);
    console.log("USE EFFECT HAS RUN");
    newArray = [];
    const pokemonList = fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${randomNum}&limit=${number}`
    )
      .then((response) => {
        console.log("RESPONSE", response);
        return response.json();
      })
      .then((json) => {
        console.log("JSON", json);

        const fetchPromises = json.results.map((currentPokemon) => {
          return fetch(currentPokemon.url)
            .then((response) => response.json())
            .then((json) => {
              newArray.push({
                name: json.name,
                id: crypto.randomUUID(),
                img: json.sprites.front_default,
              });
            });
        });
        return Promise.all(fetchPromises);
      })
      .then(() => {
        console.log(newArray, "newArray before setting");
        setPokemonArray(newArray);
      });

    return () => {
      setPokemonArray([]);
      console.log("cleaned up the cards container");
    };
  }, []);

  console.log(pokemonArray, "pokemonarray before render");
  return (
    <div className="cards-container">
      {console.log("HEY IM RENDERING FR FR", pokemonArray.length)}
      {pokemonArray.map((curr) => {
        console.log("hey im rendering");
        return (
          <Card text={curr.name} key={curr.id} imgSource={curr.img}></Card>
        );
      })}
    </div>
  );
}

//
//
//
function Card({ text, imgSource }) {
  return (
    <div className="card">
      <img src={imgSource} alt="pokemon" />
      <p>{text}</p>
    </div>
  );
}
export { Cards };
