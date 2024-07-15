import React, {useState} from 'react'

export const ToDoForm = ({addToDo}) => {
        const [value, setValue] = useState('')
        const [error, setError] = useState('')

        const handleSubmit = (a) => {
        a.preventDefault();
        if(!value.trim()) {
            setError('Please enter a task.');
            return;
        }
        addToDo(value);
        setValue('')
        setError('');
       };

    const handleChange = (a) => {
        setValue(a.target.value);
    };

    return (
        <form className = "ToDoForm" onSubmit={handleSubmit}>
            <input type="text" className="ToDoInput" 
            value = {value} 
            placeholder='Input Your To-Do' 
            // onChange = {(a) => console.log(a.target.value)}
            onChange = {handleChange}
            />

            <button type ='submit' className ="ToDoBtn">Add</button>
            {error && <div className = "error"> {error} </div>}
        </form>
    );
}
