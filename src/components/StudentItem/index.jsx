import { MdDeleteOutline } from "react-icons/md";
import './index.css'
const StudentItem = (props) => {
    const { student, updateStudentStatus, deleteStudent } = props
    const { name, id, status } = student

    return (
        <li className="student-item">
            <div className="student-details">
                <h1 className="student-name">{name}</h1>
                <p className="student-id">{id}</p>
            </div>
            <span className={`status-badge ${status.toLowerCase()}`}>{status}</span>
            <div className="student-actions">
                <button
                    className="attendance-button"
                    type="button"
                    onClick={() => updateStudentStatus(id)}
                >
                    {status === 'Present' ? 'Mark Absent' : 'Mark Present'}
                </button>
                <button
                    className="delete-button"

                    type="button"
                    onClick={() => deleteStudent(id)}>
                    <MdDeleteOutline />
                </button>
            </div>
        </li>
    )
}
export default StudentItem