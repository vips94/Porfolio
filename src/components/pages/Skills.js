import React from "react";
import classes from "./Skills.module.scss";
import {DiJava,DiJavascript1,DiMysql,DiHtml5,DiCss3,DiDatabase,DiReact,DiUnitySmall} from 'react-icons/di';
import { SiCsharp } from "react-icons/si";
import SkillCard from './../common/SkillCard';

const Skills = () => {
  return (
    <div id="skills" className={classes.skills}>
      <h1>SKILLS</h1>
      <ul className={classes.skills__list}>
          <li><SkillCard logo= {DiHtml5} skillName="HTML"/></li>
          <li><SkillCard logo= {DiCss3} skillName="CSS"/></li>
          <li><SkillCard logo= {DiReact} skillName="REACT"/></li>
          <li><SkillCard logo= {DiJavascript1} skillName="JAVASCRIPT"/></li>
          <li><SkillCard logo= {DiJava} skillName="JAVA"/></li>
          <li><SkillCard logo= {DiMysql} skillName="MYSQL"/></li>
          <li><SkillCard logo= {DiDatabase} skillName="DBMS"/></li>
          <li><SkillCard logo= {DiUnitySmall} skillName="UNITY 3D"/></li>
          <li><SkillCard logo= {SiCsharp} skillName="C SHARP"/></li>
      </ul>
    </div>
  );
};

export default Skills;
