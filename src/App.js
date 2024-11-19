import Navigation from "./Components/Navigation/Navigation";
import Homepage from "./Components/Homepage";
import Photopage from "./Components/Photopage";
import Info from "./Components/Info";
import Program from "./Components/Program";
import Gifts from "./Components/Gifts";
import Dresscode from "./Components/Dresscode";
import Participation from "./Components/Participation";

const App = () => {
  return (
    <div className="App">
        <Navigation />
        <Homepage />
        <Photopage />
        <Info />
        <Program />
        <Gifts />
        <Dresscode />
        <Participation />
    </div>
  );
}

export default App;
