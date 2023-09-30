import React from "react";
import {Link} from "react-dom"


const NavBar = ()=>{

    return (
        <div className="NavBar">
            <div className="left">
                <Link to="/">Shopping Cart</Link>
            </div>
            <div className="right">
            <Link to="/home">Home Page</Link>
            <Link to="/cart">Cart Page</Link>
            </div>
        </div>
    )
}