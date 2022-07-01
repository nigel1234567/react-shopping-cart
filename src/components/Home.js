import React from "react";
import blackbeard from "../assets/pictures/blackbeard.png"
import burgess from "../assets/pictures/burgess.png"
import devon from "../assets/pictures/devon.png"

const Home = () => {
    return (
        <div className="content">
            <h1>Welcome to Blackbeard's Devil Fruits</h1>
            <div className="info">
                <p className="text">Brought to you by the greatest pirate in all seas, Marshall D Teach. Zehahahaha!</p>
                <img
                        className="picture"
                        src={blackbeard}
                        alt="blackbeard"
                        width="250"
                        height="250"
                        />
            </div>
            <div className="info">
                <p className="text">Let us show you our collection. Wihahahaha! </p>
                <img
                        className="picture"
                        src={burgess}
                        alt="burgess"
                        width="250"
                        height="250"
                        />
            </div>
            <div className="info">
                <p className="text">Will definitely recommend. Murunfuffuffu! </p>
                <img
                        className="picture"
                        src={devon}
                        alt="devon"
                        width="250"
                        height="250"
                        />
            </div>
        </div>
    )
}

export default Home