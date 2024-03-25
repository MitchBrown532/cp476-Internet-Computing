import React from 'react';
import Logout from './Logout';
import AddStudent from './AddStudent';
import AddCourse from './AddCourse';
import UpdateCourseGrade from './UpdateCourseGrade';
import { Link } from 'react-router-dom'; // Import Link if you're using React Router


function UpdatePage() {
    return (
        <div>
            <div>
                <Link to="/">
                    <button className="home-button">Home</button>
                </Link>
            </div>
            <div>
                <h2>Add a Student:</h2>
                <AddStudent />
            </div>
            <div>
                <h2>Add Courses to a Student:</h2>
                <AddCourse />
            </div>
            <div>
                <h2>Update Course Grades:</h2>
                <UpdateCourseGrade />
            </div>
            <h4>Click this:</h4>
            <Logout />
        </div>
    );
}

export default UpdatePage;