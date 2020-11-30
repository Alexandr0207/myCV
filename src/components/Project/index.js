import React from 'react';
import './style.scss'
import fight from '../../img/fight.png'
import weather from '../../img/weather.png'
import slack from '../../img/slack.png'
import albert from '../../img/albert.png'
import goIT from '../../img/goIT.png'

const data = [
  {
    img: fight,
    title: 'Fighting game',
    using: 'HTML, CSS , Gulp, JavaScript.',
    description: 'Designed for martial arts lovers.',
    link: 'https://alexandr0207.github.io/JavaScript_GameProject/build/',
  },
  {
    img: weather,
    title: 'Weather app',
    using: 'React.js, HTML, CSS, API.',
    description: 'Created to view weather with pictures of cities.',
    link: 'https://alexandr0207.github.io/WeatherApp/',
  },
  {
    img: slack,
    title: 'Slack Clone',
    using: 'React.js, Redux.js, HTML and Semantic UI, Node.js(Google Firebase).',
    description: 'Designed for student communication.',
    link: 'https://slackclone-9c023.firebaseapp.com/',
  },
  {
    img: albert,
    title: 'Albert',
    using: 'HTML, React.js, SASS',
    description: 'Converting from HTML to React.',
    link: 'https://alexandr0207.github.io/Albert_react/',
  },
  {
    img: goIT,
    title: 'GoIT Project',
    using: 'HTML, SCSS, Gulp.',
    description: 'Made for GoIT. Landing page.',
    link: 'https://alexandr0207.github.io/GoIT_Project/build/index.html',
  },
]

const Project = ({style}) => {
  console.log(data)
  return (
      <div className='projects-page' style={style}>
        <div className='title-page'>Projects</div>
        <div className='projects-container'>
          {data?.map(({ img, title, using, description, link }) =>
              <div className='section'>
                <img width={'70%'} src={img} alt={title}/>
                <div>{title}</div>
                <div>{`Using: ${using}`}</div>
                <div>{`Description: ${description}`}</div>
                <div className='link-container'>Link: <div onClick={() => window.open(link, '_blank')}>Click Here!</div></div>
              </div>)}
        </div>
      </div>
  );
};

export default Project;