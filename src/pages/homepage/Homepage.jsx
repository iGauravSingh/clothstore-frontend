import BannerTop from "../../components/bannerTop/BannerTop"
import BannerBottom from "../../components/bannerbottom/BannerBottom"
import Category from "../../components/category/Category"
import Favorite from "../../components/favorite/Favorite"
import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import Navbar from "../../components/navbar/Navbar"


const Homepage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Category />
    <BannerTop />
    <Favorite />
    <BannerBottom />
    <Footer />
    </>
  )
}

export default Homepage