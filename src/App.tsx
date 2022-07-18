import styles from "./App.module.css";
import "./global.css";

import {Header} from "./components/Header";
import {NewTask} from "./components/NewTask";
import { List } from "./components/List";

export function App() {

  return (
    <div className={styles.wrapper} >
        <Header />
        <NewTask />
        <List />
    </div>
  )
}