import { IoMailUnreadSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaMapPin,FaClock } from "react-icons/fa";


const contactDetails = [
  {
    icon: IoMailUnreadSharp,
    title: "Email Address",
    value: "yourcollege@example.com",
    link: "mailto:yourcollege@example.com",
  },
  {
    icon: FaPhone,
    title: "Phone Number",
    value: "+91 9876543210",
    link: "tel:+919876543210",
  },
  {
    icon: FaMapPin,
    title: "College Address",
    value: "Your College Address, Bhubaneswar, Odisha",
    link: null,
  },
  {
    icon: FaClock,
    title: "Working Hours",
    value: "Monday - Saturday, 9:00 AM - 5:00 PM",
    link: null,
  },
];

const ContactInfo = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900">
            Get In Touch
          </h2>
          <p className="text-gray-600 mt-3">
            Here are the different ways to reach us.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-center"
              >
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={26} />
                </div>

                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>

                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-600 text-sm break-words hover:text-blue-600"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-600 text-sm">
                    {item.value}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;
