import { CheckCircle, Circle, Key } from 'phosphor-react';
import styles from './List.module.css';

import trashLogo from '/assets/trash-logo.svg';

interface taskProps {
    id : number;
    content : string;
    checked : boolean;
    onCheckTask: (taskContent: number) => void;
    onDeleteTask: (taskContent: number, taskCheck : boolean) => void;
}

export function List({id, content, checked, onCheckTask, onDeleteTask} : taskProps) {

    function handleDeleteTask() {
        onDeleteTask(id, checked);
    }

    function handleCheckTask() {
        onCheckTask(id);
    }

    return (
        <div className={styles.item}>
            <div className={styles.task}>
                <div className={styles.check}>
                    {checked ? (
                        <CheckCircle onClick={handleCheckTask} size={24} className={styles.iconChecked} weight="fill" />
                    ) : (
                        <Circle onClick={handleCheckTask} size={24} className={styles.icon}/>
                    )}
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
                <img onClick={handleDeleteTask} className={styles.trash} src={trashLogo} alt="o icone de um lixeiro em cinza" />
            </div>
        </div>
    )
}

