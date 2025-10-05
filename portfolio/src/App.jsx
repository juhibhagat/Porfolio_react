import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Service from "./pages/service"
import Contact from "./pages/Contact"
import { Header } from "./component/header"
import Footer from "./component/footer"
import About from "./pages/About"

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>}/>


        </Routes>
      </Router>
      <Footer />

    </div>
  )
}
export default App