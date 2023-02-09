import Moon from "./Moon";
import darkImage from "./assets/dark.svg";
import lightImage from "./assets/light.svg";
import { useState } from "react";

function App() {
  const [isDarkmode, setIsDarkmode] = useState(false);
  const [showCopyright, setShowCopyright] = useState(false);

  return (
    <div>
      <Moon onSwitchMode={() => setIsDarkmode(!isDarkmode)} />

      {isDarkmode ? (
        <img className="bg-image" src={darkImage} alt="" />
      ) : (
        <img className="bg-image" src={lightImage} alt="" />
      )}

      {showCopyright && (
        <div className="copyright-tooltip">
          <p>Moon Image by OpenClipart-Vectors from Pixabay</p>
          <p>Background Images by Izwar Muis from Pixabay </p>
        </div>
      )}
      <svg
        className="copyright-icon"
        viewBox="0 0 24 24"
        onMouseOver={() => setShowCopyright(true)}
        onMouseLeave={() => setShowCopyright(false)}
      >
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M15 9.354a4 4 0 1 0 0 5.292" />
        </g>
      </svg>
    </div>
  );
}

export default App;
