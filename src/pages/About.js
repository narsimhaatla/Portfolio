import style from '../css/about.module.css'
import left from '../images/left.jpeg'
import mt from '../images/middle top.jpeg'
import mr from '../images/right.jpeg'
import hacker from '../images/hacker rank.png'
import leet from '../images/LeetCode.png'
import git from '../images/git.png'
import gfg from '../images/gfg.png'
import dribble from '../images/dribble.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faSass } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'

function About(){
    return (
      <div className={style.main}>
        <div className={style.educ}>
          <h1 className={style.white}>EDUCATION</h1>
          <hr />
          <div className={style.sec}>
            <h3>Bachelor of Technology</h3>
            <h4>Computer Science and Engineering</h4>
            <h4>VIT-AP</h4>
            <div className={style.marks}>8.34cgpa</div>
            <div className={style.year}>2020-2024</div>
          </div>
          <div className={style.sec}>
            <h3>Intermediate</h3>
            <h4>MPC</h4>
            <h4>Delta Juinor Collage</h4>

            <div className={style.marks}>90.7%</div>
            <div className={style.year}>2018-2020</div>
          </div>
          <div className={style.sec}>
            <h3>High School</h3>

            <h4>Delta High School</h4>

            <div className={style.marks}>9.2cgpa</div>
            <div className={style.year}>2017-2018</div>
          </div>
          
        </div>

        <h1>Carrer Aspiration</h1>
        <hr/>
        <p className={style.about}>
        Seeking to further my education by pursuing a Master's degree in Data Science to deepen my understanding and expertise in the field. Aspire to work in a dynamic and innovative environment where I can apply my skills in data science and web development to solve complex problems and drive impactful solutions. Committed to continuous learning and professional development to stay updated with the latest advancements in technology and industry trends.
        </p>
        <div className={style.skils}>
          <h1>Skills</h1>
          <hr />
        </div>

        <div className={style.skills}>
          <div className={style.skillContainer}>
            <div>
              <ul className={style.skills}>
                <li className={style.skillsItem}>
                  <FontAwesomeIcon icon={faNodeJs} className={style.nodeIcon} />
                  #Python
                </li>
                <li className={style.skillsItem}>
                  <FontAwesomeIcon icon={faJava} className={style.sassLogo} />
                  #java
                </li>
                <li className={style.skillsItem}>
                  <FontAwesomeIcon icon={faReact} />
                  #React
                </li>
                <li className={style.skillsItem}>
                  
                  #Tableau
                </li>
                <li className={style.skillsItem}>
                  
                  #Flask
                </li>
                <li className={style.skillsItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-database-lock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13 5.698a4.92 4.92 0 0 1-.904.525C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777A4.92 4.92 0 0 1 3 5.698V7c0 .374.356.875 1.318 1.313C5.234 8.729 6.536 9 8 9c.666 0 1.298-.056 1.876-.156-.43.31-.804.693-1.102 1.132A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777A4.92 4.92 0 0 1 3 8.698V10c0 .374.356.875 1.318 1.313C5.234 11.729 6.536 12 8 12h.027a4.548 4.548 0 0 0-.017.8A1.9 1.9 0 0 0 8 13c-1.573 0-3.022-.289-4.096-.777A4.916 4.916 0 0 1 3 11.698V13c0 .374.356.875 1.318 1.313C5.234 14.729 6.536 15 8 15c0 .363.097.704.266.997C8.178 16 8.089 16 8 16c-1.573 0-3.022-.289-4.096-.777C2.875 14.755 2 14.007 2 13V4c0-1.007.875-1.755 1.904-2.223C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4v4.256a4.493 4.493 0 0 0-1.753-.249C12.787 7.654 13 7.289 13 7V5.698Zm-8.682-3.01C3.356 3.124 3 3.625 3 4c0 .374.356.875 1.318 1.313C5.234 5.729 6.536 6 8 6s2.766-.27 3.682-.687C12.644 4.875 13 4.373 13 4c0-.374-.356-.875-1.318-1.313C10.766 2.271 9.464 2 8 2s-2.766.27-3.682.687Z" />
                    <path d="M9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z" />
                  </svg>
                  #My-Sql
                </li>
                <li className={style.skillsItem}>
                  <FontAwesomeIcon icon={faGitAlt} className={style.sassLogo} />
                  #git-github
                </li>
                <li className={style.skillsItem}>
                  <FontAwesomeIcon icon={faHtml5} className={style.sassLogo} />
                  #Html
                </li>
                <li className={style.skillsItem}>#tailwind</li>
                <li className={style.skillsItem}>
                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    className={style.sassLogo}
                  />
                  #css
                </li>
                
                <li className={style.skillsItem}>
                  <FontAwesomeIcon icon={faJs} className={style.sassLogo} />
                  #Javascript
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    );
}
export default About;