import React, { useState } from 'react';
import "./works.css";

import portfolio2 from '../../react-portfolio-assets/assets/p1.jpg';
import portfolio3 from '../../react-portfolio-assets/assets/p2.jpg';
import portfolio4 from '../../react-portfolio-assets/assets/p3.jpg';
import portfolio5 from '../../react-portfolio-assets/assets/portfolio-5.png';
import portfolio6 from '../../react-portfolio-assets/assets/portfolio-6.png';

const allProjects = [
  
  { 
    src: portfolio2, 
    title: "NewsMonkey", 
    description: " A real-time web application using ReactJS with Bootstrap UI to display news articles from various sources using NewsAPI.", 
    link: "https://github.com/NAGAVENIGOWDA/NewsApp"
  },
  { 
    src: portfolio3, 
    title: "INoteBook", 
    description: " Created a note-taking application using the MERN stack (MongoDB, Express.js, React, Node.js)for seamless note management across devices.", 
    link: "https://github.com/NAGAVENIGOWDA/inotebook"
  },
  { 
    src: portfolio4, 
    title: "Swar - A Decentralised Music Platform", 
    description: " Developing a decentralized music platform using blockchain technology, including smart contracts for royalty management and NFT minting, and integrated machine learning personalized recommendations.", 
    link: "https://github.com/NAGAVENIGOWDA/BitCrew/tree/swar"
  },
  { 
    src: portfolio5, 
    title: "Project 5", 
    description: "Description for Project 5", 
    link: "https://example.com/project5"
  },
  { 
    src: portfolio6, 
    title: "Project 6", 
    description: "Description for Project 6", 
    link: "https://example.com/project6"
  }
];

function Works() {
  const [showAll, setShowAll] = useState(false);

  const handleSeeMoreClick = () => {
    setShowAll(!showAll);
  };

  return (
    <section id='works'>
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksDesc">I am a dedicated web developer and currently a student, actively working on various projects to enhance my skills and knowledge. My portfolio showcases a range of both ongoing and completed projects, reflecting my growth and expertise in web development. As I continue to learn and innovate, I am excited to share my journey and the results of my efforts.</span>
      <div className="worksImgs">
        {allProjects.slice(0, showAll ? allProjects.length : 3).map((project, index) => (
          <div className="worksImgContainer" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.src} alt={project.title} className="worksImg" />
            </a>
            <p className="projectTitle">{project.title}</p>
            <p className="projectDescription">{project.description}</p>
          </div>
        ))}
      </div>
      <button className='worksBtn' onClick={handleSeeMoreClick}>
        {showAll ? "Show Less" : "See More"}
      </button>
    </section>
  );
}

export default Works;
