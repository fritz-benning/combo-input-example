import classNames from "classnames";
import styles from "./styles.module.scss";

export default function TextInput({ roundLeft, roundRight, placeholder }) {
  return (
    <input
      type="text"
      className={classNames(
        styles["text-input"],
        roundLeft && styles["round-left"],
        roundRight && styles["round-right"]
      )}
      placeholder={placeholder}
    />
  );
}
