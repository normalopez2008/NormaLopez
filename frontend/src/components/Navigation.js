import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">HomePage</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/travels">Travel Log</Link>
    </nav>
  );
}

export default Navigation;
