import React from 'react';
import Logout from './Logout';
import AddStudent from './AddStudent';
import AddCourse from './AddCourse';
import UpdateCourseGrade from './UpdateCourseGrade';


function SearchPage() {
    return (
        <div>
            <h2>Add a Student:</h2>
            <AddStudent />
            <h2>Add Courses to a Student:</h2>
            <AddCourse />
            <h2>Update Course Grades:</h2>
            <UpdateCourseGrade />
            <h4>Click this:</h4>
            <Logout />
        </div>
    );
}

export default SearchPage;