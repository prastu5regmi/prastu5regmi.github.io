import logo from './logo.svg';
import './App.css';

function Experience() {
    return (
<div id='experience' className="experience">
  <h1>Experience</h1>
  <div class="experience-grid">
    <div class="card">
      <div class="card-header">Software Developer</div>
      <div class="card-body">
        <h4>ABC Tech Solutions</h4>
        <p>2022 - Present</p>
        <p>Developed and maintained web applications, improved system performance, and collaborated with cross-functional teams to deliver high-quality software solutions.</p>
      </div>
    </div>

    <div class="card">
      <div class="card-header">Intern - Web Development</div>
      <div class="card-body">
        <h4>XYZ Web Agency</h4>
        <p>2021 - 2022</p>
        <p>Assisted in creating responsive websites, debugging code, and enhancing user experience for various client projects.</p>
      </div>
    </div>
  </div>
</div>
    );
}

export default Experience;