import styles from "./styles.module.scss";

export default function ComboInput({ children }) {
  return <div className={styles["combo-input"]}>{children}</div>;
}
