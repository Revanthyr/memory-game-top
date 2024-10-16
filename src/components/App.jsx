import { useState } from "react";

import "../styles/index.css";
import { Header } from "./Header.jsx";
import { Cards } from "./Cards.jsx";

import { Footer } from "./Footer.jsx";
function App() {
  const [score, setScore] = useState(0);
  console.log("app has been called");
  return (
    <div className="body">
      <Header></Header>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
