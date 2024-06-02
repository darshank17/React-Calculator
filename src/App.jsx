import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/button-component";
import Display from "./components/display";
function App() {
  const [calVal, setCalVal] = useState(" ");

  const onButtonClick = (names) => {
    if (names === "C") {
      setCalVal(" ");
    } else if (names === "=") {
      const res = eval(calVal);
      setCalVal(res);
    } else {
      const newValue = calVal + names;
      setCalVal(newValue);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
