import React from 'react';
import "./style.css";

const Sidebar = ({ isOpen}) => {
    return (
        <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
            <div className='sidebar-links'>
            <a href='#' className="link" >View Users</a>
            </div>
        </aside>
    );
};

export default Sidebar