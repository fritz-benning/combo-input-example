import ComboInput from "@/components/ComboInput";
import TextInput from "@/components/TextInput";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <ComboInput>
        <TextInput roundLeft placeholder="Vorname" />
        <TextInput roundRight placeholder="Nachname" />
      </ComboInput>
    </main>
  );
}
