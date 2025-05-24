import React, { useEffect } from "react";
import Typed from "typed.js";
import './style.css';
import profile from './thepratholic.jpg'

const About = () => {

  useEffect(() => {

    const typed = new Typed(".typing-2", {
      strings: ["Developer", "Competitive Programmer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
            <div className="column left">
                <img src={profile} alt=""></img>
            </div>
            <div className="column right">
                <div className="text">I'm Pratham and I'm a <span className="typing-2 crazy"></span></div>
                <p> I am a computer science enthusiast with BTech degree in progress from Birla Vishvakarma Mahavidyalaya. Renowned for my achievements in competitive programming, I hold good ranks in Leetcode, Codechef, and Codeforces. I've created several projects using technologies like Python, C++ and Javascript. Explore my portfolio to see the passion and expertise I bring to technology.
                    🚀🚀</p>
                <a href="https://drive.google.com/file/d/1WBBHgou-77qnr60rG6yL264GWVR1_h33/view">Download
                    CV</a>
            </div>
        </div>
    </div>
    </section>
  );
}

export default About;
