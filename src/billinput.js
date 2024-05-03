export default function BillInput({ total, handleInput }) {
  return (
    <div>
      How much was the bill?{' '}
      <input type="number" value={total} onChange={handleInput}></input>
    </div>
  );
}
