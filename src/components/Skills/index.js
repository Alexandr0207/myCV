import React from 'react';
import './style.scss'
import {FiCheck} from "react-icons/fi";


const Skills = ({style}) => {
  return (
      <div className='skills-page' style={style}>
        <div className='title-page'>SOFT SKILLS</div>
        <div>
          <div className='soft-skills'>Teamwork <FiCheck/></div>
          <div className='soft-skills'>Responsibility <FiCheck/></div>
          <div className='soft-skills'>Confidence <FiCheck/></div>
          <div className='soft-skills'>Flexibility and creativity <FiCheck/></div>
        </div>
        <div className='container'>
          <div className='experience'>
            <div className='experience-title'>EXPERIENCE</div>
            <div className='experience-container'>
              <div>IQusion (Kyiv, Ukraine)</div>
              <div>
                <div>Front-End Developer</div>
                <div className='divider'>|</div>
                <div>March 2019 - November 2020</div>
              </div>
            </div>
            <div className='experience-container'>
              <div>GoIT (Kyiv, Ukraine)</div>
              <div>
                <div>Front-End Developer</div>
                <div className='divider'>|</div>
                <div>2019</div>
              </div>
            </div>
            <div className='experience-container'>
              <div>Freelance</div>
              <div>
                <div>Front-End Developer</div>
                <div className='divider'>|</div>
                <div>2018</div>
              </div>
            </div>
          </div>
        <div className='languages'>
          <div className='languages-title'>LANGUAGES</div>
          <div className='languages-container'>
            <div className='languages-title'>ENGLISH</div>
            <div className='languages-skills'>
              <div className='skills' style={{ width: '40%' }}/>
            </div>
          </div>
          <div className='languages-container'>
            <div className='languages-title'>RUSSIAN</div>
            <div className='languages-skills'>
              <div className='skills' style={{ width: '80%' }}/>
            </div>
          </div>
          <div className='languages-container'>
            <div className='languages-title'>UKRAINE</div>
            <div className='languages-skills'>
              <div className='skills' style={{ width: '100%' }}/>
            </div>
          </div>
        </div>
      </div>

</div>
);
};

export default Skills;