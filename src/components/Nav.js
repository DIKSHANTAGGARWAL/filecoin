import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {

    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }

    return (
        <div className="navbar">
            <img alt="d.a.r.k"
            className="logo"
             src="https://avatars.githubusercontent.com/u/105876150?s=280&v=4"/>
            {auth ? <ul className="nav-ul"> 
                <li><Link to="/metamask">Metamask</Link></li>
                <li><Link to="/products">Candidates</Link></li>
                <li><Link to="/onlyAdminProducts">AdminCandidates</Link></li>
                <li><Link to="/add">Add Candidate</Link></li>
                {/* <li><Link to="/update">Update</Link></li> */}
                {/* <li><Link to="/logout">Logout</Link></li> */}
                <li> <Link onClick={logout} to="/signup">Logout({JSON.parse(auth).name})</Link></li>
            </ul>
                :
                <ul className="nav-ul nav-right">
                    <li><Link to="/signup">Signnn</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
    )
}

export default Nav;