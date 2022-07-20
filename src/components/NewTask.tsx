import { useState } from "react";
import { List } from "./List";
import styles from "./NewTask.module.css";

import addLogo from '/assets/add-logo.svg';

export function NewTask() {

    return (
        <div>
            <form className={styles.principal} action="">
                <input type="text" placeholder="Adicione uma nova palavra"/>
                <button type="submit"><span>Criar</span> <img src={ addLogo } alt="icone com um botao de mais"/></button>
            </form>

            <div>
                <List content={"FAZER TEMA DE CASA"} checked={true} countCreatedTasks={1} countConcludedTasks={1} />
            </div>
        </div>
    )
}