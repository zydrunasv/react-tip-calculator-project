export default function InputPercent({ text, handleTips1, handleTips2, id }) {
  function handleChange(e) {
    if (id === 1) {
      handleTips1(e);
    } else if (id === 2) {
      handleTips2(e);
    }
  }

  return (
    <div>
      {text}{' '}
      <select onChange={handleChange}>
        <option value="0">Disatisfied (0%)</option>
        <option value="5">It was OK (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Amazing (20%)</option>
      </select>
    </div>
  );
}
