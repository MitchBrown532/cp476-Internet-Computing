import React, { useState, useEffect } from 'react';

const SearchCourses = () => {
  const [courses, setCourses] = useState([]);
  const [studentId, setStudentId] = useState('');

  const fetchCourses = async (id = '') => {
    let url = 'http://localhost/cp476-Internet-Computing/server/index.php/courses';
    if (id) url += `/${id}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      } else {
        console.error('Failed to fetch courses');
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSearch = () => {
    fetchCourses(studentId);
  };

  return (
    <div>
      <input
        type="text"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        placeholder="Enter Student ID (leave blank for all courses)"
      />
      <button onClick={handleSearch}>Search Courses</button>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{`${course.course_code}: Grade - ${course.final_grade}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchCourses;
