import React, { useState, useEffect } from 'react'
import './TimetableForm.css'

function TimetableForm({ onSubmit, days, timeSlots, editingEntry, onCancel }) {
  const [formData, setFormData] = useState({
    day: days[0],
    timeSlot: timeSlots[0],
    subject: '',
    teacher: '',
    room: ''
  })

  useEffect(() => {
    if (editingEntry) {
      setFormData(editingEntry)
    } else {
      setFormData({
        day: days[0],
        timeSlot: timeSlots[0],
        subject: '',
        teacher: '',
        room: ''
      })
    }
  }, [editingEntry, days, timeSlots])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.subject.trim()) {
      onSubmit(formData)
      setFormData({
        day: days[0],
        timeSlot: timeSlots[0],
        subject: '',
        teacher: '',
        room: ''
      })
    }
  }

  const handleCancelClick = () => {
    setFormData({
      day: days[0],
      timeSlot: timeSlots[0],
      subject: '',
      teacher: '',
      room: ''
    })
    onCancel()
  }

  return (
    <div className="timetable-form-container">
      <h2>{editingEntry ? 'Edit Entry' : 'Add New Entry'}</h2>
      <form onSubmit={handleSubmit} className="timetable-form">
        <div className="form-group">
          <label htmlFor="day">Day</label>
          <select 
            id="day"
            name="day" 
            value={formData.day} 
            onChange={handleChange}
            required
          >
            {days.map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="timeSlot">Time Slot</label>
          <select 
            id="timeSlot"
            name="timeSlot" 
            value={formData.timeSlot} 
            onChange={handleChange}
            required
          >
            {timeSlots.map(slot => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g., Mathematics"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="teacher">Teacher</label>
          <input
            id="teacher"
            type="text"
            name="teacher"
            value={formData.teacher}
            onChange={handleChange}
            placeholder="e.g., Dr. Smith"
          />
        </div>

        <div className="form-group">
          <label htmlFor="room">Room</label>
          <input
            id="room"
            type="text"
            name="room"
            value={formData.room}
            onChange={handleChange}
            placeholder="e.g., A101"
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">
            {editingEntry ? 'Update Entry' : 'Add Entry'}
          </button>
          {editingEntry && (
            <button type="button" className="btn btn-secondary" onClick={handleCancelClick}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default TimetableForm
