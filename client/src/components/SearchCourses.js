import React, { useState, useEffect } from 'react';
import { styles } from './styles';

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

  // useEffect(() => {
  //   fetchCourses();
  // }, []);

  const handleSearch = () => {
    fetchCourses(studentId);
  };

  const handleClear = () => {
    setCourses([]);
  };

  return (
    <div>
      <div>
      <input
        type="text"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        placeholder="Enter Student ID (leave blank for all courses)"
      />
      </div>
      <div>
      <button onClick={handleSearch}>Search Courses</button>
      <button onClick={handleClear}>Clear</button>
      </div>     
      <ul style={styles.listStyle}>
        {courses.map((course, index) => (
          <li style={styles.itemStyle} key={index}><span style={styles.nameStyle}>{`Student: ${course.studentName} <> Course: ${course.course_code} <> Test 1: ${course.Test1}%, Test 2: ${course.Test2}%, Test 3: ${course.Test3}%, Final Exam: ${course.FinalExam}%`}</span></li>
        ))}
      </ul>
    </div>
  );
};

export default SearchCourses;
