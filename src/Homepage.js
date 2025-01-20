import logo from './logo.svg';
import './App.css';
import profile from './profile.png';

function Homepage() {
    return (
        <div id='home' className='Body'>
            <div className='Intro'>
                <h1>Hi There,</h1>
                <h3> I'm Prastu !!</h3>
                <button className='button'>About Me </button>
            </div>
            <div className='Profile'>
                <img src={profile}></img>
            </div>
        </div>
    );
}

export default Homepage;