import style from '../css/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
function Footer(){
    return(
        <div className={style.foot}>
            




            Made With <FontAwesomeIcon icon={faReact} style={{color: "#1f5141",}} /> |<span className={style.nam}>ATLA NARSIMHA REDDY</span> 
            
        </div>
    )
}
export default Footer; 