import { useState } from 'react'
import './index.css'
const Addstudent = (props) => {
    const { addStudent } = props
    const [studentName, setStudentName] = useState('')
    const [studentId, setStudentId] = useState("")
    const onchanged = (event) => {
        setStudentName(event.target.value)
    }
    const onchangeId = (event) => {
        setStudentId(event.target.value)
    }
    const onAddStudent = () => {
        const isAdded = addStudent(studentName, studentId)

        if (isAdded) {
            setStudentName('')
            setStudentId('')
        }
    }
    return (
        <div className="add-student-container">
            <input
                className="form-input"
                type="text"
                placeholder="Student Name"
                value={studentName}
                onChange={onchanged}
            />
            <input
                className="form-input"
                type="text"
                placeholder="Student Id"
                value={studentId}
                onChange={onchangeId}
            />
            <button className="form-input" type="button" onClick={onAddStudent}>Add Student</button>
        </div >
    )
}

export default Addstudent