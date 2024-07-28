import React from 'react';
import './achieve.css';

const achievements = [
  {
    title: "Merit Scholarships",
    description: "Awarded 4 MRD and 2 CNR Rao merit scholarships from PES University for maintaining  CGPA above 9 and ranking in the top 20% of the department."
  },
  // Add more achievements as needed
];

function Achieve() {
  return (
    <section id="achievements">
      <h2 className="achieveTitle">Awards</h2>
      <span className='achieveDesc'> As a dedicated student, I have been recognized for my academic performance with several merit scholarships. These awards highlight my commitment to maintaining high standards and striving for excellence in my studies.</span>
      <div className="achieveContainer">
        {achievements.map((achievement, index) => (
          <div className="achieveItem" key={index}>
            <h3 className="achieveItemTitle">{achievement.title}</h3>
            <p className="achieveItemDesc">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achieve;
