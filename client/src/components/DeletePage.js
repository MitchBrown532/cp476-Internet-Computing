import React from 'react';
import Logout from './Logout';
import DeleteCourse from './DeleteCourse';
import DeleteStudent from './DeleteStudent';
import { Link } from 'react-router-dom'; // Import Link if you're using React Router


function SearchPage() {
    return (
        <div>
            <div>
                <Link to="/">
                <button className="home-button"><i className="fas fa-home" style={{ color: 'black' }}></i></button>
                </Link>
            </div>
            <h2>Delete a Student:</h2>
            <DeleteStudent />
            <h2>Delete Courses from a Student:</h2>
            <DeleteCourse />
            <h4>Click this:</h4>
            <Logout />
        </div>
    );
}

export default SearchPage;