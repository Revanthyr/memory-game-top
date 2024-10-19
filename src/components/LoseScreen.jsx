function LoseScreen({ setCardNumber, setModalIsShown }) {
  return (
    <div className="lose">
      <h1>you lost</h1>
      <button onClick={() => setCardNumber(0)}>Back to Main Screen</button>
      <button onClick={() => setModalIsShown(false)}>
        PLay again on same difficulty
      </button>
    </div>
  );
}
export { LoseScreen };
// onClick, it should change state of Cards but not app
//
