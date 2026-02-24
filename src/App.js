import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import List from "./pages/List";
import Details from "./pages/Details";
import PhotoResult from "./pages/PhotoResult";

function App() {
  return (
    <Router>
      <h1 style={{textAlign:"center", color:"white"}}>Jotish Intern Assignment</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/photo" element={<PhotoResult />} />
      </Routes>
    </Router>
  );
}

export default App;