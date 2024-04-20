
import './App.css';
import {createBrowserRouter} from './BrowserRouter.js';


function App() {
  const route = createBrowserRouter(
[{
  path:"/",
  element:"Home Page",
},
{
  path:"/add",
  element:"User add ",
},
{
  path:"/edit",
  element:"Edit page",
},
]
  );
  return (
    <div className="App">
Hi
    </div>
  );
}

export default App;
