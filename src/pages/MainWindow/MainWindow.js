import React, {useEffect, useState} from "react";
import style from './mainWindow.module.scss';
import data from './../../../src/fakeData/data.json';
import Day from "../../components/Day/Day";
import Input from "../../components/Input/Input";
import _ from 'lodash';

const MainWindow = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [priorityTypes, setPriorityTypes]= useState([])
    const [chosenType, setChosenType] = useState('All')
    const [days, setDays] = useState([]);
    const [newTask, setNewTask] = useState('')
    useEffect(() => {
        if (data.priorities) {
            setPriorityTypes(data.priorities)
        }

    }, [data.priorities]);

    useEffect(() => {
        if (data.days) {
            setDays(data.days)
        }
    }, [data.days]);

    //Конечно, работать в будущем оно должно не так, пока при создании задачи просто добавляем новую задачу во второй день
    const addTask = (value) => {
        const data = _.clone(days);
        data[1].tasks.push({
            id: Math.floor(Math.random()*1000), label: value, description: '', priority: 'Normal', time: '', duration: 0
        });
        setDays(data);
        setNewTask('');
    };

    // Тоже не самый изящный костыль, при наличии запросов это не понадобится
    const deleteTask = (taskId, dayId) => {
        const dayIndex = _.findIndex(days, ['id', dayId]);
        const data = _.clone(days);
        const taskIndex = _.findIndex(data[dayIndex].tasks, ['id', taskId] )
        data[dayIndex].tasks.splice(taskIndex, 1);
        setDays(data)
    };

    if (data) {
        return (
            <div className={style.mainContainer}>
                <div className={style.leftPanel}>
                    <div className={style.logo}>
                        <img src={require('../../assets/logo.png')} alt={'logo'}/>
                    </div>
                    <div
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className={style.priorityBlock}
                    >
                        Priority
                        <div className={isCollapsed ? style.collapsed : ''}/>
                    </div>
                    {!isCollapsed ? (
                        <div className={style.priorityList}>
                            {priorityTypes?.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        onClick={() => setChosenType(item)}
                                        className={chosenType === item ? style.chosen : ''}
                                    >
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                    ) : null}

                    <div className={style.plusIcon}/>
                </div>
                <div className={style.rightPart}>
                    {days?.map((day) => {
                        return (
                            <Day
                                deleteTask={deleteTask}
                                key={day.id}
                                data={day}
                            />
                        )
                    })}
                    <div className={style.addTaskContainer}>
                        <Input
                            value={newTask}
                            onChange={setNewTask}
                            placeholder='Enter task title...'
                        />
                        <button
                            disabled={!newTask}
                            onClick={() => addTask(newTask)}
                            className={style.sendButton}
                        >Send
                        </button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>Preloader</div>
        )
    }
};

export default MainWindow;
