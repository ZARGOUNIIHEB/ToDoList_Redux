// STYLING /////////
import './App.css';
import logoChecked from './icons/checked.png';
import logoUnchecked from './icons/unchecked.png';
import deleteLogo from './icons/delete.png';
import editLogo from './icons/edit.png';
//////HOOKS AND LIBRARY //////
import { useState } from 'react';
import { EditText } from 'react-edit-text';
import { useDispatch } from 'react-redux';
import { delet, togueltodo, edittodo } from './redux/Todo';


const Task = ({ task }) => {
    const Dispatch = useDispatch();
    const [editedTask, setEditedTask] = useState(task);
    // const [tName, setTName] = useState(task.taskName);

    const handleToguel = (id) => {
        Dispatch(togueltodo(id));
    }
    const handleDelete = (id) => {
        Dispatch(delet(id))
    }

    const handleEditTask = () => {
        Dispatch(edittodo(editedTask));
    }

    return (
        <div className={`paper ${editedTask.checked ? 'blue' : 'pink'}`} key={editedTask.id} >
            <div className="tape-section"></div>
            <div className="checkedInput">
                <img style={{ width: "35px", height: "35px" }} type="checkbox" onClick={() => handleToguel(editedTask.id)} checked={editedTask.checked} src={editedTask.checked ? logoChecked : logoUnchecked} alt='' />
            </div>
            <div className="outputTaskName">
                <p>{editedTask.taskName}</p>
            </div>
            <div className="outputDescription">
                <EditText style={{
                    fontFamily: "cursive",
                    fontSize: "25px",
                    display: "flex",
                    justifyContent: "center",
                    zIndex: 2
                }} editable='false' value={editedTask.description} onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })} />
            </div>
            <div className="editButton">
                <img style={{ width: "35px", height: "35px" }} onClick={() => handleEditTask()} src={editLogo} alt='' />
            </div>
            <div className="deleteButton">
                <img style={{ width: "35px", height: "35px" }} onClick={() => handleDelete(editedTask.id)} src={deleteLogo} alt='' />
            </div>
            <div className="tape-section"></div>
        </div>
    );
}
export default Task;