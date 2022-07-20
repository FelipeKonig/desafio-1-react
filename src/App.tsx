import styles from "./App.module.css";
import "./global.css";

import {Header} from "./components/Header";
import {NewTask} from "./components/NewTask";

export function App() {

  return (
    <div className={styles.wrapper} >
        <Header />
        <NewTask />
    </div>
  )
}