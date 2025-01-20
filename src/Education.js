import logo from './logo.svg';
import './App.css';

function Education() {
    return (
<div id='education' className="timeline">
<h1>Education</h1>
        <div class="timeline-item left">
            <div class="timeline-content">
                <h4>BCIS</h4>
                <p>Pokhara University</p>
                <p>2021 - Present</p>
            </div>
        </div>
        <div class="timeline-item right">
            <div class="timeline-content">
                <h4>High School</h4>
                <p>XYZ Higher Secondary School</p>
                <p>2019 - 2021</p>
            </div>
        </div>
        <div class="timeline-item left">
            <div class="timeline-content">
                <h4>Secondary School</h4>
                <p>ABC Secondary School</p>
                <p>2007 - 2019</p>
            </div>
        </div>
    </div>
     );
    }

export default Education;