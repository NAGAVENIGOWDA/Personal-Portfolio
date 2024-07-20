import React from 'react'
import problemSolving from '../../react-portfolio-assets/assets/problem-solving.jpg';
import webDesign from '../../react-portfolio-assets/assets/website-design.png';
import additionalKnowledge from '../../react-portfolio-assets/assets/additionalKnowledge.jpg'
import './skills.css';
function Skills() {
  return (
   
      <section id="skills">
        <span className="skillTitle">What I do</span><br />
        <span className="skillDesc">Hi, I'm Nagaveni, a final year Btech student skilled in web development (HTML, CSS, JS, ReactJS), problem-solving in C++, and familiar with Python, OOP, and MySQL. I've recently started learning blockchain technology and am passionate about creating innovative solutions and exploring new technologies.</span>
        <div className="skillsBars">
            <div className="skillBar">
                <img src={webDesign} alt="webDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <h4>HTML, CSS, JavaScript, ReactJS</h4>
                    <p>Proficient in building responsive and dynamic web applications using modern web technologies and frameworks.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={problemSolving} alt="problemSolving" className="skillBarImg changed" />
                <div className="skillBarText">
                    <h2>Programming and Problem Solving</h2>
                    <h4>C++, Python, Object-Oriented Programming (OOP)</h4>
                    <p>Strong problem-solving skills with a solid foundation in algorithms, data structures, and object-oriented programming principles.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={additionalKnowledge} alt="additionalKnowledge" className="skillBarImg changed" />
                <div className="skillBarText">
                    <h2>Additional Knowledge</h2>
                    <h4>MySQL, Blockchain (beginner), Operating Systems (OS), Computer Networks (CN), Database Management System (DBMS)</h4>
                    <p>Familiar with database management, have a foundational understanding of blockchain technology, and possess core knowledge in operating systems and computer networks.</p>
                </div>
            </div>
        </div>
      </section>
   
  )
}

export default Skills
