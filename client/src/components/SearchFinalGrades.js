import React, { useState, useEffect } from 'react';

const SearchFinalGrades = () => {
  const [finalGrades, setFinalGrades] = useState([]);
  const [studentId, setStudentId] = useState('');

  const fetchFinalGrades = async (id = '') => {
    let url = 'http://localhost/cp476-Internet-Computing/server/index.php/finalmarks';
    if (id) url += `/${id}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setFinalGrades(data);
      } else {
        console.error('Failed to fetch final grades');
      }
    } catch (error) {
      console.error('Error fetching final grades:', error);
    }
  };

  useEffect(() => {
    fetchFinalGrades();
  }, []);

  const handleSearch = () => {
    fetchFinalGrades(studentId);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder="Enter Student ID (leave blank for all final grades)"
        />
      </div>
      <div>
        <button onClick={handleSearch}>Search Final Grades</button>
      </div>
      <ul>
        {finalGrades.map((grade, index) => (
          <li key={index}>{`${grade.student_name} (${grade.student_id}) - ${grade.course_code}: Final Grade - ${grade.final_grade}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFinalGrades;
