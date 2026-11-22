import './index.css'
const Stats = (props) => {
    const { student } = props
    const present_students = student.filter((each) => (
        each.status == "Present"
    ))
    const absent_students = student.filter((each) => (
        each.status == "Absent"
    ))
    return (
        <div className="stats-container">
            <div className="stat-card">
                <p className="stat-label">Total Students</p>
                <span className="stat-value">{student.length}</span>
            </div>
            <div className="stat-card">
                <p className="stat-label">Present Today</p>
                <span className="stat-value">{present_students.length}</span>
            </div>
            <div className="stat-card">
                <p className="stat-label">Absent Today</p>
                <span className="stat-value">{absent_students.length}</span>
            </div>
        </div>
    )

}
export default Stats