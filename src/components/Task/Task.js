import React, {useReducer} from "react";
import style from './task.module.scss';
import {priorityColorChange} from "../../utils";
import {initialState, reducer} from "./stateInitial";

const Task = ({data, deleteFunc, dayId}) => {
    const [state, setValue] = useReducer(reducer, initialState(data));

    return (
        <div className={style.mainContainer}>
            <input className={style.checkbox} type='checkbox'/>
            <div>
                <input
                    value={state.label}
                    className={style.label}
                    onChange={(e) => setValue({label: e.target.value})}
                />
                <input
                    value={state.description}
                    className={style.description}
                    onChange={(e) => setValue({description: e.target.value})}
                />
                <div className={style.bottomBlock}>
                    {priorityColorChange(state.priority)}
                    <div className={style.bottomItem}>{state.priority} Priority</div>
                    <div className={style.bottomItem}>{state.time}</div>
                    <div className={style.bottomItem}>{state.duration}</div>
                    <button
                        onClick={() => deleteFunc(state.id, dayId)}
                        className={style.delete}
                    >Delete
                    </button>
                </div>

            </div>
        </div>
    )
};

export default Task;
