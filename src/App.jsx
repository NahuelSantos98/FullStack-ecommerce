import { Routes, Route } from "react-router-dom";
import routes from "./utils/routes";
import Home from "./pages/home/Home";
import Navbar from './sections/navbar/Navbar'
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <section className="pt-4">
      <article className="sticky top-0 bg-white z-[100]">
        <Navbar />
      </article>
      <article>
        <Routes>
          <Route path={routes.home} element={<Home />} />
        </Routes>
      </article>
      <article className="border border-t-2 mt-4 flex justify-center">
        <Footer />
      </article>
    </section>
  );
}

export default App;
