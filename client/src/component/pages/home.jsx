import React, { useState } from "react";
import Mnavbar from "./navbar";
import Imgae2 from '../images/pattern.png'
import "../styles/homepage.css";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = React.useState(false)

  
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLoading = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/Resultpage');
    }, 1000);
  };

  return (
    <div className="shadow">
      <Mnavbar/>
      <div className="container">
        <div className="marginbox">
        <div className="textboxhome">
            <div className="Texts">
                <h1 id="homeh1">Find the Perfect University and Course Based on Your A/L <br /> Z-Score</h1>
                <div className="subtext">
                  <p>
                    Minimum "Z" Scores for selection to various <br /> Courses of Study of
                    Universities under the <br /> Normal Intake, in respect of each district
                  </p>
                </div>
                <button onClick={handleLoading} className="homebtn">
                  {loading ? "Loading..." : "Find Course"}
                </button>
              </div>
          </div>
          <div className="image">
                <img src={Imgae2} alt="" srcset=""  className="girlImagefront"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
