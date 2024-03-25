import React, { useState } from 'react';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    };

    try {
      const response = await fetch('http://localhost/cp476-Internet-Computing/server/index.php/students/add', requestOptions);
      if (response.ok) {
        const data = await response.json();
        setMessage('Student added successfully!');
      } else {
        setMessage('Failed to add student. Please try again.');
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student Name"
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Add Student</button>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default AddStudent;
