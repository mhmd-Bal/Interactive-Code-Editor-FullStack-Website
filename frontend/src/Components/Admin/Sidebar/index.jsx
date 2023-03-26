import React from 'react';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
            <div className='sidebar-links'>
            <a href='#' className="link">View Users</a>
            </div>
        </aside>
    );
};