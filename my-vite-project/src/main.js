// ParentComponent.js
import React, { useState } from 'react';
import Button from './Button';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
}

export default ParentComponent;

