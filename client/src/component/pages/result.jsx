import React, { useState} from 'react';
import Mnavbar from "./navbar";
import ResutlTable from "./result_table";

export const Result = () => {
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
        "Mannar",
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
        "Kegalle"
      ];

      

  const technologysubject = ["Engineering Tech","Bio Systems Tech","Science for Tech (SFT)","Information and communication Technolog","Economics","Geography","Home Economics", "English Language" , "Accountancy" ,  "Communication and Media Study" ,"Arts","Business Studies","Agriculture"];
  const bio = ["cemesry", "ll", "bb"];
  const Maths = ["Chemistry", "Combined Mathematics", "Physics","Information and Communication Technology (ICT)"];
  const Commerce = ["Accountancy", "Business Studies (BS)", "Economics","Business Statistics","Geography","Political Science","History","The logic and the scientific method","English","German","French","Agricultural Sciences","Combined Mathematics","Information and Communication Technology (ICT)"];
  const Art = ["sinhala", "english", "tamil", "pali", "sanskrit","logic and scientific method", "political science","media and communication" ,"studies,economics","geography","history","dancing","music"];
  let selectSub = ["select subject"];

 
  const [subjectstream, subjectstreamfun] = useState("select subject");

  const [subject1, subjectfun2] = useState("select subject");
  const [subject2, subjectfun3] = useState("select subject");
  const [subject3, subjectfun4] = useState("select subject");
  const [Distric, subjectfun5] = useState("select subject");
  const [Zscore, subjectfun6] = useState('');
  const [fetchdata,setFetchdata]=useState(null);
  const UserInpulist={subjectstream,subject1,subject2,subject3,Distric,Zscore};

  const SubmitRisult=async(e)=>{
    e.preventDefault();
    if(!validform()){
       return;
    }
    try {
    setFetchdata(null);
    const response = await fetch('http://localhost:4000/User-Submited', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(UserInpulist),
  });

  if (response.ok) {
    console.log('data send...');
    const datas=await response.json();
    setFetchdata(datas); 
    console.log(datas)
    
  } else {
    console.error('Request failed:', response.statusText);
  }
    } catch (error) {
      console.log(`all sending operation faild... ${error}`)
    }
  }

  const handleReset = () => {
      subjectstreamfun("select subject");
      subjectfun2("select subject");
      subjectfun3("select subject");
      subjectfun4("select subject");
      subjectfun5("select subject");
      subjectfun6("");
      setstreemerror(false);
      setsub1error(false);
      setsub2error(false);
      setsub3error(false);
      setDistrictError(false);
      setZscoreError(false);
      setFetchdata(null);
      setdecimelerror(false)
      set_type_error(false)
      setlentherror(false)
    };


  if (subjectstream ==="Technology") {
    selectSub = technologysubject;
  } else if (subjectstream === "Bio Sience") {
    selectSub = bio;
  }
  else if(subjectstream==="Maths"){
    selectSub = Maths;
  }
  else if(subjectstream==="Commerce"){
    selectSub=Commerce;
  }
  else if(subjectstream==="Art"){
    selectSub=Art;
  }
  else{
    selectSub=selectSub;
  }


  //errors for from gg

  const [streemerror, setstreemerror] = useState(false);
  const [subject1error, setsub1error] = useState(false);
  const [subject2error, setsub2error] = useState(false);
  const [subject3error, setsub3error] = useState(false);
  const [districtError, setDistrictError] = useState(false);
  const [zscoreError, setZscoreError] = useState(false);
  const [decimlerror,setdecimelerror] = useState(false);
  const [typeerror,set_type_error] = useState(false);
  const [lengtherror,setlentherror] =useState(false)
  
  const validform = () => {
    let isError = false;
    const onlynumbers = /^\d*\.?\d*$/
  
    if (subjectstream === "select subject") {
      setstreemerror(true);
      isError = true;
    } else {
      setstreemerror(false);
    }
  
    if (subject1 === "select subject") {
      setsub1error(true);
      isError = true;
    } else {
      setsub1error(false);
    }
  
    if (subject2 === "select subject") {
      setsub2error(true);
      isError = true;
    } else {
      setsub2error(false);
    }
  
    if (subject3 === "select subject") {
      setsub3error(true);
      isError = true;
    } else {
      setsub3error(false);
    }
  
    if (Distric === "select subject") {
      setDistrictError(true);
      isError = true;
    } else {
      setDistrictError(false);
    }
  
    if (Zscore.trim() === '') {
      setZscoreError(true);
      isError = true;
   }else if(Zscore.length < 6){
      setlentherror(true)
      isError = true; 
   }else if(!onlynumbers.test(Zscore)){
      set_type_error(true)
      isError = true; 
   }else if(!Zscore.includes('.')){
      setdecimelerror(true)
      isError = true;
  }else{
    setZscoreError(false)
  }
    return !isError;
  }
  
return (
    <div>
      <Mnavbar ></Mnavbar>
      <div class="header">
        <h1>Find Your Course Here</h1>
        <div className="body">
          <form className='formbody' onReset={handleReset}>
              <div className="rows">
                  <div className="subject">
                      <select
                        className="selectsubject"
                        onChange={(e) =>{ subjectstreamfun(e.target.value);
                          setstreemerror(false)
                        }}
                        style={streemerror ? {border: '1px solid red'}:null}
                      >
                        <option id="option" value="default" hidden>Select Subject Streem</option>
                        <option id="Maths">Maths</option>
                        <option id="Bio">Sience</option>
                        <option id="Technology">Technology</option>
                        <option id="Commerce">Commerce</option>
                        <option id="Art">Art</option>
                      </select>
                      {streemerror ? (
                        <p>Please select subject streem</p>
                      ): null}
                  </div>

                  <div className="results">
                      <select className="selectsubject" onChange={(e)=>{subjectfun2(e.target.value);
                          setsub1error(false)
                        }} 
                        style={subject1error ? {border: '1px solid red'}:null}
                        >
                        <option id="option" value="default"  hidden>Select Subjects</option>
                        {selectSub.map((subjects) => (
                          <option key={subjects} option={subjects}>{subjects}</option>
                        ))}
                      </select>
                      {subject1error ? (
                        <p>Please select subject</p>
                      ): null}
                  </div>

                  <div className="results">
                      <select className="selectsubject"  onChange={(e)=>{subjectfun3(e.target.value);
                          setsub2error(false)
                      }}
                      style={subject2error ? {border: '1px solid red'}:null}
                      >
                          <option value="default"  hidden>Select Subjects</option>
                          {selectSub.filter((subjects)=>subjects !==subject1).map((subjects)=>(
                            <option key={subjects} option={subjects}>{subjects}</option>
                          ))}
                      </select>
                      {subject2error ? (
                        <p>Please select subject</p>
                      ): null}
                  </div>


                  <div className="results">
                      <select className="selectsubject"  onChange={(e)=>{subjectfun4(e.target.value);
                          setsub3error(false)
                      }}style={subject3error ? {border: '1px solid red'}:null}>
                          <option value="default"  hidden>Select Subjects</option>
                          {selectSub.filter((subjects)=>subjects !==subject2 && subjects !==subject1).map((subjects)=>(
                            <option key={subjects} option={subjects}>{subjects}</option>
                          ))}
                      </select>
                      {subject3error ? (
                        <p>Please select subject</p>
                      ): null}
                   </div>
              </div>
              <div className="rows">
                  <div className="distric">
                    <select className="selectsubject"  aria-expanded='false' onChange={(e)=>{subjectfun5(e.target.value);
                    setDistrictError(false)
                    }}
                    style={districtError ? {border: '1px solid red'}:null}>
                        <option   hidden>Select District</option>
                        {districts.map((distr)=>(
                            <option  value={distr}>{distr}</option>
                        ))}
                    </select>
                    {districtError ? (
                      <p>Please select Distric</p>
                    ): null}
                  </div>

                  <div className="z_score">
                    <input
                      type="text"
                      placeholder="Your Z-score"
                      maxLength={6}
                      name = 'zscore'
                      style={zscoreError|| decimlerror ||  typeerror || lengtherror ? {border: '1px solid red'}:null}
                      onChange={(e) => {
                        let value = e.target.value;
                        if (value.length === 1 && !value.includes('.')) {
                          value += '.';
                        }
                        subjectfun6(value);
                        setZscoreError(false)
                        setdecimelerror(false)
                        set_type_error(false)
                        setlentherror(false)
                      }}
                    />
                      {zscoreError ? (
                        <p>Please Enter your zscore</p>
                      ): decimlerror ? (
                        <p>Decimal point required</p>
                      ):typeerror ? (
                        <p>Please enter numbers</p>
                      ):lengtherror ?(
                        <p>Enter valid six bumbers</p>
                      ):null}
                  </div>
                  <div className="buttons">
                      <button type="submit" onClick={SubmitRisult} id='submit'>
                        Submit
                      </button>
                      <button type="reset" id="reset">
                        Clear
                      </button>
                  </div>
              </div>
          </form>
        </div>
      </div>
      <div className="result_table">
      {fetchdata !== null && <ResutlTable props={fetchdata} />}
      </div>
      
    </div>
  );
};

export default Result;