import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <Link to="/search">Search</Link> | 
      <Link to="/update">Update</Link> | 
      <Link to="/delete">Delete</Link> |
      <Link to="/" onClick={handleLogout}>Logout</Link>
    </nav>
  );
}

export default NavigationBar;