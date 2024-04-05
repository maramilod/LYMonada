// Import necessary components from react-router-dom for routing
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Import the Home, Projects, Maramilod, and Lujain components from the pages directory
import { Home, Projects, Maramilod, Lujain } from "./pages";

// Define the main App component
const App = () => {
 return (
    <main>
      // Use the Router component to enable routing in the application
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

// Export the App component as the default export
export default App;
