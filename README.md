# 📅 Timetable Generator

A modern, user-friendly React web application for creating and managing weekly timetables.

![Timetable Generator](https://github.com/user-attachments/assets/5c1b1498-8984-4aca-947e-5f1017badc25)

## Features

- ✨ **Interactive Timetable Grid** - Visual weekly schedule with 5 days (Monday-Friday) and 8 time slots (9:00 AM - 4:00 PM)
- ➕ **Add Entries** - Easily add classes/subjects with teacher name and room number
- ✏️ **Edit Entries** - Modify existing timetable entries
- 🗑️ **Delete Entries** - Remove entries from the timetable
- 💾 **Export/Import** - Save your timetable as JSON and import it later
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations

## Screenshots

### Empty Timetable
![Empty Timetable](https://github.com/user-attachments/assets/5c1b1498-8984-4aca-947e-5f1017badc25)

### Timetable with Entries
![Timetable with Entries](https://github.com/user-attachments/assets/58857804-bf06-4583-b379-aaee9a00ccd8)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ishan9899/trail3.git
cd trail3
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Adding a Timetable Entry

1. Select the **Day** from the dropdown (Monday - Friday)
2. Select the **Time Slot** (9:00 AM - 4:00 PM)
3. Enter the **Subject** name (required)
4. Optionally enter the **Teacher** name
5. Optionally enter the **Room** number
6. Click **Add Entry**

### Editing an Entry

1. Click the ✏️ (edit) icon on any entry in the timetable
2. Modify the fields in the form
3. Click **Update Entry** to save changes or **Cancel** to discard

### Deleting an Entry

1. Click the 🗑️ (delete) icon on any entry you want to remove

### Exporting Your Timetable

1. Click the **Export Timetable** button
2. A JSON file will be downloaded to your computer
3. Keep this file to import your timetable later

### Importing a Timetable

1. Click the **Import Timetable** button
2. Select a previously exported JSON file
3. Your timetable will be restored

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Technology Stack

- **React** - UI library
- **Vite** - Build tool and development server
- **CSS3** - Styling with modern features (Grid, Flexbox, Gradients)
- **JavaScript ES6+** - Modern JavaScript features

## Project Structure

```
trail3/
├── src/
│   ├── components/
│   │   ├── TimetableGrid.jsx      # Main timetable display component
│   │   ├── TimetableGrid.css      # Timetable grid styles
│   │   ├── TimetableForm.jsx      # Form for adding/editing entries
│   │   └── TimetableForm.css      # Form styles
│   ├── App.jsx                     # Main application component
│   ├── App.css                     # App-level styles
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Global styles
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
└── vite.config.js                 # Vite configuration
```

## Development

To run the linter:
```bash
npm run lint
```

To preview the production build:
```bash
npm run preview
```

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
