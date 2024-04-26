
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Adduser from './Components/adduser/add'
import Getuser from './Components/getuser/User'
import Edituser from './Components/edituser/edit'
import { Toaster } from 'react-hot-toast';
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
      path: "/edit/:id",
      element: <Edituser />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
