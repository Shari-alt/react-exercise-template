import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Your code below
  useEffect(() => {
    function handleWindowWidth(event) {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowWidth);

    return() => {
      window.removeEventListener('resize', handleWindowWidth);
    }
  }, []);

  return (
    <div className="App">
      <p>Window Width: {windowWidth} </p>
    </div>
  );
}

export default App;
