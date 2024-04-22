
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Adduser from './Components/adduser/User'
import Getuser from './Components/getuser/User'
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
      element: <Getuser />,
    },
  ]);
  return (
    <div className="App">
<RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
