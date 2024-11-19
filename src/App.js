

import HealthTips from "./components/HealthTips";
import Team from "./components/Team";
import News from "./components/News";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Motivation from "./components/Motivation";


const App = () => {
    return (
        <div>
          <Home/>
        <HealthTips />
        <News/>
        <Team />
        
        <Motivation/>
        <Footer/>
        </div>
    );
};

export default App;

