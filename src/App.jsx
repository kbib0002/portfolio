import "./index.css";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Experience } from "./components/Experience";

function App() {

  return (
    <>
        <div>

        <NavigationBar />
        <Home/>
        <About/>
        <Experience/>

        </div>
    </>
  );
}

export default App;