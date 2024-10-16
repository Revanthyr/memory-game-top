import { useState } from "react";

import "../styles/index.css";
import { Header } from "./Header.jsx";
import { Cards } from "./Cards.jsx";

import { Footer } from "./Footer.jsx";
function App() {
  const [score, setScore] = useState(0);
  console.log("app has been called");
  let cardNumber = parseInt(prompt("How many cards?"));
  if (cardNumber > 18) cardNumber = 18;
  return (
    <div className="body">
      <Header></Header>
      <Cards number={cardNumber}></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
