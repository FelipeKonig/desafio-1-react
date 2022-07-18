import styles from "./NewTask.module.css";

import addLogo from '/assets/add-logo.svg';

export function NewTask() {
    return (
        <form className={styles.principal} action="">
            <input type="text" placeholder="Adicione uma nova palavra"/>
            <button>Criar <img src={ addLogo } alt="icone com um botao de mais"/></button>
        </form>
    )
}