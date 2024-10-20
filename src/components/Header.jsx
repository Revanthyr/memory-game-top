function Header({ score, bestScore }) {
  return (
    <div className="header">
      <h1>Memory Game</h1>
      <p>
        Score : {score} <br />
        Best Score : {bestScore}
      </p>
    </div>
  );
}
export { Header };
