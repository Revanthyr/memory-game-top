import { useEffect, useState } from "react";
import { getRandomNumber, arrayWithoutDuplicates } from "./randomNum";
function Cards({ number }) {
  const [pokemonArray, setPokemonArray] = useState([]);
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
        // make an array of number random nums, then fetch with those ez pz
        const fetchNumbers = arrayWithoutDuplicates(number);
        // i want to create an array of length num, that doesnt have any duplicates.
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
        // for (let i = number; i > 0; i--) {
        //   fetchPromises.push(
        //     fetch(
        //       json.pokemon_entries[
        //         getRandomNumber(1, 201)
        //       ].pokemon_species.url.replace("-species", "")
        //     )
        //   );
        // }

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
      console.log("cleaned up the cards container");
    };
  }, []);

  function randomizePokemon(array) {
    const newPokemonArray = [...array];
    newPokemonArray.sort(() => {
      return 0.5 - Math.random();
    });
    setPokemonArray(newPokemonArray);
  }
  console.log(pokemonArray, "pokemonarray before render");
  return (
    <div>
      <button onClick={() => randomizePokemon(pokemonArray)}>Randomize</button>
      <div className="cards-container">
        {console.log("HEY IM RENDERING FR FR", pokemonArray.length)}
        {pokemonArray.map((curr) => {
          console.log("hey im rendering");
          return (
            <Card text={curr.name} key={curr.id} imgSource={curr.img}></Card>
          );
        })}
      </div>
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
