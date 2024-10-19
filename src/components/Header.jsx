function Header({ score }) {
  return (
    <div className="header">
      <h1>Memory Game</h1>
      <p>
        Score : {score} <br />
        Best Score : {score}
      </p>
    </div>
  );
}
export { Header };
