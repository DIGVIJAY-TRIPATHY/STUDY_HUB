
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import NoticeIntro from "./NoticeIntro";
import NoticeCategories from "./NoticeCategories";
import NoticeList from "./NoticeList";
import NoticeCTA from "./NoticeCTA";
const Notices = () => {
  const [activeCategory, setActiveCategory] = useState("All Notices");
  const [search, setSearch] = useState("");

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
    <div id="notices" className="scroll-mt-20">
      <NoticeIntro />

      <NoticeCategories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="px-6 pt-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <input
            type="text"
            placeholder="Search notices..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <NoticeList
        activeCategory={activeCategory}
        search={search}
      />

      <NoticeCTA />
    </div>
  );
};

export default Notices;
