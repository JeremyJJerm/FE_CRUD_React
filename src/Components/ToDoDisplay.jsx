import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

const ToDoDisplay = ({ task, deleteToDo, toggleEdit, toggleComplete }) => {
    return (
        <div className='Todo'>
            <p className={`${task.completed ? 'completed' : 'incompleted'}`}
                onClick={() => toggleComplete(task.id)}>
                {task.task}
            </p>
            <div>
                <FontAwesomeIcon className="edit-icon" icon={faPencil} 
                onClick={() => toggleEdit(task.id)} />
                <FontAwesomeIcon className="delete-icon" icon={faTrash}
                    onClick={() => deleteToDo(task.id)}/>
            </div>
        </div>
    );
};

export default ToDoDisplay;
