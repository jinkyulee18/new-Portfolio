import React from 'react'
import Apex from '../imgs/Apex.png'
import PC from '../imgs/Promise.png'
import './styles.css'


export const Experience = () => {

const jobCards = document.querySelectorAll('.job-card')

jobCards.forEach((card) => {
  card.addEventListener('click', () => {
    
  })
})

  return (
    <div className='Section2'>
      <div className='experience-container'>
        <div className='job-card-1'>
          <div className='experience-1'>
            <img src={Apex}alt='experience 1' className='exp1-img'/>
          </div>
          <div className='Work-tag'>
            <h1>Software Developer</h1>
            <h3>Apex Imaging Services</h3>
            <p>03/2023 - 09/2023</p>
          </div>
        </div>
        <div className='experience-2'>
          <img src={PC} alt="experience 2" className='exp2-img'/>
          <div className='Work-tag'>
            <h1>Web Developer</h1>
            <h3>Promise Church</h3>
            <p>2021 - present</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}
