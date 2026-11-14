import {FaBell,FaBookOpen} from "react-icons/fa";
import { LuCalendarDays,LuPartyPopper } from "react-icons/lu";
const categories = [
  { name: "All Notices", icon: FaBell },
  { name: "Examinations", icon: LuCalendarDays },
  { name: "Academics", icon: FaBookOpen },
  { name: "Events", icon: LuPartyPopper },
];


const NoticeCategories = ({ activeCategory, setActiveCategory }) => {
  return (
    <section className="px-6 pt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <button
                key={index}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition ${
                  activeCategory === category.name
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border hover:bg-blue-50"
                }`}
              >
                <Icon size={18} />
                {category.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NoticeCategories;
