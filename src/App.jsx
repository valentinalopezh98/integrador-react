import Navbar from "./components/Navbar/Navbar"
import Layout from "./components/Layout/Layout"
import Footer from "./components/Footer/Footer"
import { Conocenos } from "./components/Conocenos/Conocenos"
import AboutUs from "./pages/AboutUs/AboutUs"
import Contact from "./pages/Contact/Contact"
import { NotFound } from "./pages/NotFound/NotFound"
import { Menu } from "./components/Menu/Menu"
import {Home} from "./pages/Home/Home"

function App() {

  return (
    <>
    <Navbar/>
    
    <Layout>
      <Home/>
    </Layout>    

    <Footer/>
    </>
  )
}

export default App
