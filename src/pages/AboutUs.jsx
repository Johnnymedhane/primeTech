import WhyChooseUs from "../features/aboutUs/WhyChooseUs"
import usePageTitle from "../hooks/usePageTitle";
import Hero from "../ui/Hero"


function AboutUs() {
  usePageTitle("About Us");
  return (
   <>
   <Hero />
   <WhyChooseUs />
   
   </>
  )
}

export default AboutUs
