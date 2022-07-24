import { CheckCircle, Circle } from 'phosphor-react';
import styles from './List.module.css';

import clipboardLogo from '/assets/clipboard-logo.svg';
import trashLogo from '/assets/trash-logo.svg';

interface taskProps {
    content : string;
    checked : boolean;
    isEmpty: boolean;
}

export function List({content, checked, isEmpty} : taskProps) {

    return (
        <div className={styles.item}>
                {!isEmpty ? (
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
                        <div className={styles.emptyList}>
                            <img src={clipboardLogo} alt="a logo de uma prancheta" />
                            <p className={styles.emptyList}>
                                Você ainda não tem tarefas cadastradas <br />
                                Crie tarefas e organize seus itens a fazer
                            </p>
                        </div>
                    )
                }
        </div>
    )
}