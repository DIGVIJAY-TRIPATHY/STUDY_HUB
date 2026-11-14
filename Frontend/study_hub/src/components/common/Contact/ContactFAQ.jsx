import { FaPlus,FaMinus } from "react-icons/fa6";
import { useState } from "react";


const faqs = [
  {
    question: "What is the purpose of the StudyHub LMS portal?",
    answer:
      "StudyHub is a learning management portal that helps students access courses, study materials, notices, and academic information.",
  },
  {
    question: "How can students access study materials?",
    answer:
      "Students can log in to their accounts and access the available notes and learning resources.",
  },
  {
    question: "Who can create an account?",
    answer:
      "Account registration is managed by authorized administrators according to the portal's access policy.",
  },
  {
    question: "What should I do if I face login problems?",
    answer:
      "Contact the portal administrator or support team for assistance with your login issues.",
  },
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3">
            Find answers to some common questions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-semibold text-gray-800">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <FaMinus className="text-blue-600 shrink-0" />
                ) : (
                  <FaPlus className="text-blue-600 shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactFAQ;
