import React from 'react';
import Logout from './Logout';
/* import Search from './Search';
import Update from './Update';
import Delete_record from './delete'; */
//Fix imports - Add functionality to Navbar?
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