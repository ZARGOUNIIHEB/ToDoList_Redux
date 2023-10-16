import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add, sorttodo } from './redux/Todo';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import sortLogo from './icons/sort.png';
import addLogo from './icons/add.png';

const InputForm = () => {
    const Dispatch = useDispatch();
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const handleAdd = () => {
        const newTask = {};
        if (taskName === '' || description === '') {
            alert("les champs sont vide");
        } else {
            newTask.id = uuidv4();
            newTask.taskName = taskName;
            newTask.description = description;
            newTask.checked = false;

            Dispatch(add(newTask));

            setTaskName('');
            setDescription('');
        }

    }
    const handleSort = () => {
        Dispatch(sorttodo());
    }
    return (
        <div className='inputForm'>
            <output className="outputFormTaskName">Task : </output>
            <input className="inputFormTaskName" value={taskName} onChange={(e) => setTaskName(e.target.value)}></input>
            <output className="outputFormDescription"> Description : </output>
            <input className="inputFormDescription" value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <img className="addButton" onClick={handleAdd} src={addLogo} alt='' />
            <img className="sortButton" onClick={handleSort} src={sortLogo} alt='' />
        </div >
    );
}
export default InputForm;