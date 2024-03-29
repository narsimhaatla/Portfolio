import style from '../css/contact.module.css'
import {useRef,useState} from 'react';
import {useNavigate} from 'react-router-dom'
function Contact(){
   let name=useRef("")
   let mail=useRef("")
   let phno=useRef("")
   let message=useRef("")
   const navigate =useNavigate()
   let [load,setload]=useState(false)
    function clickHandler(){
        setload(true)
        let details={
            username:name.current.value,
            usermail:mail.current.value,
            userphno:phno.current.value,
            usermessage:message.current.value,
        }
        fetch('https://portfolio-database-ad8f7-default-rtdb.firebaseio.com/information.json',{
            method:'post',
            body:JSON.stringify(details)
        }).then(()=>{
            setload(false)
            navigate("/");
        })
       
      
    }
    return (
        <div className={style.card}>
            
            <h1>Contact Me <span className={load == true ? style.loade : ''}></span></h1>
            <input type="text" name='Name' ref={name} placeholder="Name"/>
            <input type="email" name='Mail' ref={mail} placeholder="name@example.com"/>
            <input type="text"  name='Phno' ref={phno} placeholder="Phone"/>
            <input type="text"  name='Message' ref={message} placeholder="Message"/>
           
            <div className={style.icons}>
            <button className={style.btn} onClick={clickHandler}>Submit</button>
                <div>
                <a href="https://wa.me/9492187175?text=Hi%20Narsimha!" target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                </a>
                
                <a target='blank' href="https://mail.google.com/mail/u/0/?fs=1&to=atlanarsimha17@gmail.com&tf=cm">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" fill="currentColor" class="bi bi-envelope-open" viewBox="0 0 16 16">
                    <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z"/>
                    </svg>
                </a>
                </div>
            </div>

        </div>
    )
}
export default Contact;