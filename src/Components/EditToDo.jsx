import React, {useState} from 'react'

const EditToDo = ({task, updateTask}) => {
       const [value, setValue] = useState(task.task);

    const handleSubmit = (a) => {
        a.preventDefault();
        updateTask(value, task.id);
        setValue('');
    };

    const handleChange = (a) => {
        setValue(a.target.value);
    };

    return (
        <form className = 'ToDoForm' onSubmit={handleSubmit}>
            <input type="text" 
            className="ToDoInput" 
            value = {value} 
            placeholder='Update Task' 
            // onChange = {(a) => console.log(a.target.value)}
            onChange = {handleChange}
            />

            <button type ='submit' className ="ToDoBtn">Update</button>
        </form>
    );
}

export default EditToDo;