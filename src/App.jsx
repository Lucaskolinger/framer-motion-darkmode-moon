import Moon from "./Moon";
import darkImage from "./assets/dark.svg";
import lightImage from "./assets/light.svg";
import { useState } from "react";

function App() {
  const [isDarkmode, setIsDarkmode] = useState(false);

  return (
    <div>
      <Moon onSwitchMode={() => setIsDarkmode(!isDarkmode)} />

      {isDarkmode ? (
        <img className="bg-image" src={darkImage} alt="" />
      ) : (
        <img className="bg-image" src={lightImage} alt="" />
      )}
    </div>
  );
}

export default App;
