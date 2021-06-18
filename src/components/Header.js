import React from 'react'
import Typed from "react-typed";
const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Welcome To My Website</h1>
                <Typed 
                className="typed-text"
                strings={["Software Engineer", "Web Development", "Competitve Programmer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                {/* <a href="#" className="btn-main-offer">Contact Me</a> */}
            </div>
        </div>
    )
}

export default Header
