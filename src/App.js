import './App.css';
import { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function App() {
    const [term, setTerm] = useState('');
    const [department, setDepartment] = useState('');
    const [courseNumber, setCourseNumber] = useState('');
    const [courseName, setCourseName] = useState('');
    const [instructor, setInstructor] = useState('');
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState('');

    async function handleSubmit() {
        if (!term || !department || !courseNumber || !courseName || !instructor || !file) {
            alert('Please fill in all fields and attach a PDF.');
            return;
        }
        try {
            setStatus('Submitting...');
            await addDoc(collection(db, 'syllabi'), {
                term,
                department,
                courseNumber,
                courseName,
                instructor,
                fileName: file.name,
                uploadedAt: new Date()
            });
            setStatus('Syllabus submitted successfully!');
            setTerm('');
            setDepartment('');
            setCourseNumber('');
            setCourseName('');
            setInstructor('');
            setFile(null);
        } catch (error) {
            console.error(error);
            setStatus('Error submitting. Please try again.');
        }
    }

    return (
        <div className="App">
            <h1 className="form-title">Welcome!</h1>
            <p className="form-sub">Fill in the course details and attach the syllabus PDF.</p>

            <div className="field-row">
                <div className="field">
                    <label htmlFor="term">Term</label>
                    <select id="term" value={term} onChange={e => setTerm(e.target.value)}>
                        <option value="">Select term</option>
                        <option>Fall 2025</option>
                        <option>Spring 2026</option>
                        <option>Summer 2026</option>
                        <option>Fall 2026</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="department">Department</label>
                    <input type="text" id="department" placeholder="e.g. Computer Science"
                           value={department} onChange={e => setDepartment(e.target.value)} />
                </div>
            </div>

            <div className="field-row">
                <div className="field">
                    <label htmlFor="course-number">Course number</label>
                    <input type="text" id="course-number" placeholder="e.g. CS 340"
                           value={courseNumber} onChange={e => setCourseNumber(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="course-name">Course name</label>
                    <input type="text" id="course-name" placeholder="e.g. Algorithms"
                           value={courseName} onChange={e => setCourseName(e.target.value)} />
                </div>
            </div>

            <div className="field">
                <label htmlFor="instructor">Instructor</label>
                <input type="text" id="instructor" placeholder="Full name"
                       value={instructor} onChange={e => setInstructor(e.target.value)} />
            </div>

            <div className="divider"></div>

            <div className="field">
                <label>Syllabus PDF</label>
                <div
                    className="drop-zone"
                    id="drop-zone"
                    onClick={() => document.getElementById('pdf-input').click()}
                    onDragOver={e => e.preventDefault()}
                    onDrop={e => {
                        e.preventDefault();
                        const droppedFile = e.dataTransfer.files[0];
                        if (droppedFile && droppedFile.type === 'application/pdf') {
                            setFile(droppedFile);
                        } else {
                            alert('Please drop a PDF file.');
                        }
                    }}
                >
                    <p className="drop-label">
                        {file ? file.name : 'Drop PDF here or click to browse'}
                    </p>
                    <p className="drop-hint">PDF only — max 10MB</p>
                </div>
                <input
                    type="file"
                    id="pdf-input"
                    accept=".pdf"
                    style={{ display: 'none' }}
                    onChange={e => setFile(e.target.files[0])}
                />
            </div>

            {status && (
                <p style={{ marginTop: '1rem', color: status.includes('Error') ? 'red' : 'green' }}>
                    {status}
                </p>
            )}

            <button className="submit-btn" onClick={handleSubmit}>Submit syllabus</button>
        </div>
    );
}

export default App;
