import { useContext } from "react";
import { AppContext } from "./AppContext.js";

export default function Navbar() {
  const { toggleTheme, setCurrency, theme } = useContext(AppContext);

  function handleCurrencyOnChange(event: any) {
    event.preventDefault();
    setCurrency?.(event.target.value);
  }
  function handleToggleButton() {
    toggleTheme?.();
  }
  return (
    <>
      Shopping in{" "}
      <select onChange={handleCurrencyOnChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      - Using {theme} theme{" "}
      <button onClick={handleToggleButton}>Toggle theme</button>
      <hr />
    </>
  );
}
