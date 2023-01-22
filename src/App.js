import "./App.css";

import Header from "./header/Header";

import Sign from "./SignPage/Sign";

import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="sign" element={<Sign/>} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <Section2/>
    // </div>
  );
}

export default App;
