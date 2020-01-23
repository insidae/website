/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from "react";
import { Link } from "gatsby";
import photo from "./me_october-2018.png";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="hero">
          <h1>
            About me
          </h1>
          <p>
            My name’s Matt and I’m a web developer. I specialise in Front-End, 
            writing HTML, CSS, and Javascript, but my background is really in design 
            (especially UI/UX). I love clever puns, Gill Sans, and one day aspire 
            to have my own library... complete with sliding ladders.
          </p>
        </div>

        <div className="columns one">
          <div className="panel">
            <h2>
              Relevant Skills
            </h2>
            <ul className="left-list">
              <li>UI / UX Design &amp; Mock-ups</li>
              <li>Wireframing / Polished prototypes</li>
              <li>Asset creation (icons, illustrations, etc.)</li>
              <li>Branding identity, and marketing design</li>
              <li>Proficiency with Adobe Creative Suite, Sketch</li>
              <li>Testing (WCAG, responsiveness, cross-browser)</li>
            </ul>
            <ul className="right-list">
              <li>HTML5 (Haml, Markdown)</li>
              <li>CSS3 (SASS, ITCSS)</li>
              <li>JavaScript (ES6, React, Coffeescript)</li>
              <li>Version Control (GitHub)</li>
              <li>Ruby (Rails framework)</li>
              <li>Rspec (Test-driven-development)</li>
            </ul>
          </div>
        </div>

        <div className="columns two">
          <div className="panel">
            <h2>
              How I got started
            </h2>
            <div className="bio">
              <p>
                After studying Graphic Design at university, I 
                started working as a young freelance designer 
                and spent the better part of a year being 
                asked if I <b>“did websites”</b>. Eventually, I found 
                myself saying “yes”.
              </p>
              <p>
                I began to play around with Wordpress and 
                started to write my own basic code (it was 
                crude, but it worked). I finished a web design 
                course, whilst working a job in tech support, 
                and enrolled in a coding bootcamp.
              </p>
              <p>
                The bootcamp was <a href="https://makers.tech/" target="_blank" rel="noopener noreferrer">Makers’ Academy</a>, so I 
                moved to London in February of 2014 and 
                started their full-time, three-month program. 
                We covered seemingly everything from the 
                command line to Ruby and Rspec. Those 
                three months were some of the most 
                exhausting and exhilarating of my life, but I 
                loved every second.
              </p>
              <p>
                After that, I landed my first job as a junior 
                web-developer at <a href="https://www.edukit.org.uk/" target="_blank" rel="noopener noreferrer"> Edukit </a> (a start-up working 
                out of a co-working space on Silicon 
                Roundabout). Meeting other developers for 
                the first time really introduced me to the fast-
                paced world of modern web development. 
                Since then, I&apos;ve been lucky enough to work 
                with a variety of talented teams in London.
              </p>
            </div>
          </div>
          <img className="photo" src={photo} alt="Me in October of 2018" />
        </div>

        <div className="columns one">
          <div className="panel">
            <h2>
              About this website
            </h2>
            <p>
              Built with Gatsby, I started designing this version 
              of my website in 2016. My very first website was a 
              monument to my own stubbornness, cobbled together 
              using only a text editor and a free FTP client 
              (sometime in 2011). There have been long periods of 
              time since then when I&apos;ve not had a personal 
              website but the idea has always appealed to me. 
              You can read more about this website build 
              <Link to="/first-post"> here.</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
