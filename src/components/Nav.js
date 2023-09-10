import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    // var [check, setCheck] =useState();
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }


    if (localStorage.getItem('user')) {
        var result = localStorage.getItem("user");
        const res = JSON.parse(result)
        var check = 0
        // console.log(res.email)
        if (res.email == 'admin@gmail.com') {
            console.log("ok")
            check = 1
        }
    }

    // console.log(check)

    return (
        <div className="navbar">
            <img alt="d.a.r.k"
                className="logo"
                src="https://avatars.githubusercontent.com/u/105876150?s=280&v=4" />
            {auth ? <ul className="nav-ul">
                <li><Link to="/metamask">Metamask</Link></li>
                {check == 0 ? <>
                    <li><Link to="/products">Candidates</Link></li>
                </> : <></>
                }
                {check == 1 ? <>
                    <li><Link to="/onlyAdminProducts">Candidates</Link></li>
                    <li><Link to="/add">Add Candidate</Link></li>
                </> : <></>
                }

                {/* <li><Link to="/update">Update</Link></li> */}
                {/* <li><Link to="/logout">Logout</Link></li> */}
                <li> <Link onClick={logout} to="/login">Logout ({JSON.parse(auth).name})</Link></li>
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
