import Navbar from "./components/Navbar/Navbar"
import Layout from "./components/Layout/Layout"
import Hero from "./components/Hero/Hero"
import SocialContainer from "./components/SocialContainer/SocialContainer"
import { AboutUs } from "./components/AboutUs/AboutUs"
import Featured from "./components/Featured/Featured"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <Navbar/>

      <Layout>
          <Hero/>
          <SocialContainer/>
          <AboutUs/>
          <Featured/>
      </Layout>
      
      <Footer/>
    </>

  )
}

export default App
