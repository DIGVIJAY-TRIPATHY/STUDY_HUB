
import {LuCalendarDays} from "react-icons/lu";
import { FiArrowUpRight } from "react-icons/fi";
import { MdPushPin } from "react-icons/md";

const notices = [
  {
    id: 1,
    title: "End Semester Examination Notice",
    category: "Examinations",
    date: "06 November 2026",
    description:
      "Students are informed that the end semester examination schedule will be announced soon. Please check the portal regularly.",
    important: true,
  },
  {
    id: 2,
    title: "Assignment Submission Deadline",
    category: "Academics",
    date: "05 November 2026",
    description:
      "All students are requested to complete and submit their pending assignments before the specified deadline.",
    important: true,
  },
  {
    id: 3,
    title: "Technical Workshop Announcement",
    category: "Events",
    date: "04 November 2026",
    description:
      "A technical workshop will be organized for students to improve their practical knowledge and technical skills.",
    important: false,
  },
  {
    id: 4,
    title: "Internal Assessment Schedule",
    category: "Examinations",
    date: "02 November 2026",
    description:
      "Students should check the internal assessment timetable and prepare according to the examination schedule.",
    important: false,
  },
  {
    id: 5,
    title: "Academic Activity Update",
    category: "Academics",
    date: "01 November 2026",
    description:
      "Students are requested to follow the academic calendar for upcoming classes and academic activities.",
    important: false,
  },
];

const NoticeList = ({ activeCategory, search }) => {
  const filteredNotices = notices.filter((notice) => {
    const matchesCategory =
      activeCategory === "All Notices" ||
      notice.category === activeCategory;

    const matchesSearch =
      notice.title.toLowerCase().includes(search.toLowerCase()) ||
      notice.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Latest Notices
          </h2>

          <span className="text-sm text-gray-500">
            {filteredNotices.length} Notices
          </span>
        </div>

        <div className="space-y-5">
          {filteredNotices.map((notice, index) => (
            <div
              key={notice.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <LuCalendarDays size={16} />
                  {notice.date}
                </div>

                <div className="flex items-center gap-2">
                  {notice.important && (
                    <span className="flex items-center gap-1 text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      <MdPushPin size={13} />
                      Important
                    </span>
                  )}

                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {notice.category}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {notice.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {notice.description}
              </p>

              <button
                onClick={() => alert(notice.description)}
                className="mt-5 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800"
              >
                Read More
                <FiArrowUpRight size={17} />
              </button>
            </div>
          ))}
        </div>

        {filteredNotices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl">
            <p className="text-gray-500">
              No notices found.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default NoticeList;
