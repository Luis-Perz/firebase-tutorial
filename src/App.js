import './App.css';

function App() {
  return (
      <div className="App">
        <h1 className="form-title">Upload syllabus</h1>
        <p className="form-sub">Fill in the course details and attach the syllabus PDF.</p>

        <div className="field-row">
          <div className="field">
            <label htmlFor="term">Term</label>
            <select id="term">
              <option value="">Select term</option>
              <option>Fall 2025</option>
              <option>Spring 2026</option>
              <option>Summer 2026</option>
              <option>Fall 2026</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="department">Department</label>
            <input type="text" id="department" placeholder="e.g. Computer Science"/>
          </div>
        </div>
        <div className="field-row">
          <div className="field">
            <label htmlFor="course-number">Course number</label>
            <input type="text" id="course-number" placeholder="e.g. CS 340"/>
          </div>
          <div className="field">
            <label htmlFor="course-name">Course name</label>
            <input type="text" id="course-name" placeholder="e.g. Algorithms"/>
          </div>
        </div>
        <div className="field">
          <label htmlFor="instructor">Instructor</label>
          <input type="text" id="instructor" placeholder="Full name"/>
        </div>
        <div className="divider"></div>

        <div className="field">
          <label>Syllabus PDF</label>
          <div className="drop-zone" id="drop-zone" onClick={() => document.getElementById('pdf-input').click()}>
            <div className="drop-icon">
                <p className="drop-label" id="drop-label">Drop PDF here or click to browse</p>
                <p className="drop-hint">PDF only — max 10MB</p>
                <p className="drop-file-name" id="file-name"></p>
            </div>
          </div>
          <input type="file" id="pdf-input" accept=".pdf" style={{ display: 'none' }} />
        </div>

        <button className="submit-btn" onClick={() => {}}>Submit syllabus</button>

      </div>

  );
}

export default App;
