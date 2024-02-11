import { Link } from "react-router-dom";
import "./style.css"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user,logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log out successfully!",
                    showConfirmButton: false,
                    timer: 1000
                });
            })
            .catch()
    }
    return (
        <div className="bg-primary">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/" style={{ color: "white" }}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="task-management" style={{ color: "white" }}>Task Management</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#benefited" style={{ color: "white" }}>Who Can Benefited?</a>
                            </li>
                        </ul>
                        {
                            user ? <p onClick={handleLogOut} className="navbar-text" style={{ color: "white", textDecoration: "none" }}>Logout</p> : <Link to="login" className="navbar-text" style={{ color: "white", textDecoration: "none" }}>
                            Login
                        </Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;