import "./style.css"

const Navbar = () => {
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
                        </ul>
                        <span className="navbar-text" style={{ color: "white" }}>
                            Login
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;