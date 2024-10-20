import { useEffect, useState } from "react";
import { Difficulty } from "./Difficulty.jsx";
import "../styles/index.css";
import { Header } from "./Header.jsx";
import { Cards } from "./Cards.jsx";

import { Footer } from "./Footer.jsx";
function App() {
  const [score, setScore] = useState(0);
  const [cardNumber, setCardNumber] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  console.log("app has been called");

  if (cardNumber === 0) {
    return (
      <Difficulty
        setCardNumber={setCardNumber}
        setScore={setScore}
      ></Difficulty>
    );
  }
  return (
    <div className="body">
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
      <Footer></Footer>
    </div>
  );
}

export default App;
