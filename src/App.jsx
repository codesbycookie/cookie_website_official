import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
<div className="h-screen flex flex-row justify-center items-center bg-white">
  <div className="text-center">
    <h1 className="text-5xl font-bold mb-4">
      Cookie website development started...
    </h1>
    <h3 className="text-5xl font-bold text-[#c18b13]">
      Experience every byte.
    </h3>
  </div>
</div>

  );
}

export default App;
