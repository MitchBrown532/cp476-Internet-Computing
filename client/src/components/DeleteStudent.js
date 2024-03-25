import React, { useState } from 'react';

const DeleteStudent = () => {
  const [studentId, setStudentId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: parseInt(studentId, 10) })
    };

    try {
      const response = await fetch('http://localhost/cp476-Internet-Computing/server/index.php/students/delete', requestOptions);
      if (response.ok) {
        // Assuming the server sends back a success message or similar
        const data = await response.json();
        setMessage(data.message); // Update this line based on the actual response structure
      } else {
        // Handle HTTP error responses (e.g., 404, 500)
        setMessage('Failed to delete student. Please try again.');
      }
    } catch (error) {
      // Handle network errors
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
          placeholder="Enter Student ID"
        />
      </div>
      <div>
        <button onClick={handleDelete}>Delete Student</button>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default DeleteStudent;
