import React from 'react';
import Logout from './logout';
import NavigationBar from './Navbar';

function Home() {
    return (
        <div>
            <h2>Home Page</h2>
            <NavigationBar />
            <h4>Click this:</h4>
            <Logout />
        </div>
    );
}

export default Home;