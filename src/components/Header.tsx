import { useEffect, useState } from "react";

export default function Header() {
  const [toggleMode, setToggleMode] = useState<boolean>(() => {
    localStorage.darkMode ?? localStorage.setItem("darkMode", "false");
    return JSON.parse(localStorage.darkMode)
  });

  useEffect(() => {
    localStorage.darkMode = toggleMode;
  }, [toggleMode]);

  return (
    <header>
      <h1>Where in the world?</h1>
      <button
        className="toggle-dark-mode"
        onClick={() => setToggleMode(!toggleMode)}
        data-dark-mode={toggleMode}
      >
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
          {toggleMode ? (
            <path d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z" />
          ) : (
            <path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          )}
        </svg>
        <span>Dark Mode</span>
      </button>
    </header>
  )
}