import React, { useState } from 'react';

const AddCourse = () => {
  const [studentId, setStudentId] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: parseInt(studentId, 10), course_code: courseCode })
    };

    try {
      const response = await fetch('http://localhost/cp476-Internet-Computing/server/index.php/courses/add', requestOptions);
      if (response.ok) {
        const data = await response.json();
        setMessage('Course added to student successfully!');
      } else {
        setMessage('Failed to add course. Please try again.');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder="Student ID"
        />
      </div>
      <div>
        <input
          type="text"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          placeholder="Course Code"
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Add Course</button>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default AddCourse;
