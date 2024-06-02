import styles from "./display.module.css";
let Display = ({ displayValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayValue}
      readOnly
    ></input>
  );
};

export default Display;
