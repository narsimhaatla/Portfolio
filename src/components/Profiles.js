import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faInstagram,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import style from '../css/profiles.module.css'
function Profiles(){
    return(
        
            <div className={style.sticky}>
          <a href='https://mail.google.com/mail/u/0/?fs=1&to=atlanarsimha17@gmail.com&tf=cm'>
          <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href='https://www.instagram.com/narsimhaatla/'>
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='https://github.com/narsimhaatla'>
          <FontAwesomeIcon icon={faGithub} />
          </a >
          <a href='https://www.linkedin.com/in/narsimha-reddy-atla-843b39243/'>
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
          
        </div>
        
    );
}
export default Profiles; 