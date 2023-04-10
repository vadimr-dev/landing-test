import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import { useEffect, useContext } from 'react';
import { AppContext } from "./context/Context";
import Rings from './components/Rings/Rings'
import Registration from "./components/Registration/Registration";

function App() {

  const data = useContext(AppContext);

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