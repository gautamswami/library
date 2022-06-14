import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './modules/login';
// import UploadForm from './modules/upload/uploadform'
import Upload from "./modules/upload";
import Home from './modules2/home/Home'
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes> 
      <Route path="/" element={<App />} />
      <Route path="*" element={<App />} />
   <Route path="/login" element={<Login />} />
      <Route path="/uploadform" element={< Upload/>} />
    
    </Routes>
    {/* <App /> */}
  </BrowserRouter>,
  rootElement
);