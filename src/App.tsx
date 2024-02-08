import { Button } from '@/components/ui/button';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <h1 className="p-4 pt-2 text-blue-700 ">React App</h1>
        <Button onClick={handleCount}>Click me to add a value {count}</Button>
      </div>
    </>
  );
}

export default App;
