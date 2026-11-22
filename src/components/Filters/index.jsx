import './index.css'
const Filters = (props) => {
    const { onFilterChange, activeFilter } = props
    return (
        <div className="filters-container">
            <button
                type="button"
                className={activeFilter === 'All' ? 'active-filter' : 'filter-button'}
                onClick={() => onFilterChange('All')}>
                All</button>
            <button
                type="button"
                className={activeFilter === 'Present' ? 'active-filter' : 'filter-button'}
                onClick={() => onFilterChange('Present')}>
                Present</button>
            <button
                type="button"
                className={activeFilter === 'Absent' ? 'active-filter' : 'filter-button'}
                onClick={() => onFilterChange('Absent')}>Absent</button>
        </div>
    )
}
export default Filters