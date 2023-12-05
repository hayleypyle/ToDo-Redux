import {HashRouter, Routes, Route, Link} from 'react-router-dom'
import ToDo from './pages/todo'
import Contact from './pages/contact'

import './App.css';

function App() {
  return (
    <HashRouter>
          <ul>
          <li><Link to="/">To Do List</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      <Routes>
        <Route path='/' element={<ToDo/>}>To Do List</Route>
        <Route path='/contact' element={<Contact/>}>Contact</Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
