import React, { useState, useEffect } from 'react';
import { styles } from './styles';
const SearchStudents = () => {
  const [students, setStudents] = useState([]);
  const [searchId, setSearchId] = useState('');


  const fetchStudents = async (id = '') => {
    let url = 'http://localhost/cp476-Internet-Computing/server/index.php/students';
    if (id) url += `/${id}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setStudents(Array.isArray(data) ? data : [data]); // Ensure data is always an array
      } else {
        console.error('Failed to fetch students');
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  // useEffect(() => {
  //   fetchStudents();
  // }, []);

  const handleSearch = () => {
    fetchStudents(searchId);
  };

  const handleClear = () => {
    setStudents([]);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Enter Student ID (leave blank to select all)"
        />
      </div>
      <div>
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleClear}>Clear</button>
      </div>

        <ul style={styles.listStyle}>
      
        {students.map((student) => (
          <li key={student.id} style={styles.itemStyle}><span style={styles.nameStyle}>{student.name}</span></li>
        ))}
      </ul>
    </div>
  );
};

export default SearchStudents;
