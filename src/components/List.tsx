import { CheckCircle, Circle } from 'phosphor-react';
import styles from './List.module.css';

import clipboardLogo from '/assets/clipboard-logo.svg';
import trashLogo from '/assets/trash-logo.svg';

interface taskProps {
    content : string;
    checked : boolean;
    countCreatedTasks: number;
    countConcludedTasks: number;
}

export function List({content, checked, countCreatedTasks, countConcludedTasks} : taskProps) {

    return (
        <div className={styles.tasks}>
            <div className={styles.info}>
                <span className={styles.created}>
                    Tarefas criadas 
                    <div className={styles.border}>
                        <span className={styles.number}>
                            {countCreatedTasks}
                        </span>
                    </div>
                </span>

                <div className={styles.done}>
                    <span className={styles.concluded}>
                        Concluídas
                        <div className={styles.border}>
                            <span className={styles.number}>
                            {countConcludedTasks > 0 ? (
                                    <p>{countConcludedTasks} de {countCreatedTasks}</p>
                                ) : (
                                    <p>{countConcludedTasks}</p>
                                )
                            }
                            </span>
                        </div>
                    </span>
                </div>
            </div>
            <div className={styles.listItems}>
                {countCreatedTasks > 0 ? (
                    <div className={styles.task}>
                        <div className={styles.check}>
                            {checked ? (
                                    <CheckCircle size={24} className={styles.iconChecked} weight="fill" />
                                ) : (
                                    <Circle size={24} className={styles.icon}/>
                                )
                            }
                        </div>
                        {checked ? (
                                <p className={styles.contentTaskConcluded}>
                                    {content}
                                </p>
                            ) : (
                                <p className={styles.contentTask}>
                                    {content}
                                </p>
                            )
                        }
                        <img className={styles.trash} src={trashLogo} alt="o icone de um lixeiro em cinza" />
                    </div>) : (
                        <div className={styles.emptyListBox}>
                            <img src={clipboardLogo} alt="a logo de uma prancheta" />
                            <span className={styles.emptyList}>
                                Você ainda não tem tarefas cadastradas <br />
                                Crie tarefas e organize seus itens a fazer
                            </span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}