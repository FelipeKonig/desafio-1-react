import styles from "./Header.module.css";

import rocketLogo from '/assets/rocket-logo.svg';
import todoLogo from '/assets/todo-logo.svg';

export function Header() {
    return (
        <header className={styles.header} >
            <div className={styles.centerLogo}>
                <div className={styles.logo}>
                    <img className={styles.rocket} src={rocketLogo} alt="logo com um foguete com borda azul" />
                    <img  className={styles.todo} src={todoLogo} alt="logo escrito 'TODO' em metade azul e roxo" />
                </div>
            </div>
        </header>
    )
}