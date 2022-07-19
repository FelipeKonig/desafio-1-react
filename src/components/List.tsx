import { Circle } from 'phosphor-react';
import styles from './List.module.css';

import clipboardLogo from '/assets/clipboard-logo.svg';
import trashLogo from '/assets/trash-logo.svg';

export function List() {
    return (
        <div className={styles.tasks}>
            <div className={styles.info}>
                <span className={styles.created}>
                    Tarefas criadas 
                    <div className={styles.border}>
                        <span className={styles.number}>
                            0
                        </span>
                    </div>
                </span>

                <div className={styles.done}>
                    <span className={styles.concluded}>
                        Concluídas
                        <div className={styles.border}>
                            <span className={styles.number}>
                                2
                            </span>
                        </div>
                    </span>
                </div>
            </div>
            <div className={styles.listItems}>
                    {/* <img src={clipboardLogo} alt="a logo de uma prancheta" />
                    <span className={styles.emptyList}>
                        Você ainda não tem tarefas cadastradas <br />
                        Crie tarefas e organize seus itens a fazer
                    </span> */}
                <div className={styles.task}>
                    <div className={styles.check}>
                        <Circle size={24} className={styles.icon}/>
                    </div>
                    <p className={styles.contentTask}>
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                    </p>
                    <img className={styles.trash} src={trashLogo} alt="o icone de um lixeiro em cinza" />
                </div>
            </div>
        </div>
    )
}