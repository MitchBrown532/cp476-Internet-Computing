import React from 'react';
import Logout from './Logout';
import DeleteCourse from './DeleteCourse';
import DeleteStudent from './DeleteStudent';


function SearchPage() {
    return (
        <div>
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