import React from 'react';
import './style.scss'
import {FaUserAlt, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaSkype} from "react-icons/fa";

const aboutData = [
  {
    text: 'ABOUT',
  },
  {
    text: 'Oleksandr Zhuk',
  },
  {
    text: 'FRONT-END DEVELOPER (REACT.JS)',
  },
  {
    text: 'Hello! I\'m Oleksandr Zhuk Front-End Developer. I like to do web development, as well as ' +
        'develop new projects in a team. I plan to develop in this industry and improve my qualifications',
  },
]

const contactsData = [
  {
    text: 'CONTACTS:',
  },
  {
    icon: <FaUserAlt/>,
    text: 'Name: Oleksandr Zhuk',
  },
  {
    icon: <FaEnvelope/>,
    text: 'E-mail: sasha20013zhuk@gmail.com:',
  },
  {
    icon: <FaPhoneAlt/>,
    text: 'Phone: +(380)-97-922-29-30',
  },
  {
    icon: <FaMapMarkerAlt/>,
    text: 'Location: Kyiv, Ukraine',
  },
  {
    icon: <FaSkype/>,
    text: 'Skype: sanek10582',
  },
  {
    text: 'Download CV',
    onClick: () => window.open('https://drive.google.com/file/d/1xH5z0SbOKcM49cnQ_Gu-42flHWhlQ5uU/view?usp=sharing'),
  },
]

const technicalData = [
  {
    title: 'Technical Skills:',
  },
  {
    title: 'HTML5',
    skills: 100,
  },
  {
    title: 'CSS3',
    skills: 100,
  },
  {
    title: 'JavaScript',
    skills: 70,
  },
  {
    title: 'React',
    skills: 80,
  },
  {
    title: 'Redux',
    skills: 80,
  },
  {
    title: 'Jira',
    skills: 100,
  },
  {
    title: 'GitHub',
    skills: 90,
  },
  {
    title: 'GitLab',
    skills: 90,
  },
  {
    title: 'SASS and LESS',
    skills: 90,
  },
]

const About = ({ style }) => {
  const contacts =
      <div className='contacts'>
        {contactsData.map(({icon, text, onClick}) => <div onClick={onClick}>{icon && icon} {`${text}`}</div>)}
      </div>

  const technical =
      <div className='technical'>
        {technicalData?.map(({title, skills}) => {
              if (!skills) {
                return <div className='title'>{title}</div>
              } else {
                return (
                    <div className='technical-container'>
                      <div className='technical-title'>{title}</div>
                      <div className='technical-skills'>
                        <div className='skills' style={{ width: `${skills}%` }}/>
                      </div>
                    </div>
                )
              }
            }
        )}
      </div>
  return (
      <div className='about' style={style}>
        <div className='about-info'>
          {aboutData?.map(({text}) => <div>{text}</div>)}
        </div>
        <div className='contacts-info'>
          {contacts}
          {technical}
        </div>
      </div>
  );
};

export default About;