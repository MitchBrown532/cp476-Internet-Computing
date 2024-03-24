import React, { useState } from 'react';

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    // Function to handle search request
    const handleSearch = async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page
        try {
            // Update the fetch URL
            const response = await fetch(`http://localhost/cp476-Internet-Computing/server/index.php/students`, {
                method: 'GET', // Since we're appending the query in the URL
                headers: {
                    'Accept': 'application/json', // Expecting JSON response
                },
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setResults(data);
            console.log(data);
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };

    return (
        <div>
            <h2>Search for Students or Courses</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter student name or ID"
                    //value={query}
                    //onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {results.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>
                                    {/* Link or button to view more details */}
                                    {/* Example: <a href={`/details/${student.id}`}>View Details</a> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Search;
