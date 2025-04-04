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
            My name&apos;s Matt and I&apos;m a web developer. I specialise in Front-End, 
            writing HTML, CSS, and Javascript, but my background is really in design 
            (especially UI/UX). I love clever puns, Gill Sans, and one day aspire 
            to have my own library... complete with sliding ladders.
          </p>
        </div>

        <div className="columns one">
          <div className="panel red">
            <h2 className="heading">
              Relevant Skills
              <span>01</span>
            </h2>
            <ul className="left-list">
              <li>UI / UX Design &amp; Mock-ups</li>
              <li>Wireframing / Polished prototypes</li>
              <li>Asset creation (icons, illustrations, etc.)</li>
              <li>Branding identity, and marketing design</li>
              <li>Proficiency with Adobe Creative Suite</li>
              <li>Testing (WCAG, responsiveness, etc.)</li>
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
          <div className="panel blue">
            <h2 className="heading">
              How I got started
              <span>02</span>
            </h2>
            <div className="bio">
              <p>
                After studying Graphic Design at university, I 
                began work as a young freelance designer 
                and spent the better part of a year being 
                asked if I <b>“did websites”</b>.
              </p>
              <p>
                Eventually, I found 
                myself saying “yes”.
              </p>
              <p>
                I began to play around with Wordpress and 
                started to write my own basic code. After that, I finished a web design 
                course whilst working in tech support, 
                and eventually decided to enrol in a coding bootcamp.
              </p>
              <p>
                The bootcamp was <a href="https://makers.tech/" target="_blank" rel="noopener noreferrer">Makers&apos; Academy</a>, so I 
                moved to London in February of 2014 and 
                started their full-time, three-month program. 
                We covered seemingly everything from the 
                command line, to Ruby and Rspec, but it was the front-end that interested me.
              </p>
              <p>
                Immediately after that, I landed my first job as a junior 
                web-developer. Meeting other developers for 
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
          <div className="panel green">
            <h2 className="heading">
              About this website
              <span>03</span>
            </h2>
            <p className="copy">
              Built with <Link to="https://www.gatsbyjs.com/">Gatsby</Link>, I started designing <em>this</em> version 
              of my website in 2016. The main goal was to build a site that
              is easy to update and modify over the years, regardless of the tech-stack I&apos;m using.
              <br/><br/>
              My <em>very</em> first website (built sometime in 2011)
              was a monument to my own stubbornness, cobbled together 
              using only a text editor and a free FTP client. This one is designed to be far less of a headache.
              <br/><br/>
              There were long periods of 
              time inbetween the two when I didn&apos;t have a personal 
              website, but the idea has always appealed to me. 
              You can read more about this <em>current</em> website build 
              <Link to="/first-post"> here.</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
