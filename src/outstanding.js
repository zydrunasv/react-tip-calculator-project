export default function Outstanding({ total, tips1, tips2 }) {
  return (
    <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
      <br />
      You pay {(Number(total) * (tips1 + tips2)) / 200 + total} (
      {(tips1 + tips2) / 2}%)
      <br />
      <br />
    </div>
  );
}
