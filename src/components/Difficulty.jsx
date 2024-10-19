function Difficulty({ setCardNumber }) {
  return (
    <div>
      <button onClick={() => setCardNumber(5)}>Easy</button>
      <button onClick={() => setCardNumber(10)}>Medium </button>
      <button onClick={() => setCardNumber(17)}>Hard</button>
    </div>
  );
}
export { Difficulty };
