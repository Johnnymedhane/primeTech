
import WhyChooseUs from "../features/aboutUs/WhyChooseUs"
import Courses from "../features/courses/Courses"
import Projects from "../features/projects/Projects"
import Testimonials from "../features/testimony/Testimonials"
import Hero from "../ui/Hero"
import Contact from "../features/contacts/Contact"



function HomePage() {
 

  return (
    <>
    <Hero />
    <WhyChooseUs />
    <Courses />
    <Testimonials />
    <Projects />
    <Contact />
    </>

  )
}

export default HomePage
