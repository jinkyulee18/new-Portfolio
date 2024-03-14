import React from 'react'
import { Navbar } from './Navbar'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNodeJs, faCss3, faGitAlt, faPython, faJsSquare, faReact,} from '@fortawesome/free-brands-svg-icons'

export const Intro = () => {
  //Creating interactive mouse event
    document.addEventListener('mousemove', (e) => {
        // Get cursor position
        const x = e.clientX;
        const y = e.clientY;
        // Move an element based on cursor position
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            cursor.style.transform = `translate(${x}px, ${y}px)`;
        }
    });

    //Interactive cube spinner with mouse drag

    document.addEventListener('DOMContentLoaded', () => {
      const cube = document.getElementById('interactive-cube');
      
      let isDragging = false;
      let startX, startY;
      let startRotX = 0, startRotY = 0;
      let currentRotX = 0, currentRotY = 0;
     

      // cube.addEventListener('mousedown', (e) => {
      //     isDragging = true;
      //     startX = e.clientX;
      //     startY = e.clientY;
      //     startRotX = cube.style.transform ? parseFloat(cube.style.transform.split('rotateY(')[1].split('deg)')[0]) : 0;
      //     startRotY = cube.style.transform ? parseFloat(cube.style.transform.split('rotateX(')[1].split('deg)')[0]) : 0;
      // });

      document.addEventListener('mousemove', (e) => {
          if (isDragging) {
              const deltaX = e.clientX - startX;
              const deltaY = e.clientY - startY;
              currentRotX = startRotX + deltaX / 10; // Adjust the divisor as needed
              currentRotY = startRotY - deltaY / 10; // Adjust the divisor as needed
              cube.style.transform = `rotateY(${currentRotX}deg) rotateX(${currentRotY}deg)`;
          }
      });     
      document.addEventListener('mouseup', () => {
        isDragging = false;
        cube.style.animation = 'spin 5s infinite linear'; // Adjust the animation properties as needed
        cube.style.transform = `rotateY(${currentRotX}deg) rotateX(${currentRotY}deg)`;
    });
      document.addEventListener('mouseleave', () => {
          isDragging = false;
          cube.style.animation = 'spin 5s infinite linear'; // Adjust the animation properties as needed
          cube.style.transform = `rotateY(${currentRotX}deg) rotateX(${currentRotY}deg)`;
      });
    });


  return (
    <div className='Section1'>
      <Navbar/>

      <div className = "cursor">
        <p>Hello</p>
      </div>
      <br />
      <br />
      <br />


      <div className="cube-container">
        <div className="cube" id="interactive-cube">
            <div className="face front">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face back"> 
              <FontAwesomeIcon icon={faPython} color="#F06529" />
            </div>
            <div className="face left">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face right">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face top">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face bottom">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
        </div>
      </div>

      <div>
        <h1 className='Capability'>Full-Stack Developer</h1>
      </div>
    </div>
    
  )
}
