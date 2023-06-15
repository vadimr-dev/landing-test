import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import Rings from './components/Rings/Rings'
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <div className="appWrapper">
      {/* <Registration /> */}
      <Rings />
      <BackgroundImage />
      <Header />
      <Main />
    </div>
  );
}

export default App;