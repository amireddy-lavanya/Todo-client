import './App.css';
import{BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Todo from './Components/Todo'
import { Provider } from './Components/axios/axiosContext';
import { Navigate } from 'react-router-dom';

 const token =localStorage.getItem("token")
 console.log(token)
function App() {
  return (
    <div>
      <BrowserRouter>
      <Provider>
      <Routes>
        <Route path ='/' element={<Login/>} ></Route>
        <Route path ='/register' element ={<Register/>} ></Route>
        {/* <Route path = '/todo' element={<Todo/>} ></Route> */}

        <Route path = '/todo' element={token ? <Todo/> : <Navigate replace to= {'/'} />} ></Route>
      </Routes>
      </Provider>
      </BrowserRouter>
          
    </div>
  );
}

export default App;
