import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoSchool } from "react-icons/io5";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Projects</h5>
              <small>10+</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Experience</h5>
              <small>3 years</small>
            </article>

            <article className="about__card">
              <IoSchool className="about__icon" />
              <h5>University</h5>
              <small>Third Year</small>
            </article>
          </div>

          <p>
            I am pursuing my Bachelors in Technology from Vishwakarma Instiitute
            of Technology, Pune.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
