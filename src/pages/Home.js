import style from '../css/home.module.css';
import img from '../images/nar.jpg';

function Home() {
  

  return (
    <div className={style.margi}>
      <div className={style.main}>
        <div>
          <img className={style.img} src={img} alt="Profile" />
        </div>

        <div className={style.left}>
        {/* <h1>Hey I am <span className='multiple-text' style={{ color: 'aqua' }}>Dinesh....🙋‍♂️</span></h1> */}

          <h3>
          Greetings! I am Atla Narsimha Reddy, a driven and dedicated B.Tech student majoring in Computer Science with a specialization in Data Analytics. With a profound passion for both Data Science and Web Development, I am committed to leveraging my skills and knowledge to make meaningful contributions in the field. Seeking to further my education by pursuing a Master's degree in Data Science to deepen my understanding and expertise in the field.
          </h3>
          <div className={style.pea}>
            <a href='Narsimha_Resume.pdf' download='Narsimha_Resume.pdf'>
              <div className={style.btn}>
                <p className={style.txt}>Resume</p>
                <div>
                  <svg className={style.txt} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
