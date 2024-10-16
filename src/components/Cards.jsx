function Cards() {
  return (
    <div className="cards-container">
      <Card></Card>
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <div className="placeholder"></div>
      <p>Random Pokemon</p>
    </div>
  );
}
export { Cards };
