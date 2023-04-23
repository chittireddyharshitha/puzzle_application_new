import '../styles/App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import components
import Main from './Main';
import Puzzle from './Puzzle';
import Result from './Result';
import Navbar from './Navbar';
import About from './About';
import Contact from './contact';
import { CheckUserExist } from '../helper/helper';
// import { CheckUserExist } from '../helper/helper';

// react routes
const router = createBrowserRouter([
  {
    path : '/',
    element : <Navbar></Navbar>
  },
  {
    path : '/About',
    element : <About></About>
  },
  {
    path : '/Contact',
    element : <Contact></Contact>
  },
  {
    path : '/main',
    element : <Main></Main>
  },
  {
    path : '/main/puzzle',
    element : <CheckUserExist><Puzzle /></CheckUserExist>
  },
  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>
  },
])

function App() {
  return (
   <>
    <RouterProvider router={router}/>
   </>
  );
}

export default App;
