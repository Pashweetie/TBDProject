/* Component Name: NavItems
 * Function: Container for primary navigation (home, contact, etc.)
 *
 * Props Received: None
 *
 */

import React from 'react';
import classes from './NavItems.css';
import NavItem from './NavItem/NavItem';

const navItems = () => (
    <ul className={classes.NavItems}>
        <NavItem link="/">HOME</NavItem>
        <NavItem link="/upload">SCHEDULE</NavItem>
        <NavItem link='/features'>FEATURES</NavItem>
        <NavItem link="/contact">CONTACT</NavItem>
    </ul>
);

export default navItems;
