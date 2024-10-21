import { useEffect, useState } from "react";
import { Difficulty } from "./Difficulty.jsx";
import "../styles/index.css";
import { Header } from "./Header.jsx";
import { Cards } from "./Cards.jsx";
import { AudioButton } from "./AudioButton.jsx";

import { Footer } from "./Footer.jsx";
function App() {
  const [score, setScore] = useState(0);
  const [cardNumber, setCardNumber] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  function handleRightClick() {
    console.log("right click");
    const body = document.querySelector("body");

    body.style.backgroundImage = "url(/assets/rayquaza.png)";
  }
  console.log("app has been called");

  if (cardNumber === 0) {
    return (
      <div className="body">
        <Difficulty
          setCardNumber={setCardNumber}
          setScore={setScore}
        ></Difficulty>
        <AudioButton></AudioButton>
      </div>
    );
  }
  const body = document.querySelector("body");
  console.log("test");
  body.style.backgroundImage = "url(/assets/background.png)";
  return (
    <div className="body" onContextMenu={() => handleRightClick()}>
      <Header score={score} bestScore={bestScore}></Header>
      <Cards
        number={cardNumber}
        score={score}
        setScore={setScore}
        setCardNumber={setCardNumber}
        cardNumber={cardNumber}
        bestScore={bestScore}
        setBestScore={setBestScore}
      ></Cards>
      <AudioButton></AudioButton>
      <Footer></Footer>
    </div>
  );
}

export default App;
