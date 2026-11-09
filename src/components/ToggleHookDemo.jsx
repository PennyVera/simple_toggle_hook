import { useToggle } from "../hooks/useToggle";

export default function ToggleHookDemo() {
  // state
  //1. Call the hook and get the state + functions
  const [isOpen, toggle, open, close] = useToggle();
  return (
    <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ddd" }}>
      <h3>useToggle Demo</h3>
      <button onClick={toggle}>Toggle</button>
      <button onClick={open}>open</button>
      <button onClick={close}>close</button>

      {isOpen ? <h1>the component is visible</h1> : <h1>the component is not visible</h1>}
      {/* // buttons
    //2. Add buttons to call toggle, open, close 
    
    // display 
    //3. Show a message based on isOpen state (Conditional rendering) that renders either "Details are now visible." or "Details are hidden." */}
    </div>
  );
}
