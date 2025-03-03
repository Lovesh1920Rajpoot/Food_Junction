import React, { useState } from "react"
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header =()=>{
    const [btnname, setBtnName]= useState("Login")
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-200 shadow-lg ">
            <div className="w-40">
                <img className="" src= {LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex m-4 p-4">
                    <li className="px-4 font-bold">
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4 font-bold"> 
                    <Link to="/">Home </Link>
                    </li>
                    <li className="px-4 font-bold">
                    <Link to="/about">About Us </Link> 
                    </li>
                    <li className="px-4 font-bold">
                    <Link to="/contact"> Contact Us </Link>    
                    </li>
                    <li className="px-4 font-bold">Cart</li>
                    <button className="px-4 font-bold" onClick={()=>{
                        btnname==="Login"? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnname}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;




