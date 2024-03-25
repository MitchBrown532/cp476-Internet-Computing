import React, { useState } from 'react';

const UpdateCourseGrade = () => {
  const [studentId, setStudentId] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [test1, setTest1] = useState('');
  const [test2, setTest2] = useState('');
  const [test3, setTest3] = useState('');
  const [finalExam, setFinalExam] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: parseInt(studentId, 10),
        course_code: courseCode,
        test1: parseInt(test1, 10), // Ensure these are parsed as numbers
        test2: parseInt(test2, 10),
        test3: parseInt(test3, 10),
        FinalExam: parseInt(finalExam, 10)
      })
    };

    try {
      const response = await fetch('http://localhost/cp476-Internet-Computing/server/index.php/courses/update', requestOptions);
      if (response.ok) {
        setMessage('Course grade updated successfully!');
      } else {
        setMessage('Failed to update course grade. Please try again.');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    }

    try {
      const response = await fetch('http://localhost/cp476-Internet-Computing/server/index.php/finalmarks/calculate', requestOptions);
      if (response.ok) {
        setMessage('Final grades successfully calculated!');
      } else {
        setMessage('Failed to update course grade. Please try again.');
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
      <input
        type="number"
        value={test1}
        onChange={(e) => setTest1(e.target.value)}
        placeholder="Test 1 Grade"
      />
      <input
        type="number"
        value={test2}
        onChange={(e) => setTest2(e.target.value)}
        placeholder="Test 2 Grade"
      />
      <input
        type="number"
        value={test3}
        onChange={(e) => setTest3(e.target.value)}
        placeholder="Test 3 Grade"
      />
      <input
        type="number"
        value={finalExam}
        onChange={(e) => setFinalExam(e.target.value)}
        placeholder="Final Exam Grade"
      />
      </div>
      <div>
      <button onClick={handleSubmit}>Update Grade</button>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default UpdateCourseGrade;
