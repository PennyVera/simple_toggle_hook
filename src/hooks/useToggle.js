import { useState } from "react";

export function useToggle(initialValue = false) {
  // state
  //1.  Make a useState variable to hold the open/closed state
  const [isOpen, setIsOpen] = useState(initialValue);

  // actions
  //2. Make a toggle function to flip the state
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  //3. Make an open function to set state to true
  const open = () => {
    setIsOpen(true);
  };

  //4. Make a close function to set state to false
  const close = () => {
    setIsOpen(false);
  };
  // what other components can use
  return [isOpen, toggle, open, close];
}

// 🧩 instead of writing setIsOpen(!isOpen), we'll use the previous value of isOpen to set the new value. This is a better practice because it ensures that we are always working with the most up-to-date state, especially in cases where state updates may be batched or asynchronous.
