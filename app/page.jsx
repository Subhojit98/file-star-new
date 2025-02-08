import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import InputBox from "./components/InputBox"
import Navbar from "./components/Navbar"
import PlayGround from "./components/PlayGround"
import Workflow from "./components/Workflow"

const page = () => {



  return (
    <div>
      <Navbar />
      <Hero />
      {/* for extra scpace -> */}
      <div className="w-full h-[30vh]"></div>
      <HowItWorks />
      <Workflow />
      <PlayGround/>
    </div>
  )
}

export default page
