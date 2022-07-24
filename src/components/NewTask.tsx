import { useState } from "react";
import { List } from "./List";
import styles from "./NewTask.module.css";

import addLogo from '/assets/add-logo.svg';

export function NewTask() {

    const[countCreatedTasks, setCountCreatedTasks] = useState(1);
    const[countConcludedTasks, setCountConcludedTasks] = useState(0);

    const [tasks, setTasks] = useState([1]);

    const[newtask, setNewTask] = useState('');

    function handleNewTask() {
        event?.preventDefault();

        console.log(tasks);
        setTasks([...tasks, tasks.length+1]);
    }

    return (
        <div>
            <form className={styles.principal} onSubmit={handleNewTask}>
                <input type="text" placeholder="Adicione uma nova palavra"/>
                <button type="submit">
                    <span>Criar</span> 
                    <img src={ addLogo } alt="icone com um botao de mais"/>
                 </button>
            </form>

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
                        {
                            tasks.map(task => {
                                return <List 
                                    key={tasks.length+1}
                                    content={tasks.toString()} 
                                    checked={false}
                                    countCreatedTasks={0}
                                    countConcludedTasks={0}                         
                                />
                            })
                        }
                </div>
            </div> 
        </div>
    )
}