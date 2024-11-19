import './Homepage.css';
import Timer from "./Timer";
import MainPhoto from "../Assets/IMG_9823.JPG";

const Homepage = () => {
    return (
        <div className="Homepage" id='Homepage'>
            <div className="Homepage-Top">
                <div className='Homepage-date'>06.09.2025</div>
                <div className='Homepage-Title'>Klára & Daniel</div>
                <div
                    className="Homepage-Top-background-img"
                    style={{ backgroundImage: `url(${MainPhoto})` }}
                >
                                        
                </div>
                <div className="Homepage-Top-overlay">

                </div>
            </div>
            <Timer targetDate="2025-09-06T23:59:59" />
        </div>
    );
};

export default Homepage;