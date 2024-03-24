import { Link } from 'react-router-dom';
import Logout from './logout';

function NavigationBar() {
  return (
    <nav>
      <Link to="/search">Search</Link> | 
      <Link to="/update">Update</Link> | 
      <Link to="/delete">Delete</Link> |
    </nav>
  );
}

export default NavigationBar;