import { Routes, Route } from "react-router-dom";
import routes from "./utils/routes";
import Home from "./pages/home/Home";
import Navbar from './sections/navbar/Navbar'

function App() {
  return (
    <section className="pt-4">
      <div className="sticky">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path={routes.home} element={<Home />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
