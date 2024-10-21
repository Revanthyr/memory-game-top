function LoseScreen({ setCardNumber, setModalIsShown, setScore }) {
  return (
    <div className="lose">
      <h1>you lost</h1>
      <button
        onClick={() => {
          setCardNumber(0);
          setScore(0);
        }}
      >
        Back to Main Screen
      </button>
      <button
        onClick={() => {
          setModalIsShown(false);
          setScore(0);
        }}
      >
        PLay again on same difficulty
      </button>
    </div>
  );
}
export { LoseScreen };
