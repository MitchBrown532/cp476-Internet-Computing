import React from 'react';
import Logout from './Logout';
import SearchStudents from './SearchStudents'
import SearchCourses from './SearchCourses';
import SearchFinalGrades from './SearchFinalGrades';

function SearchPage() {
    return (
        <div>
            <h2>Search for Students:</h2>
            <SearchStudents />
            <h2>Search for Courses:</h2>
            <SearchCourses />
            <h2>Search for Final Grades:</h2>
            <SearchFinalGrades />
            <h4>Click this:</h4>
            <Logout />
        </div>
    );
}

export default SearchPage;