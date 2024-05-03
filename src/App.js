import BillInput from './billinput';
import InputPercent from './inputpercent';
import Outstanding from './outstanding';
import Reset from './reset';
import { useState } from 'react';

function App() {
  const [total, setTotal] = useState(0);
  const [tips2, setTips2] = useState(0);
  const [tips1, setTips1] = useState(0);

  function handleInput(e) {
    setTotal(Number(e.target.value));
  }

  function handleTips1(e) {
    setTips1(Number(e.target.value));
  }

  function handleTips2(e) {
    setTips2(Number(e.target.value));
  }

  function handleReset() {
    setTotal(0);
    setTips1(0);
    setTips2(0);
  }

  return (
    <div>
      <BillInput total={total} handleInput={handleInput} />
      <InputPercent
        id={1}
        tips1={tips1}
        setTips1={setTips1}
        tips2={tips2}
        setTips2={setTips2}
        handleTips1={handleTips1}
        handleTips2={handleTips2}
        text="How did you like the service?"
      />
      <InputPercent
        id={2}
        tips1={tips1}
        tips2={tips2}
        setTips2={setTips2}
        setTips1={setTips1}
        handleTips1={handleTips1}
        handleTips2={handleTips2}
        text="How did your friend like the service?"
      />
      <Outstanding
        total={total}
        setTips1={setTips1}
        setTips2={setTips2}
        tips1={tips1}
        tips2={tips2}
      />
      <Reset setTotal={setTotal} handleReset={handleReset} />
    </div>
  );
}

export default App;
