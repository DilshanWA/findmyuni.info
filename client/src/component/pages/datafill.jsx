import React, { useState } from "react";
import "../styles/senddata.css";
import Nvbr from "./navbar";
import Message from "../messages/Mesg";

function Datafill() {
  const [formData, setFormData] = useState({
    sunject_strem: "",
    course: "",
    university: "",
    zscore: "",
    district: "",
    subject_one: "",
    subject_two: "",
    subject_tree: "",
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const technologycorse=[

    "ENGINEERING TECHNOLOGY (ET)",
    "BIOSYSTEMS TECHNOLOGY (BST)",
    "Bachelor of Information and Communication Technology(BICT)"
  ];
const Maths_course=[
"APPLIED SCIENCES (BIO.SC)",
"ENGINEERING",
"ENGINEERING (EM)",
"ENGINEERING (TM)",
"QUANTITY SURVEYING", 
"COMPUTER SCIENCE",
"PHYSICAL SCIENCE",
"SURVEYING SCIENCE",
"APPLIED SCIENCES (PHY.SC)"

];



const bio_Science=[
     
"MEDICINE",
"DENTAL SURGERY",
"VETERINARY SCIENCE",
"BIOCHEMISTRY & MOLECULAR BIOLOGY",
"AGRICULTURAL TECHNOLOGY & MANAGEMENT",
"AGRICULTURE",
"FOOD SCIENCE & NUTRITION",
"BIOLOGICAL SCIENCE"

];
const Commerce_Corses=[
  "MANAGEMENT",
  "REAL ESTATE MANAGEMENT & VALUATION",
  "COMMERCE",
  "MANAGEMENT (PUBLIC) HONOURS",
  "BUSINESS INFORMATION SYSTEMS (HONOURS) (BIS)",
  "FINANCIAL ENGINEERING # ",
  "BANKING & INSURANCE "
]


  const streams = ["Technology", "Maths", "Science", "Commerce", "Arts"];


  const technologysubject = [
    "Engineering Tech",
    "Bio Systems Tech",
    "Science for Tech (SFT)",
    "Information and communication Technolog",
    "Economics",
    "Geography",
    "Home Economics",
    "English Language",
    "Accountancy",
    "Communication and Media Study",
    "Arts",
    "Business Studies",
    "Agriculture",
  ];

  const bio = ["cemesry", "ll", "bb"];
  
  const Maths = [
    "Chemistry",
    "Combined Mathematics",
    "Physics",
    "Information and Communication Technology (ICT)",
  ];
  const Commerce = [
    "Accountancy",
    "Business Studies (BS)",
    "Economics",
    "Business Statistics",
    "Geography",
    "Political Science",
    "History",
    "The logic and the scientific method",
    "English",
    "German",
    "French",
    "Agricultural Sciences",
    "Combined Mathematics",
    "Information and Communication Technology (ICT)",
  ];
  const Art = [
    "sinhala",
    "english",
    "tamil",
    "pali",
    "sanskrit",
    "logic and scientific method",
    "political science",
    "media and communication",
    "studies,economics",
    "geography",
    "history",
    "dancing",
    "music",
  ];

  

  const districts = [
    "Colombo",
    "Gampaha",
    "Kalutara",
    "Kandy",
    "Matale",
    "Nuwara Eliya",
    "Galle",
    "Matara",
    "Hambantota",
    "Jaffna",
    "Kilinochchi",
    "Mannaram",
    "Vavuniya",
    "Mullaitivu",
    "Batticaloa",
    "Ampara",
    "Trincomalee",
    "Kurunegala",
    "Puttalam",
    "Anuradhapura",
    "Polonnaruwa",
    "Badulla",
    "Monaragala",
    "Ratnapura",
    "Kegalle",
  ];

  const university = [
    "University of Colombo",
    "University of Peradeniya",
    "University of Sri Jayewardenepura",
    "University of Kelaniya",
    "University of Moratuwa",
    "University of Jaffna",
    "University of Ruhuna",
    "Eastern University of Sri Lanka",
    "South Eastern University of Sri Lanka",
    "Rajarata University of Sri Lanka",
    "Sabaragamuwa University of Sri Lanka",
    "Wayamba University of Sri Lanka",
    "Uva Wellassa University of Sri Lanka",
    "University of the Visual & Performing Arts",
    "Gampaha Wickramarachchi University of Indigenous Medicine",
    "University of Vavuniya",
  ];

  
  let selectSub = ["select subject"];
  let selectcourse = ["select Course"];

  const [subjectstream, subjectstreamfun] = useState("select subject");

  const [subject1, subjectfun2] = useState("select subject");
  const [subject2, subjectfun3] = useState("select subject");
  const [subject3, subjectfun4] = useState("select subject");
  const [Distric, subjectfun5] = useState("select subject");
  const [Zscore, subjectfun6] = useState("select subject");
  const [Corse, subjectfun7] = useState("select subject");
  const [univercity, subjectfun8] = useState("select subject");
  

  const UserInpulist={subjectstream,subject1,subject2,subject3,Distric,Zscore,Corse,univercity};


  
  if (subjectstream === "Technology") {
    selectSub = technologysubject;
    selectcourse=technologycorse;
  } else if (subjectstream === "Bio Sience") {
    selectSub = bio;
    selectcourse=bio_Science;
  } else if (subjectstream === "Maths") {
    selectSub = Maths;
    selectcourse=Maths_course;
  } else if (subjectstream === "Commerce") {
    selectSub = Commerce;
    selectcourse=Commerce_Corses;
  } else if (subjectstream === "select subject") {
    selectSub = selectSub;
  } else {
    selectSub = Art;
  }

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/datafill", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UserInpulist),
      });

      if (response.ok) {
        openPopup();
        handleReset();
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const handleReset = () => {
    setFormData({
      sunject_strem: "",
      course: "",
      university: "",
      zscore: "",
    });
  };

  return (
    <div className="mainf">
      <Nvbr />
      {isPopupOpen && <Message onClose={closePopup} />}
      <div className="from">
        <form className="from1" onSubmit={handleSubmit}>
          <div className="text">
            <h5>Add New courses to data base</h5>
          </div>
          <div className="rows">
            <select
              className="subStreem"
              name="sunject_strem"
              onChange={(e) => subjectstreamfun(e.target.value)}
            >
              <option hidden>Stream</option>
              {streams.map((stream) => (
                <option value={stream} option={stream}>
                  {stream}
                </option>
              ))}
            </select>
          </div>
          <div className="rows">
            <select
              className="subjects"
              name="subject_one"
              onChange={(e) => subjectfun2(e.target.value)}
            >
              <option hidden>Subjects</option>
              {selectSub.map((subject) => (
                <option value={subject}>{subject}</option>
              ))}
            </select>

            <select
              className="subjects"
              name="subject_two"
              onChange={(e) => subjectfun3(e.target.value)}
            >
              <option hidden>Subjects</option>
              {selectSub
                .filter((subjects) => subjects !== subject1)
                .map((subject) => (
                  <option value={subject}>{subject}</option>
                ))}
            </select>

            <select
              className="subjects"
              name="subject_tree"
              onChange={(e) => subjectfun4(e.target.value)}
            >
              <option hidden>Subjects</option>
              {selectSub.filter((subjects) => subjects !== subject2 && subjects !== subject1).map((subject) => (
                  <option value={subject}>{subject}</option>
                ))}
            </select>
          </div>
          <div className="rows">
            <select
              className="Districts"
              name="district"
              onChange={(e) => subjectfun5(e.target.value)}
              required>
              <option hidden>Districts</option>
              {districts.map((distr) => (
                <option value={distr}>{distr}</option>
              ))}
            </select>
          </div>
          <div className="inputbox">
            <input
              type="string"
              required
              placeholder="zscore"
              name="zscore"
              onChange={(e) => subjectfun6(e.target.value)}
            />
          </div>
          <div className="rows">
            <select
              className="University"
              name="course"
              onChange={(e) => subjectfun7(e.target.value)}
            >
              {" "}
              <option value="someOption">Course</option>
              {selectcourse.map((Ucourse) => (
                <option value={Ucourse}>{Ucourse}</option>
              ))}
            </select>{" "}
          </div>
          <div className="rows">
            <select
              className="University"
              name="university"
              onChange={(e) => subjectfun8(e.target.value)}
            >
              {" "}
              <option value="someOption">University</option>
              {university.map((univer) => (
                <option value={univer}>{univer}</option>
              ))}
            </select>
          </div>
          <div className="rows">
            <div className="btn-class">
              <button className="submit" id="btnHover">
                Submit
              </button>
            </div>
            <div className="btn-class">
              <button
                type="reset"
                className="resit"
                onClick={handleReset}
                id="btnHover"
              >
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Datafill;
