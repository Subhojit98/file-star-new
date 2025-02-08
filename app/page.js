import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import InputBox from "./components/InputBox"
import Navbar from "./components/Navbar"
import Workflow from "./components/Workflow"

const page = () => {



  return (
    <div>
      <Navbar />
      <Hero />
      {/* for extra scpace -> */}
      <div className="w-full h-[50vh]"></div>
      <HowItWorks />
      <Workflow />
      <InputBox />
    </div>
  )
}

export default page
