import styles from "./button-component.module.css";
const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.buttonContainer}>
        {buttonNames.map((names) => (
          <button
            className={styles.button}
            onClick={() => onButtonClick(names)}
          >
            {names}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonContainer;
