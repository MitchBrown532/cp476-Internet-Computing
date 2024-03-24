import React, { useState } from 'react';

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    // Function to handle search request
    const handleSearch = async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page
        try {
            // Assuming your backend endpoint for searching students is `/api/search`
            const response = await fetch(`http://localhost/api/search.php?query=${query}`, {
                method: 'GET', // Or 'POST', depending on your backend setup
                headers: {
                    'Content-Type': 'application/json',
                    // Any other headers your backend requires
                },
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setResults(data);
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
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
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
                                <td>{/* Link or button to view more details */}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Search;
