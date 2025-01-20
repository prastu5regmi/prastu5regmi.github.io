import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import aboutimg from './aboutimg.png';

function MyIntro() {
    return (
        <div id='about'className='MyIntro'>
          <h1> About Me</h1>
          <div className='aboutimg'>
            <img src={aboutimg}></img>
          </div>
          <div className='about-content'>
        
          <p>Hi! I'm <b>Prastu</b>, a passionate IT student currently in my 5th semester of pursuing a Bachelor's degree in Information Technology. With a strong foundation in programming, software development, and problem-solving, I am dedicated to exploring innovative solutions in the tech world.<br></br>

I thrive on learning new technologies and applying them to real-world challenges. My journey so far has included building practical projects, such as a flower e-commerce website, which has honed my skills in web development and user experience design. <br></br>

When I'm not coding or studying, I enjoy discovering new trends in technology and finding ways to integrate them into my work. I’m also a firm believer in continuous growth and am eager to collaborate with like-minded individuals to create impactful digital solutions. <br></br>

Feel free to explore my portfolio and get in touch—I'd love to connect and share ideas!</p>
</div>
        </div>
    );
}

export default MyIntro;