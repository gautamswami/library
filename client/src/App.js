import './App.css';
import Header from './modules/header';
import {Link} from 'react-router-dom'
function App() {
  return (
 <div>
  <Header/>
  <Link to={'/login'}>LOGIN</Link>
  <Link to={'/uploadform'}>UPLOAD</Link>

 </div>
   
  );
}

export default App;
