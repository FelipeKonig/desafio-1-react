import styles from "./App.module.css";
import "./global.css";

import {Header} from "./components/Header";

export function App() {

  return (
    <div className={styles.wrapper} >
        <Header />
        <p>Felipe Konig</p>
    </div>
  )
}