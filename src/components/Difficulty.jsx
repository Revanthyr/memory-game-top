function Difficulty({ setCardNumber, setScore }) {
  return (
    <div>
      <button
        onClick={() => {
          setCardNumber(5);
          setScore(0);
        }}
      >
        Easy
      </button>
      <button
        onClick={() => {
          setCardNumber(10);
          setScore(0);
        }}
      >
        Medium{" "}
      </button>
      <button
        onClick={() => {
          setCardNumber(17);
          setScore(0);
        }}
      >
        Hard
      </button>
    </div>
  );
}
export { Difficulty };
