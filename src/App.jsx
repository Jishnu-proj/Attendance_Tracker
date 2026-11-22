import { useState, useEffect } from 'react'
import Header from './components/Header'
import Stats from './components/Stats'
import Addstudent from './components/Addstudent'
import StudentList from './components/StudentList'
import './App.css'
const App = () => {
  const initialStudents = [
    {
      id: '261234',
      name: 'Arun',
      status: 'Present',
    },
    {
      id: '269816',
      name: 'Rahul',
      status: 'Absent',
    },
    {
      id: '267960',
      name: 'Abhi',
      status: 'Present',
    },
  ]
  const [students, setstudents] = useState(() => {
    const storedStudents = localStorage.getItem('students')
    return storedStudents !== null ? JSON.parse(storedStudents) : (initialStudents)
  })

  useEffect(() => { localStorage.setItem('students', JSON.stringify(students)) }, [students])
  const addStudent = (studentname, studentId) => {
    const newStudent = {
      id: studentId,
      name: studentname,
      status: 'Absent',
    }
    const exists = students.some(each => each.id === studentId)
    if (exists) {
      return false
    }

    setstudents(prev => [...prev, newStudent])
    return true
  }

  const updateStudentStatus = studentId => {
    setstudents(prevStudents =>
      prevStudents.map(eachStudent => {
        if (eachStudent.id === studentId) {
          return {
            ...eachStudent,
            status: eachStudent.status === 'Present' ? 'Absent' : 'Present'
          }
        }
        return eachStudent
      })
    )
  }
  const deleteStudent = studentId => {
    setstudents(prevStudents => prevStudents.filter(eachStudent => eachStudent.id !== studentId))
  }
  return (
    <div className="app-container">
      <Header />
      <Stats student={students} />
      <Addstudent addStudent={addStudent} />
      <StudentList student={students} updateStudentStatus={updateStudentStatus} deleteStudent={deleteStudent} />
    </div>
  )
}
export default App