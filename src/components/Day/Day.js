import React, {useEffect, useState} from "react";
import style from './day.module.scss'
import Task from "../Task/Task";

const Day = ({data, deleteTask}) => {
    const [tasks, setTasks] = useState(data.tasks);

    useEffect(() => {
        setTasks(data.tasks)
    }, [data.tasks]);

    return (
        <div className={style.mainContainer}>
            <div>
                <div className={style.mainLabel}>{data.date}</div>
                {tasks.map((task) => {
                    return (
                        <Task dayId={data.id} key={task.id} data={task} deleteFunc={deleteTask}/>
                    )
                })
                }
            </div>
        </div>
    )
};

export default Day;
