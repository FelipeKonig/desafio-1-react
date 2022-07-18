import styles from './List.module.css';

import clipboardLogo from '/assets/clipboard-logo.svg';

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
                                0
                            </span>
                        </div>
                    </span>
                </div>
            </div>
            <div className={styles.empty}>
                <img src={clipboardLogo} alt="a logo de uma prancheta" />
                <span className={styles.emptyList}>
                    Você ainda não tem tarefas cadastradas <br />
                    Crie tarefas e organize seus itens a fazer
                </span>
            </div>
        </div>
    )
}