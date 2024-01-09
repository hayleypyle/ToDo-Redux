import styled from "styled-components";
import { NavLink } from "react-router-dom";  
import './../App.css'


const NavUnlisted = styled.ul`

display: flex;

a {
    text-decoration: none;
}


li {
    color: white;
    margin: 0 0.8rem;
    font-size: 1 rem;
    position: relative;
    list-style: none;
}

`;

function Nav() {
return (
    <NavUnlisted>
    <NavLink to="/todos" activeClassName="current" >
        <li>To Do List</li>
    </NavLink>
    <NavLink to="/contact" activeClassName="current" >
        <li>Contact</li>
    </NavLink>
    </NavUnlisted>
);
}

export default Nav
