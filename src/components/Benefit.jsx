import img1 from "../assets/img1.avif"
import img2 from "../assets/img2.avif"
import img3 from "../assets/img3.avif"
import img4 from "../assets/img4.jpg"
import { FaArrowRight } from "react-icons/fa";

const Benefit = () => {
    return (
        <div id="benefited" style={{ backgroundColor: "#FFC002" }}>
            <div>
                <h1 className="text-center pb-2 pt-5">Who Can Benefited?</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4 pb-5" style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
                <div className="col">
                    <div className="card">
                        <div style={{ height: "400px" }}>
                            <img src={img1} className="card-img-top" alt="..." style={{ objectFit: "cover", height: "100%", width: "100%" }} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Health and Fitness Enthusiasts</h5>
                            <p className="card-text">Users can create to-do lists for their workout routines, ensuring they stay consistent with their fitness goals. Todo lists can be used to plan and track healthy meal choices and dietary goals.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div style={{ height: "400px" }}>
                            <img src={img2} className="card-img-top" alt="..." style={{ objectFit: "cover", height: "100%", width: "100%" }} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Students</h5>
                            <p className="card-text">Students can use the Todo app to keep track of assignments, project deadlines, and exam dates. It can be helpful for planning study sessions, creating to-do lists for each subject, and managing academic responsibilities.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div style={{ height: "400px" }}>
                            <img src={img3} className="card-img-top" alt="..." style={{ objectFit: "cover", height: "100%", width: "100%" }} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Freelancers</h5>
                            <p className="card-text">Freelancers can organize their work by managing tasks related to different clients and projects. Some Todo apps may integrate features for tracking billable hours and managing invoices.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div style={{ height: "400px" }}>
                            <img src={img4} className="card-img-top" alt="..." style={{ objectFit: "cover", height: "100%", width: "100%" }} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Entrepreneurs</h5>
                            <p className="card-text">Entrepreneurs can use the Todo app for planning and executing tasks related to business development, marketing, and operations. It can help track the progress of key milestones and objectives for a startup or business.</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", justifyItems: "center", width: '100%' }}>
                    <a href="task-management" className="btn btn-primary" style={{display: "flex", gap: "5px", justifyContent: "center", justifyItems: "center"}}><span>Start</span><span><FaArrowRight></FaArrowRight></span></a>
                </div>
            </div>
        </div>
    );
};

export default Benefit;