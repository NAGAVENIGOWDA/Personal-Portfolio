import React from 'react';
import './education.css';

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "PES University EC ,Banglore",
    duration: "2021 - 2025",
    cgpa:'9.14'
    
  },
  {
    degree: "XII",
    institution: "Seshadripuram Pre University College ,Tumkur",
    duration: "2019 - 2021",
    cgpa :'98.5 %'
    
  }
];

function Education() {
  return (
    <section id='education'>
      <h2 className="educationTitle">Education</h2>
      <span className="educationDesc">Here is a summary of my educational background, detailing the degrees I've earned and the institutions I've attended. My academic journey has been instrumental in developing my technical skills and knowledge in web development and computer science.</span>
      <div className="educationList">
        {educationData.map((item, index) => (
          <div className="educationItem" key={index}>
            <h3 className="degree">{item.degree}</h3>
            <p className="institution">{item.institution}</p>
            <p className="duration">{item.duration}</p>
            <p className="description">cgpa/% : {item.cgpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
