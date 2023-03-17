import React, { useState } from 'react'
import s from "./navbar.module.css"
import { Link } from "react-router-dom"

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery,categoryClick] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSearch = () => {
    onSearch(searchQuery);
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  }

  return (
    <nav className={s.navbar}>
      <div className='container'>
        <ul className={s.menu}>
          <h2><Link to="/" onClick={() => categoryClick('all')}>Home</Link></h2>
          <li><Link to="/cart" >Cart</Link></li>
          <div className={s.form_action}>
            <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearchInputChange} onKeyDown={handleKeyDown} />
            <button onClick={handleSearch}>Search</button>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar