import React from 'react'
import img from "../Component/schooled.png"
export const Education = () => {
    return (
        <div className="education">
            <div className="edu-school">
            <img src={img} alt="" className="logo-edu"/>
            </div>
            <div className="education-info">
                <div className="scholastic">
                    <h1><u>SCHOLASTICS</u></h1>
                    <ul>
                        <li>Completed 10th from Rishabh Public School(8.6CGPA).</li>
                        <li>Completed 12th from Rishabh Public School(90.2%).</li>
                        <li>Pursuing B.Tech in Software Engineering from Delhi Technological University(2020-2024).</li>
                    </ul>
                </div>
                <div className="skills">
                    <h1><u>SKILLS</u></h1>
                    <ul>
                        <li>HTML, CSS, JAVASCRIPT</li>
                        <li>C++,C</li>
                        <li>TOOLS: BOOTSTRAP, VS-CODE, MS-OFFICE, GITHUB</li>
                        <li>REACT JS</li>
                    </ul>
                </div>
                <button className="resume"><a href="https://drive.google.com/file/d/1EpZSM1cXHG618sdFEBLaXJeVfllUY1un/view?usp=sharing"target="blank">Resume</a></button>
            </div>
        </div>
    )
}
