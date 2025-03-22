import './App.css'
import Blog from './components/Blog'
import Category from './components/Category'
import Fashion from './components/Fashion'
import Footer from './components/Footer'
import HomeContainer from './components/Home'
import Navbar from './components/NavBar'
import Seller from './components/Seller'
import Trending from './components/Trending'

function App() {

  return (
    <>
    <Navbar/>
    <HomeContainer/>
    <Fashion/>
    <Trending/>
    <Seller/>
    <Category/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default App
