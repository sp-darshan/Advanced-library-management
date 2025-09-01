import { Link } from "react-router-dom";
import "./side.css";

function SideBar() {
    return (
        <div className="sidebar">
            <ul className="sidebar-list">
                <li className="sidebar-item">
                    <Link to="/dashboard/home">Home</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/dashboard/search-book">Search Book</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/dashboard/pending">Pending</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/dashboard/overdue">Overdue</Link>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;
