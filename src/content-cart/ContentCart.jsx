import React from 'react';
import { useSelector } from 'react-redux';

const MyComponent = () => {
  const counter = useSelector(state => state.reducer.counter);

  return (
    <div>
      <p>Counter value: {counter}</p>
      {/* You can use the counter value in your component */}
    </div>
  );
};

export default MyComponent;
