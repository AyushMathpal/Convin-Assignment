import { createContext, useState } from "react";
import {BrowserRouter as Router, Route,Routes } from "react-router-dom";
import "./App.css";
import CardComponents from "./components/CardComponents";
import NavBar from "./components/NavBar";
import History from "./components/Pages/History/History";
const Context = createContext();

function App() {
  
  const [tag, setTag] = useState("All");
  const [data, setData] = useState({
    name: "",
    link: "",
    bucket: "other",
    addbucket:"",
    click:0,
    
  });
  const [options,setOptions] = useState([ "other","yes", "no"]);
  const [val, setVal] = useState([
    { name: "Video 1",
      link:"https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
      bucket:"yes",
      click:0,
    },
    {
      name:"Video 2",
      link:"https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
      bucket:"no",
      click:0,
    } 
]);
  return (
    <Router>
    <div className="App">
      <Context.Provider value={{ val, setVal ,options,setOptions,data,setData,tag,setTag}}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<CardComponents />}/> 
        <Route path="/history" element={<History/>}/>
      </Routes>

      </Context.Provider>
    </div>
    </Router>
  );
}

export default App;
export { Context };
