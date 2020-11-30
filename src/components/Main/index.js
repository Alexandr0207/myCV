import React, {useState} from 'react';
import './style.scss'
import img from '../../img/photo_2020-11-23_16-01-43.jpg'
import About from "../About";
import { RiFacebookBoxFill, RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import Skills from "../Skills";
import Project from "../Project";

const Main = () => {
    const [value, setValue] = useState('About')
    return (
        <div className='main'>
            <div className='left-container'>
                <img width={260} src={img} alt='На этом фото Александр Жук'/>
                <div className='btn-container'>
                    <div className={value === 'About' ? 'btn btn-selected' : 'btn'} onClick={() => setValue('About')}>About</div>
                    <div className={value === 'Skills' ? 'btn btn-selected' : 'btn'} onClick={() => setValue('Skills')}>Skills</div>
                    <div className={value === 'Projects' ? 'btn btn-selected' : 'btn'} onClick={() => setValue('Projects')}>Projects</div>
                    <div className='icons'>
                        <RiFacebookBoxFill onClick={() => window.open('https://www.facebook.com/profile.php?id=100017493482689', '_blank')}/>
                        <RiGithubFill onClick={() => window.open('https://github.com/Alexandr0207', '_blank')}/>
                        <RiLinkedinBoxFill onClick={() => window.open('https://www.linkedin.com/in/alexandr7777', '_blank')}/>
                    </div>
                </div>
            </div>
            <About style={value === 'About' ? { opacity: 0.9 } : { opacity: 0, pointerEvents: 'none' }}/>
            <Skills style={value === 'Skills' ? { opacity: 0.9 } : { opacity: 0, pointerEvents: 'none' }}/>
            <Project style={value === 'Projects' ? { opacity: 0.9 } : { opacity: 0, pointerEvents: 'none' }}/>
        </div>
    );
};

export default Main;