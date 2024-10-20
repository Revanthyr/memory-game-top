function WinScreen({ setCardNumber, setWinScreen, cardNumber }) {
  return (
    <div className="win">
      <h1>you won</h1>
      <button
        onClick={() => {
          if (cardNumber === 5) {
            setCardNumber(8);
            setWinScreen(false);
          } else if (cardNumber === 10) {
            setCardNumber(17);
            setWinScreen(false);
          } else {
            setCardNumber(17);
            setWinScreen(false);
          }
        }}
      >
        Keep playing
      </button>
      <button onClick={() => setCardNumber(0)}>Back to Main Screen</button>
      <button onClick={() => setWinScreen(false)}>
        PLay again on same difficulty
      </button>
    </div>
  );
}
export { WinScreen };
