import { useState } from 'react'
import './App.css'
import TimetableGrid from './components/TimetableGrid'
import TimetableForm from './components/TimetableForm'

function App() {
  const [timetable, setTimetable] = useState({})
  const [editingEntry, setEditingEntry] = useState(null)

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']

  const addOrUpdateEntry = (entry) => {
    const key = `${entry.day}-${entry.timeSlot}`
    setTimetable(prev => ({
      ...prev,
      [key]: entry
    }))
    setEditingEntry(null)
  }

  const deleteEntry = (day, timeSlot) => {
    const key = `${day}-${timeSlot}`
    setTimetable(prev => {
      const newTimetable = { ...prev }
      delete newTimetable[key]
      return newTimetable
    })
  }

  const handleEdit = (entry) => {
    setEditingEntry(entry)
  }

  const handleCancelEdit = () => {
    setEditingEntry(null)
  }

  const exportTimetable = () => {
    const dataStr = JSON.stringify(timetable, null, 2)
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr)
    const exportFileDefaultName = 'timetable.json'
    
    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', exportFileDefaultName)
    linkElement.click()
  }

  const importTimetable = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target.result)
          setTimetable(imported)
        } catch {
          alert('Invalid timetable file')
        }
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>📅 Timetable Generator</h1>
        <p>Create and manage your weekly schedule</p>
      </header>
      
      <div className="app-content">
        <div className="form-section">
          <TimetableForm 
            onSubmit={addOrUpdateEntry}
            days={days}
            timeSlots={timeSlots}
            editingEntry={editingEntry}
            onCancel={handleCancelEdit}
          />
          
          <div className="action-buttons">
            <button className="btn btn-secondary" onClick={exportTimetable}>
              Export Timetable
            </button>
            <label className="btn btn-secondary file-upload-btn">
              Import Timetable
              <input 
                type="file" 
                accept=".json" 
                onChange={importTimetable}
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </div>
        
        <div className="timetable-section">
          <TimetableGrid 
            timetable={timetable}
            days={days}
            timeSlots={timeSlots}
            onDelete={deleteEntry}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  )
}

export default App
