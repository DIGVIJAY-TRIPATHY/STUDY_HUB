
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import CourseHero from "./CourseHero";
import CourseCategories from "./CourseCategories";
import CourseList from "./CourseList";
import WhyChooseUs from "./WhyChooseUs";
import CourseCTA from "./CourseCTA";
const Courses = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50" id="courses-page">

      <CourseHero />

      <CourseCategories />

      <CourseList />

      <WhyChooseUs />

      <CourseCTA />

    </div>
  );
};

export default Courses;
