import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.webp"

const Banner = () => {
    return (
        <div style={{backgroundColor: "#F7F7FA"}} className="py-5">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{maxWidth: "1280px", marginRight: "auto", marginLeft: "auto"}}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ height: "600px", width: "100%" }}>
                        <img src={banner1} className="d-block w-100" alt="..." style={{ objectFit: "cover" }} />
                    </div>
                    <div className="carousel-item" style={{ height: "600px", width: "100%" }}>
                        <img src={banner2} className="d-block w-100" alt="..." style={{ objectFit: "cover" }} />
                    </div>
                    <div className="carousel-item" style={{ height: "600px", width: "100%" }}>
                        <img src={banner3} className="d-block w-100" alt="..." style={{ objectFit: "cover" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;