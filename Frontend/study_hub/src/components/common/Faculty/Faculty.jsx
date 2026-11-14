import FacultyIntro from "./FacultyIntro";
import FacultyList from "./FacultyList";
import WhyOurFaculty from "./WhyOurFaculty";
import FacultyCTA from "./FacultyCTA";

function Faculty() {
  return (
    <div id="faculty" className="scroll-mt-20">
      <FacultyIntro />
      <FacultyList />
      <WhyOurFaculty />
      <FacultyCTA />
    </div>
  );
}

export default Faculty;