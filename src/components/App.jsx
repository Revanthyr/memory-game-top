import { useEffect, useState } from "react";
import { Difficulty } from "./Difficulty.jsx";
import "../styles/index.css";
import { Header } from "./Header.jsx";
import { Cards } from "./Cards.jsx";

import { Footer } from "./Footer.jsx";
function App() {
  const [score, setScore] = useState(0);
  const [cardNumber, setCardNumber] = useState(0);

  console.log("app has been called");

  if (cardNumber == 0) {
    return <Difficulty setCardNumber={setCardNumber}></Difficulty>;
  }
  return (
    <div className="body">
      <Header score={score}></Header>
      <Cards
        number={cardNumber}
        score={score}
        setScore={setScore}
        setCardNumber={setCardNumber}
        cardNumber={cardNumber}
      ></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
