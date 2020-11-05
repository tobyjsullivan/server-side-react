import React, { useState } from 'react';

interface Props {
}

function DemoCounter(props: Props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Counter: {count}</p>
      <p><button onClick={() => setCount(count + 1)}>+1</button></p>
    </>
  );
}

export default DemoCounter;
