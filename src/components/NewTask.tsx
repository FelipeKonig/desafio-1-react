import { useState } from "react";
import { List } from "./List";
import styles from "./NewTask.module.css";

import addLogo from '/assets/add-logo.svg';

interface Task {
    content : string;
    checked : boolean;
}

export function NewTask() {

    const[countCreatedTasks, setCountCreatedTasks] = useState(1);
    const[countConcludedTasks, setCountConcludedTasks] = useState(1);

    const[tasks, setTasks] = useState<Task[]>([{content: 'Primeira task',checked: false}]);
    const[newTaskName, setNewTaskName] = useState('');

    function handleNewTask() {
        event?.preventDefault();

        setTasks([...tasks, {content: newTaskName, checked: true}]);
        setCountCreatedTasks((countCreatedTasks) => {
            return countCreatedTasks +1;
        })
        setCountConcludedTasks((setCountConcludedTasks) => {
            return setCountConcludedTasks +1;
        })
        setNewTaskName('');
    }

    function handleNewCommentChange() {
        setNewTaskName(event.target.value);
    }

    function handleCheckTask(contentTask: string) {
        const taskChecked = () => {
            return tasks.map(item => {
                var task = Object.assign({}, item);
                if (task.content == contentTask) {
                    task.checked = true;
                }
                return task;
            });
        }

        setTasks(taskChecked);
    }

    function handleDeleteTask(taskContentToDelete : string){
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.content !== taskContentToDelete;
        });

        setTasks(tasksWithoutDeletedOne);
    }

    return (
        <div>
            <form className={styles.principal} onSubmit={handleNewTask}>
                <input 
                    name="taskName" 
                    type="text"
                    value={newTaskName}
                    placeholder="Adicione uma nova palavra"
                    onChange={handleNewCommentChange}
                />
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
                                    key={task.content}
                                    content={task.content} 
                                    checked={task.checked}
                                    isEmpty={countCreatedTasks == 0}                         
                                />
                            })
                        }
                </div>
            </div> 
        </div>
    )
}