import { useState } from 'react'
import StudentItem from '../StudentItem'
import Filters from '../Filters'
import './index.css'

const StudentList = (props) => {

    const { student, updateStudentStatus, deleteStudent } = props
    const [searchInput, setSearchInput] = useState('')
    const [selectedFilter, setSelectedFilter] = useState('All')

    const onchange = (event) => {
        setSearchInput(event.target.value)
    }
    const onFilterChange = filter => {
        setSelectedFilter(filter)
    }

    //const filteredStudents = student.filter(each => each.name.toLowerCase().includes(searchInput.toLowerCase()) || each.id.includes(searchInput))
    const filteredStudents = student.filter(each => {
        const matchesSearch =
            each.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            each.id.includes(searchInput)

        const matchesFilter =
            selectedFilter === 'All' || each.status === selectedFilter

        return matchesSearch && matchesFilter
    })

    return (
        <div className="student-list-container">
            <h1 className="section-title">Student List</h1>
            <input className="search-input" placeholder='Search'
                type="text"
                value={searchInput}
                onChange={onchange} />
            <Filters onFilterChange={onFilterChange} activeFilter={selectedFilter} />
            <ul className="student-list">
                {filteredStudents.map((each) => (
                    <StudentItem key={each.id}
                        student={each}
                        updateStudentStatus={updateStudentStatus}
                        deleteStudent={deleteStudent} />
                ))}
                {filteredStudents.length === 0 && <p>No Students Found</p>}
            </ul>
        </div>
    )
}
export default StudentList