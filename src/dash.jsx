import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar2 from "./main/nav";
import SideBar from "./side";
import Home from "./comp/home"; // Component for Home
import SearchBook from "./comp/search"; // Component for Search Book
import Pending from "./comp/pending"; // Component for Pending
import Overdue from "./comp/overdue"; // Component for Overdue
import "./dash.css"
function Dash() {
    return (
        <div className="dashboard">
            <Navbar2 />
            <div className="dashboard-container">
                <SideBar />
                <div className="content1">
                    <Routes>
                        <Route path="home" element={<Home />} />
                        <Route path="search-book" element={<SearchBook />} />
                        <Route path="pending" element={<Pending />} />
                        <Route path="overdue" element={<Overdue />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Dash;
