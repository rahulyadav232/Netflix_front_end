import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";


import { API_KEY, URLS } from "./constants/index"
import axios from "axios";

axios.defaults.baseURL = URL;
axios.defaults.params = {
  api_key: API_KEY,
};


function App() {
  
  return (
    <div>
      <NavBar />
      <Header />
      <Content />
      <Card />
      
    </div>
  );
}

export default App
