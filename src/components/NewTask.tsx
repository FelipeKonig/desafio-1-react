import { ChangeEvent, InvalidEvent, useState } from "react";
import { List } from "./List";
import styles from "./NewTask.module.css";

import addLogo from '/assets/add-logo.svg';
import clipboardLogo from '/assets/clipboard-logo.svg';

interface Task {
    id : number;
    content : string;
    checked : boolean;
}

export function NewTask() {

    const[countCreatedTasks, setCountCreatedTasks] = useState(0);
    const[countConcludedTasks, setCountConcludedTasks] = useState(0);

    const[tasks, setTasks] = useState<Task[]>([]);
    const[newTaskName, setNewTaskName] = useState('');

    function handleNewTask() {
        event?.preventDefault();

        setTasks([...tasks, {id : Math.random(),content: newTaskName, checked: false}]);
        setCountCreatedTasks((countCreatedTasks) => {
            return countCreatedTasks +1;
        })
        setNewTaskName('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskName(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function checkTask(idTask: number) {
        const taskChecked = () => {
            return tasks.map(item => {
                var task = Object.assign({}, item);
                if (task.id == idTask) {
                    if(task.checked) {
                        task.checked = false;
                        
                        setCountConcludedTasks((setCountConcludedTasks) => {
                            return setCountConcludedTasks -1;
                        })
                    }else {
                        task.checked = true;

                        setCountConcludedTasks((setCountConcludedTasks) => {
                            return setCountConcludedTasks +1;
                        })
                    }
                }
                return task;
            });
        }

        setTasks(taskChecked);
    }

    function deleteTask(taskIdToDelete: number, taskCheckToDelete: boolean){

        adjustCountsTasks(taskCheckToDelete);

        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id != taskIdToDelete;
        });

        setTasks(tasksWithoutDeletedOne);
    }

    function adjustCountsTasks(taskCheckToDelete: boolean){
        if(taskCheckToDelete) {
            setCountConcludedTasks((setCountConcludedTasks) => {
                return setCountConcludedTasks -1;
            })
        }

        setCountCreatedTasks((setCountCreatedTasks) => {
            return setCountCreatedTasks -1;
        })
    }

    return (
        <div>
            <form className={styles.principal} onSubmit={handleNewTask}>
                <input 
                    name="taskName" 
                    type="text"
                    value={newTaskName}
                    placeholder="Adicione uma nova palavra"
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
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
                    countCreatedTasks >= 1 ? (
                        tasks.map(task => {
                            return <List 
                                key={task.id}
                                id={task.id}
                                content={task.content}
                                checked={task.checked}
                                onCheckTask={checkTask}
                                onDeleteTask={deleteTask}    
                               />
                        })
                        ) : (
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
            </div> 
        </div>
    )
}