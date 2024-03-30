import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import  {Home, Projects ,Maramilod, Lujain} from "./pages";
//import Navbar  from "./components/Navbar";

const App = () => {
  return (
    <main>
      <Router>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/yas' element={<Projects />} />
          <Route path='/maramilod' element={<Maramilod />} />
          <Route path='/lujain' element={<Lujain />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App;
