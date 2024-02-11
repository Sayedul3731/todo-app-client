/* eslint-disable react/no-unescaped-entities */


const Footer = () => {
    return (
        <div className="bg-primary text-white pt-6 pb-5">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fot-weight-bold text-warning">
                            ToDo Boos
                        </h5>
                        <p className="text-justify">Organize your tasks and boost your productivity with our simple and effective todo list application. Whether you're a student, professional, or anyone in need of task management, our platform is designed to help you stay on top of your responsibilities.</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fot-weight-bold text-warning">Services</h5>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: "none" }} >Task Management</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: "none" }} >Collaboration</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: "none" }} >Categories and Labels</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: "none" }} >Notes and Attachments</a>
                        </p>

                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fot-weight-bold text-warning">Facilities</h5>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: "none" }} >New Todo make</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: "none" }} >Todo Update</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: "none" }} >Todo Status Set</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: "none" }} >Delete</a>
                        </p>
                    </div>
                    <hr className="mb-4" />
                    <div className="row align-items-center">
                        <div className="col-md-7 col-lg-8">
                            <p>Copyright @2024 All rights reserved by:
                            <a href="#" className="text-white" style={{ textDecoration: "none" }} >
                                <strong className="text-warning"> TODO BOSS</strong>
                            </a>
                             </p>
                        </div>
                    <div className="col-md-5 col-lg-4">
                        <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/" className="btn-floating btn-sm text-white" style={{fontSize: "23px"}}>
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.twitter.com/" className="btn-floating btn-sm text-white" style={{fontSize: "23px"}}>
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.linkedin.com/" className="btn-floating btn-sm text-white" style={{fontSize: "23px"}}>
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.youtube.com/" className="btn-floating btn-sm text-white" style={{fontSize: "23px"}}>
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;