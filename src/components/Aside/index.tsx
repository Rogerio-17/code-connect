import Image from "next/image";
import styles from "./aside.module.css";

import logo from "@/assets/logo.png";

export function Aside() {
  return (
    <aside className={styles.aside}>
      <Image src={logo} alt="logo da code connect" />
    </aside>
  );
}
