import React from 'react'
import './TimetableGrid.css'

function TimetableGrid({ timetable, days, timeSlots, onDelete, onEdit }) {
  const getEntry = (day, timeSlot) => {
    const key = `${day}-${timeSlot}`
    return timetable[key]
  }

  return (
    <div className="timetable-container">
      <h2>Weekly Timetable</h2>
      <div className="timetable-wrapper">
        <table className="timetable">
          <thead>
            <tr>
              <th className="time-column">Time</th>
              {days.map(day => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map(timeSlot => (
              <tr key={timeSlot}>
                <td className="time-cell">{timeSlot}</td>
                {days.map(day => {
                  const entry = getEntry(day, timeSlot)
                  return (
                    <td key={`${day}-${timeSlot}`} className="timetable-cell">
                      {entry ? (
                        <div className="entry">
                          <div className="entry-content">
                            <div className="entry-subject">{entry.subject}</div>
                            {entry.teacher && (
                              <div className="entry-teacher">{entry.teacher}</div>
                            )}
                            {entry.room && (
                              <div className="entry-room">Room: {entry.room}</div>
                            )}
                          </div>
                          <div className="entry-actions">
                            <button 
                              className="btn-icon btn-edit" 
                              onClick={() => onEdit(entry)}
                              title="Edit"
                            >
                              ✏️
                            </button>
                            <button 
                              className="btn-icon btn-delete" 
                              onClick={() => onDelete(day, timeSlot)}
                              title="Delete"
                            >
                              🗑️
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="empty-cell">-</div>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TimetableGrid
