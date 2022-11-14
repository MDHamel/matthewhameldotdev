
import './App.css';

import Navbar from "./components/NavBar/NavBar";
import StartUp from "./sections/Boot/Boot";
import Intro from './sections/Intro/Intro';
import AboutMe from './sections/AboutMe/AboutMe';
import Experience from './sections/Experience/Experience';
import MadeByMe from './sections/MadeByMe/MadeByMe';
import ReachOut from './sections/ReachOut/ReachOut';

function App() {
  return (
    <div className="App">
        <StartUp />
        <main>
            <Navbar />
            <Intro />
            <AboutMe />
            <Experience />
            <MadeByMe />
            <ReachOut />
        </main>
    </div>
  );
}

      
export default App;
