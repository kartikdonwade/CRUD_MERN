
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Adduser from './Components/adduser/add'
import Getuser from './Components/getuser/User'
import Edituser from './Components/edituser/edit'
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Getuser />,
    },
    {
      path: "/add",
      element: <Adduser />,
    },
    {
      path: "/edit",
      element: <Edituser />,
    },
  ]);
  return (
    <div className="App">
<RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
