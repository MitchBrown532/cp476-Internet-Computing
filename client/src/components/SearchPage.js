import React from 'react';
import Logout from './Logout';
import SearchStudents from './SearchStudents'
import SearchCourses from './SearchCourses';
import SearchFinalGrades from './SearchFinalGrades';
import { Link } from 'react-router-dom'; // Import Link if you're using React Router

function SearchPage() {
    return (
        <div>
            <div>
                <Link to="/">
                <button className="home-button"><i className="fas fa-home" style={{ color: 'black' }}></i></button>
                </Link>
            </div>
            <div>
                <h2>Search for Students:</h2>
                <SearchStudents />
            </div>
            <div>
                <h2>Search for Courses:</h2>
                <SearchCourses />
            </div>
            <div>
                <h2>Search for Final Grades:</h2>
                <SearchFinalGrades />
            </div>
            <h4>Click this:</h4>
            <Logout />
        </div>
    );
}

export default SearchPage;