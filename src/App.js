import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import MyIntro from './About';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <div className='logo'>  Portfolio </div>
        <div className='navcontent'>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#education'>Education</a>
          <a href='#experience'>Experience</a>
          <a href='#contact'>Contact</a>
        </div>
      </div>
      <Homepage/>
      <MyIntro/>
      <Education/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
