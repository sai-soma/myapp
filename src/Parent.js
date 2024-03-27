import React, { useRef } from 'react';
import CustomInput from './CustomInput';

const Parent = () => {
  const inputRef = useRef(null);
  const myRef = useRef(null);
  const handleFocusButtonClick = () => {
    // Call the 'focusInput' method of the child component
    // if (inputRef.current) {
      // inputRef.current.focusInput();
      myRef.current.focus();
    // }
  };
  return (
    <div>
      {/* Child component with the ref */}
      {/* <CustomInput ref={inputRef} placeholder="Enter your name" /> */}
      <input type='text' ref={myRef}/>
      <button onClick={handleFocusButtonClick}>Focus Input</button>
    </div>
  );
};
export default Parent;