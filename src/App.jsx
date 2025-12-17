import './App.module.css'
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Avatar } from "./components/Avatar/Avatar";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Avatar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
