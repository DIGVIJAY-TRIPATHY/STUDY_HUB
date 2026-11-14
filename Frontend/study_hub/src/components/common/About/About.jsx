import AboutIntro from "./AboutIntro.jsx";
import WhoWeAre from "./WhoWeAre.jsx";
import OurMission from "./OurMission.jsx";
import OurVision from "./OurVision.jsx";
import WhatWeOffer from "./WhatWeOffer.jsx";
import OurGoal from "./OurGoal.jsx";

const About = () => {
  return (
    <div id="about" className="scroll-mt-20 min-h-screen bg-slate-50 text-gray-800">
      <AboutIntro />
      <div className="scroll-mt-20 bg-white"><WhoWeAre /></div>
      <div className="scroll-mt-20 bg-sky-100"><OurMission /></div>
      <OurVision />
      <div className="scroll-mt-20 bg-amber-50"><WhatWeOffer /></div>
      <div className="scroll-mt-20"><OurGoal /></div>
    </div>
  );
};

export default About;
